import React, { PropsWithChildren } from "react";
import NextLink from "next/link";
import Head from "next/head";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  makeStyles,
  Toolbar,
} from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
  },
  link: {
    whiteSpace: "nowrap",
    "&~&": {
      marginLeft: "16px",
    },
  },
  apiButton: {
    marginLeft: "auto",
  },
});

interface Props {
  title: string;
}

export default function Layout({
  children,
  title = "This is the default title",
}: PropsWithChildren<Props>) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <AppBar position="static">
          <Toolbar component="nav">
            <NextLink href="/">
              <Link className={classes.link} color="inherit" href="/">
                Home
              </Link>
            </NextLink>

            <NextLink href="/about">
              <Link className={classes.link} color="inherit" href="/about">
                About
              </Link>
            </NextLink>

            <NextLink href="/users">
              <Link className={classes.link} color="inherit" href="/users">
                Users List
              </Link>
            </NextLink>

            <NextLink href="/static-users">
              <Link
                className={classes.link}
                color="inherit"
                href="/static-users"
              >
                Static Users List
              </Link>
            </NextLink>

            <NextLink href="/last-update">
              <Link
                className={classes.link}
                color="inherit"
                href="/last-update"
              >
                Last update
              </Link>
            </NextLink>

            <Link
              className={classes.apiButton}
              component={Button}
              href="/api/users"
            >
              Users API
            </Link>
          </Toolbar>
        </AppBar>
      </header>
      <Container className={classes.main} component="main" maxWidth="lg">
        <Card className={classes.card} square>
          <CardContent>{children}</CardContent>
        </Card>
      </Container>
      <footer>
        <span>I'm here to stay (Footer)</span>
      </footer>
    </>
  );
}
