import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getUrlFromSlug } from "./data/services/url";

// Disabled for now, alternative solution that uses nodeJs in pages/[...slugs]
export async function disabled_middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const slug = request.url.split("/").pop() || "";
  const PUBLIC_FILE = /\.(.*)$/;

  // Prevent middleware from running during an intermediate request or when there is no slug
  if (
    !slug ||
    pathname.startsWith("/_next") || // exclude Next.js internals
    pathname.startsWith("/api") || //  exclude all API routes
    pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }

  return await getUrlFromSlug(slug)
    .then((url) => {
      if (url) {
        return NextResponse.redirect(new URL(url, request.url));
      } else {
        return NextResponse.redirect(new URL(origin, request.url));
      }
    })
    .catch((error) => {
      console.error(error.message);
      return NextResponse.redirect(new URL(origin, request.url));
    });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:slug*",
};
