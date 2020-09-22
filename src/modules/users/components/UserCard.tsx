import React from "react";
import { User } from "../types/user";

interface Props {
  item: User;
}

export default function UserCard({ item }: Props) {
  return (
    <div>
      <h1>Detail for {item.name}</h1>
      <p>ID: {item.id}</p>
      <p>Name: {item.name}</p>
    </div>
  );
}
