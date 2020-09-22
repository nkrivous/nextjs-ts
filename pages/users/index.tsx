import { GetServerSideProps } from "next";
import Link from "next/link";
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
    </Layout>
  );
}

export async function getServerSideProps() {
  const items: User[] = sampleUserData;
  return { props: { items } };
}
