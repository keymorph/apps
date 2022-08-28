import "tailwindcss/tailwind.css";
import "ui/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

function Account({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Account — Keymorph</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default Account;
