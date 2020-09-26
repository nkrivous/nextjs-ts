import React from "react";
import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "~/src/theme/theme";
import { initSentry } from "~/src/sentry";
import "~/src/theme/font-face.css";

//import I18nProvider from "~/src/common/I18nProvider";

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  initSentry();
}

export default function CustomApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    // <I18nProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    // </I18nProvider>
  );
}
