import React from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
