import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { User } from "../types/user";

interface Props {
  item: User;
}

export default function UserCard({ item }: Props) {
  return (
    <Card square>
      <CardHeader
        title={
          <Typography variant="h5" component="h2">
            Detail for {item.name}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body1">ID: {item.id}</Typography>
        <Typography variant="body1">Name: {item.name}</Typography>
      </CardContent>
    </Card>
  );
}
