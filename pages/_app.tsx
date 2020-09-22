import React from "react";
import { AppProps } from "next/app";
import IntlContext from "../src/common/IntlContext";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <IntlContext>
      <Component {...pageProps} />
    </IntlContext>
  );
}
