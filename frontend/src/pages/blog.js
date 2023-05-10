import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Freemodel</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" /> */}
      </Head>

      <Navbar />
    </div>
  );
}
