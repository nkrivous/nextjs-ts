import Link from "next/link";
import Layout from "../src/components/Layout";

export default function IndexPage() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/users">
          <a>User list</a>
        </Link>
      </p>
    </Layout>
  );
}
