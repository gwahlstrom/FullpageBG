import Head from "next/head";

import { Inter } from "next/font/google";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import NavBar from "@/components/NavBar";
import Section4 from "@/components/Section4";
import ScrollBar from "@/components/ScrollBar";
import VideoBG from "@/components/VideoBG";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const arrSections = [1, 2, 3, 4];

  return (
    <>
      <Head>
        <title>FullpageBG</title>
        <meta name="description" content="Fullpage react and next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar className="navBar" />
      <ScrollBar className="scrollBar" />
      {/* <VideoBG /> */}
      <Section1></Section1>
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}
