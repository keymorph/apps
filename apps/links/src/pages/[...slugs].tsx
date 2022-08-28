/*
  Redirect the
*/
import { getUrlFromSlug } from "../data/services/url";

export default function AnySlug() {
  return <></>;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

// When deployed, any slug previously entered is cached by vercel and any subsequent user that visits that slug
// won't have to wait for the db operation.
export async function getStaticProps(context: { params: { slugs: string[] } }) {
  const slugs = context.params.slugs;
  const redirectToHome = {
    redirect: {
      permanent: true,
      destination: process.env.NEXT_PUBLIC_APP_URL, // Redirect to the Links app home page
    },
  };

  if (slugs?.length !== 1) {
    return redirectToHome;
  }

  const slug = slugs[0] || "";
  return await getUrlFromSlug(slug)
    .then((url) => {
      if (url) {
        return {
          redirect: {
            permanent: true,
            destination: url,
          },
        };
      } else {
        return redirectToHome;
      }
    })
    .catch((error) => {
      console.error(error.message);
      return redirectToHome;
    });
}
