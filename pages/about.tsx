import { Button, Divider, Link, Typography } from "@material-ui/core";
import NextLink from "next/link";
import React, { useState } from "react";
import Box from "~/src/components/Box";
import Layout from "~/src/components/Layout";

export default function AboutPage() {
  const [count, setCount] = useState(0);
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <Typography variant="h1">About</Typography>
      <Divider />
      <Typography variant="subtitle1">This is the about page</Typography>
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            setCount((value) => value + 1);
          }}
        >
          Click me: {count}
        </Button>
      </Box>
      <p>
        <NextLink href="/">
          <Link href="/">Go home</Link>
        </NextLink>
      </p>
    </Layout>
  );
}
