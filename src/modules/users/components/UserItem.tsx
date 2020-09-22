import Link from "next/link";
import React from "react";
import { User } from "../types/user";

interface Props {
  data: User;
}

export default function UserItem({ data }: Props) {
  return (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      <a>
        {data.id}: {data.name}
      </a>
    </Link>
  );
}
