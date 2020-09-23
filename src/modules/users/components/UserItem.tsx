import { Link, ListItemText } from "@material-ui/core";
import NextLink from "next/link";
import React from "react";
import { User } from "../types/user";

interface Props {
  data: User;
}

export default function UserItem({ data }: Props) {
  return (
    <ListItemText>
      <NextLink href="/users/[id]" as={`/users/${data.id}`}>
        <Link href={`/users/${data.id}`}>
          {data.id}: {data.name}
        </Link>
      </NextLink>
    </ListItemText>
  );
}
