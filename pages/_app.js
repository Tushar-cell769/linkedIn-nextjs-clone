import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
const progress = new ProgressBar({
  size: 4,
  color: "#0a66c2",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/logos/linkedin.ico" />
      </Head>
      <SessionProvider session={session}>
        <RecoilRoot>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </SessionProvider>
    </Fragment>
  );
}

export default MyApp;
