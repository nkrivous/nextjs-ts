import React, { PropsWithChildren } from "react";
import Link from "next/link";
import Head from "next/head";

interface Props {
  title: string;
}

export default function Layout({
  children,
  title = "This is the default title",
}: PropsWithChildren<Props>) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          |
          <Link href="/about">
            <a>About</a>
          </Link>
          |
          <Link href="/users">
            <a>Users List</a>
          </Link>
          |
          <Link href="/static-users">
            <a>Static Users List</a>
          </Link>
          |
          <Link href="/last-update">
            <a>Last update</a>
          </Link>
          | <a href="/api/users">Users API</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
}
