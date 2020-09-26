import { Divider, Link, Typography } from "@material-ui/core";
import React from "react";
import NextLink from "next/link";
import Layout from "~/src/components/Layout";

export default function ErrorPage() {
  return (
    <Layout title="Error | Next.js + TypeScript Example">
      <Typography variant="h1">Something went wrong.</Typography>
      <Divider />
      <NextLink href="/" passHref>
        <Link>Go home</Link>
      </NextLink>
    </Layout>
  );
}
