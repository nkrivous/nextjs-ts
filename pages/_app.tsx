import React from "react";
import { AppProps } from "next/app";
//import I18nProvider from "~/src/common/I18nProvider";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    // <I18nProvider>
    <Component {...pageProps} />
    // </I18nProvider>
  );
}
