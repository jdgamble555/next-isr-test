
export default function Home() {

  let invalidated = false;

  const data = { n: 123}

  return (
    <>
      <h1>Welcome to NextJS</h1>
      <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

      <p>Random Number: {data.n}</p>

      <button type="submit" onClick={() => fetch('/api/revalidate').then(() => (invalidated = true))}>
        Invalidate
      </button>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </>

  )
}
