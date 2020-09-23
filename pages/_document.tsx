import React from "react";
import Document, {
  Head,
  Main,
  NextScript,
  Html,
  DocumentContext,
} from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

async function getInitialProps(ctx: DocumentContext) {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
}

CustomDocument.getInitialProps = getInitialProps;
