import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
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
    <SessionProvider session={session}>
      <RecoilRoot>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
