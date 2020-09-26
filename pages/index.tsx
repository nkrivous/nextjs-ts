import { Divider, Link, Typography } from "@material-ui/core";
import NextLink from "next/link";
import React from "react";
import Layout from "~/src/components/Layout";

export default function IndexPage() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Typography variant="h1">Hello Next.js 👋</Typography>
      <Divider />
      <ul>
        <li>
          <NextLink href="/about" passHref>
            <Link>About</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/users" passHref>
            <Link>Users List</Link>
          </NextLink>
        </li>
      </ul>
    </Layout>
  );
}
