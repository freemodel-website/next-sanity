import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Footer from "../../components/footer";
import FeaturedProjects from "../../components/design-services/featuredprojects";
import ImageCaroucel from "../../components/design-services/imagecaroucel";

export default function DesignServices() {
  const images = [
    {
      href: "/testhouse.jpg",
      alt: "Lake Top Majesty",
    },
    {
      href: "/testhouse.jpg",
      alt: "Lake Top Majesty",
    },
    {
      href: "/testhouse.jpg",
      alt: "Lake Top Majesty",
    },
    {
      href: "/testhouse.jpg",
      alt: "Lake Top Majesty",
    },
  ];
  return (
    <div>
      <Head>
        <title>Freemodel</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" /> */}
      </Head>

      <Navbar />

      <main>
        <Hero hero={{ title: "A little about us." }} buttontext="Let's Talk" />

        <Bluebar body="Making the world more beautiful, one space at a time." />

        {/* Text Block */}
        <div className="text-lg flex items-center justify-center p-40">
          <p className="max-w-6xl text-center">
            The designers who work with Freemodel are a true source of talent.
            They assist project directors in creating spaces that are beautiful,
            functional and safe by selecting finish materials, colors, preparing
            construction documentation, build schematics, dynamic
            visualizations, and required permit plans for each project. Our
            designers are essential in completing a holistic design concept for
            every home. While our local project directors are talented designers
            and project managers in their own right, they often call on our
            in-house team of dedicated interior designers to strengthen the
            forethought and attention to detail that each home deserves. With
            many years of combined experience, the design professionals who work
            on Freemodel projects are instrumental to the success of each home
            sale. Our designers often lend a helping hand to project directors
            and work with each client to meet their design preferences,
            functional needs, and bring their unique vision to life. Here at
            Freemodel, we look for in-house designers who are active in the
            design community, experienced nimble professionals, and are focused
            on collaboration!
          </p>
        </div>

        {/* Featured Project */}
        <FeaturedProjects />

        <ImageCaroucel images={images} />
      </main>

      <Footer />
    </div>
  );
}
