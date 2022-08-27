// Add githubURL to members
import { members, projects } from "../models";

export async function getKeymorphCommitsForMembers() {
  const commitsForGithubURLs = members.map((member) => {
    return {
      url: member.githubURL,
      commitCount: 0,
    };
  });

  for (const project of projects) {
    let githubURL = project.githubURL;

    if (project.githubURL.endsWith("/")) {
      githubURL = project.githubURL.slice(0, -1);
    }
    const githubProjectName = project.githubURL.substring(
      githubURL.lastIndexOf("/") + 1,
      githubURL.length
    );

    let currentPage = 1;

    while (currentPage > 0) {
      const response = await fetch(
        `https://api.github.com/repos/FourScript/${githubProjectName}/commits?page=${currentPage}&per_page=100`
      )
        .then((r) => r.json())
        .catch((e) => console.error(e.message));

      if (!response || response.length === 0 || response.message) {
        currentPage = 0;
      } else {
        for (const commit of response) {
          const commitURL = commit.author?.html_url;

          if (commitURL) {
            const commitURLIndex = commitsForGithubURLs.findIndex(
              (commitForGithubURL) =>
                commitForGithubURL.url.toLowerCase() === commitURL.toLowerCase()
            );

            if (commitURLIndex > -1) {
              commitsForGithubURLs[commitURLIndex].commitCount++;
            }
          }
        }
        currentPage++;
      }
    }
  }

  return commitsForGithubURLs;
}
