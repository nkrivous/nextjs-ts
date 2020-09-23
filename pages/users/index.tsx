import { Typography, Divider, Link } from "@material-ui/core";
import NextLink from "next/link";
import React from "react";
import { sampleUserData } from "~/mocks/users/sample-data";
import Layout from "~/src/components/Layout";
import UserList from "~/src/modules/users/components/UserList";
import { User } from "~/src/modules/users/types/user";

interface Props {
  items: User[];
}

export default function UsersPage({ items }: Props) {
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <Typography variant="h1">Users List</Typography>
      <Divider />
      <Typography variant="subtitle1">
        Example fetching data from inside <code>getServerSideProps()</code>
      </Typography>
      <Typography variant="body1">You are currently on: /users</Typography>
      <UserList items={items} />
      <NextLink href="/">
        <Link href="/">Go home</Link>
      </NextLink>
    </Layout>
  );
}

export async function getServerSideProps() {
  const items: User[] = sampleUserData;
  return { props: { items } };
}
