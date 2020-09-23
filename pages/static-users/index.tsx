import { Divider, Link, Typography } from "@material-ui/core";
import NextLink from "next/link";
import React from "react";
import { sampleUserData } from "~/mocks/users/sample-data";
import Layout from "~/src/components/Layout";
import UserList from "~/src/modules/users/components/UserList";
import { User } from "~/src/modules/users/types/user";

interface Props {
  items: User[];
}

export default function StaticUsersPage({ items }: Props) {
  return (
    <Layout title="Static Users List | Next.js + TypeScript Example">
      <Typography variant="h1">Static Users List</Typography>
      <Divider />
      <Typography variant="subtitle1">
        Example fetching data from inside <code>getStaticProps()</code>
      </Typography>
      <Typography variant="body1">
        You are currently on: /static-users
      </Typography>
      <UserList items={items} />
      <NextLink href="/">
        <Link href="/">Go home</Link>
      </NextLink>
    </Layout>
  );
}

export async function getStaticProps() {
  const items: User[] = sampleUserData;
  return { props: { items } };
}
