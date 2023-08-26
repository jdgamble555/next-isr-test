import { Validate } from "./validate";

export default function Home() {

  const n = Math.random();

  return (
    <>
      <h1>Welcome to NextJS</h1>

      <p>Random Number: {n}</p>
      <Validate />
    </>
  )
}

