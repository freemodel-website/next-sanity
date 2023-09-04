import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Steps from "../../components/steps";
import Footer from "../../components/footer";

export default function HowItWorks() {
  let data = {
    title: "Let us take care of everything.",
    mainImage: {
      asset: {
        url: "/images/hero.jpg",
      },
    },
  };

  return (
    <div>
      <Head>
        <title>Freemodel</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" /> */}
      </Head>

      <Navbar />

      <main>
        <Hero hero={data} buttontext={"Let's Talk"} />
        <Bluebar theme={"titletext"} />
        <Steps />
      </main>

      <Footer />
    </div>
  );
}