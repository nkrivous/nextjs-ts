import React from "react";
import Layout from "~/src/components/Layout";

interface Props {
  time: string;
}

export default function LastUpdatePage({ time }: Props) {
  return (
    <Layout title="Time static generation">
      <p>Last updated: {time}</p>
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
