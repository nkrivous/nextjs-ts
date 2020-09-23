import { Typography, Divider } from "@material-ui/core";
import React from "react";
import Layout from "~/src/components/Layout";

interface Props {
  time: string;
}

export default function LastUpdatePage({ time }: Props) {
  return (
    <Layout title="Last Update | Next.js + TypeScript Example">
      <Typography variant="h1">Last Update</Typography>
      <Divider />
      <Typography variant="body1">{time}</Typography>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 1,
  };
}
