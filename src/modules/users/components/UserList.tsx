import React from "react";
import { User } from "../types/user";
import UserItem from "./UserItem";

interface Props {
  items: User[];
}

export default function UserList({ items }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <UserItem data={item} />
        </li>
      ))}
    </ul>
  );
}
