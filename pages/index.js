import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 class="border-2 border-red-500">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
