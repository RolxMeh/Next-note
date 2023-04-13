import Head from "next/head";
import Homepage from "../pages/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Note App</title>
        <meta name="description" content="React Note-app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-[1440px]">
        <Homepage />
      </main>
    </>
  );
}
