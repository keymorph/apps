import { getContainer } from "../models/database";

/**
 * Returns an url by performing a point read against the existing documents in the db
 *
 * @param slug - The slug to get the url for
 * @returns The url for the slug passed. If no url is found for the slug, undefined or null will be returned
 */
export async function getUrlFromSlug(
  slug: string
): Promise<string | undefined | null> {
  const links = await getContainer("links");
  return links
    .item(slug, slug)
    .read()
    .then(({ resource: item }) => {
      return item?.url;
    });
}
