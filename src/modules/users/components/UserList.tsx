import { List, ListItem } from "@material-ui/core";
import React from "react";
import { User } from "../types/user";
import UserItem from "./UserItem";

interface Props {
  items: User[];
}

export default function UserList({ items }: Props) {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <UserItem data={item} />
        </ListItem>
      ))}
    </List>
  );
}
