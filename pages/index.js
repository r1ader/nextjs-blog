import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [num, setNum] = useState(0);
  useEffect(async () => {
    setNum((await axios.get("/api/person")).data.text);
  }, []);
  return (
    <div className="container">
      <Head>
        <title>r1ader</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <div>{num}</div>
      </main>
    </div>
  );
}
