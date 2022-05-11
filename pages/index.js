import Head from "next/head";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { useEvent } from "../util/hooks";

let origin = null;
export default function Home() {
  const [num, setNum] = useState(0);
  const add = useCallback(() => {
    setNum(num + 1);
  }, [num]);
  const con = useEvent(() => {
    console.log(num);
  }, [num]);
  useEffect(() => {
    origin = con;
    console.log(origin === con);
  }, []);
  console.log(origin === con);
  return (
    <div className="container">
      <Head>
        <title>r1ader</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main style={{
        transform: "translate(80vw,50vh) scale(2)"
      }}>
        <button onClick={add}>
          add {num}
        </button>

        <button onClick={con}>
          console {num}
        </button>
      </main>
    </div>
  );
}
