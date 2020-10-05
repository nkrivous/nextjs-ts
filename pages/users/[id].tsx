import { GetServerSidePropsContext } from "next";
import React from "react";
import Layout from "src/components/Layout";
import UserCard from "~/src/modules/users/components/UserCard";
import { User } from "~/src/modules/users/types/user";
import { sampleUserData } from "~/mocks/users/sample-data";

interface Props {
  item?: User;
  errors?: string;
}

export default function UserIdPage({ item, errors }: Props) {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name : "User Detail"
      } | Next.js + TypeScript Example`}
    >
      {item && <UserCard item={item} />}
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const users: User[] = sampleUserData;

    const userId = parseInt(context.params?.id as string);

    const user = users.find((u) => u.id === userId);
    if (!user) {
      throw new Error("User not found");
    }
    return { props: { item: user } };
  } catch (e) {
    return { props: { errors: JSON.stringify(e) } };
  }
}
