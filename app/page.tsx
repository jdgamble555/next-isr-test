import Link from "next/link";
import { RefreshButton } from "./refresh-button";

export default async function Home() {

  const n = Math.random();

  return (
    <>
      <h1>Welcome to NextJS</h1>
      <p>Random Number: {n}</p>
      <div className="flex">
        <Link href={'/revalidate'}>Revalidate</Link>
        <RefreshButton />
      </div>
    </>
  );
}

