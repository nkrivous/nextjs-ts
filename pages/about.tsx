import Link from "next/link";
import React from "react";
import { useIntl } from "react-intl";
import Box from "~/src/components/Box";
import Layout from "~/src/components/Layout";

export default function AboutPage() {
  const { formatMessage } = useIntl();

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <Box>
        {formatMessage({ id: "general.one" })}
        {formatMessage({ id: "general.two" })}
      </Box>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
}
