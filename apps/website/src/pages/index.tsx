import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import MembersSection from "../components/MembersSection";
import ProjectsSection from "../components/ProjectsSection";
import { Member, members } from "../models";
import { getKeymorphCommitsForMembers } from "../utils";

interface Props {
  sortedMembers: Member[];
}

export default function Home({ sortedMembers }: Props) {
  return (
    <div
      className={
        "relative min-h-screen w-screen select-none overflow-x-hidden text-text-primary"
      }
    >
      <MainHeader />
      <section className="flex min-h-full flex-col justify-between gap-24 pb-20 xl:flex-row">
        <MembersSection sortedMembers={sortedMembers} />
        <ProjectsSection />
      </section>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const isProduction = process.env.NODE_ENV === "production";
  const commits = isProduction ? await getKeymorphCommitsForMembers() : [];
  const membersWithCommits = members.map((member) => ({
    ...member,
    commitCount: isProduction
      ? commits[commits.findIndex((commit) => commit.url === member.githubURL)]
          .commitCount
      : 0,
  }));
  const sortedMembers = membersWithCommits.sort(
    (a, b) => b.commitCount - a.commitCount
  );

  return {
    props: {
      sortedMembers,
    },
    revalidate: 18000, // At least these many seconds will pass until the page is revalidated with the new static props
  };
}
