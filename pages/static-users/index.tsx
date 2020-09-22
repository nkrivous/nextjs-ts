import Link from "next/link";
import React, { useEffect, useState } from "react";
import { sampleUserData } from "~/mocks/users/sample-data";
import Layout from "~/src/components/Layout";
import UserList from "~/src/modules/users/components/UserList";
import { User } from "~/src/modules/users/types/user";

interface Props {
  items: User[];
}

export default function StaticUsersPage({ items }: Props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("date", new Date());
  }, []);
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <UserList items={items} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
      <button
        onClick={() => {
          setCount((value) => value + 1);
        }}
      >
        Click me: {count}
      </button>
    </Layout>
  );
}

export async function getStaticProps() {
  const items: User[] = sampleUserData;
  return { props: { items } };
}
