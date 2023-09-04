import React from "react";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Hero from "../../../components/hero";
import { client, urlFor } from "../../../client";
import TeamList from "../../../components/team/teamlist";
import { MdLocationCity } from "react-icons/md";
import Footer from "../../../components/footer";

export default function Team({ team, statesList }) {
  console.log("team", team);

  // First, sort the statesList alphabetically based on the statename
  const sortedStatesList = statesList
    .slice()
    .sort((a, b) => a.statename.localeCompare(b.statename));

  return (
    <div>
      <Head>
        <title>Freemodel</title>
        <meta
          name="description"
          content="Freemodel specializes in home renovations, helping agents increase the home sales price for sellers. In-person project directors are assigned to each project and work with agents directly. No upfront payments, Freemodel is paid when the home sells."
        />
        <meta name="keywords" content="Freemodel" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Freemodel" />
        <meta
          property="og:description"
          content="Freemodel specializes in home renovations, helping agents increase the home sales price for sellers. In-person project directors are assigned to each project and work with agents directly. No upfront payments, Freemodel is paid when the home sells."
        />
        <meta property="og:url" content="https://freemodel.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://freemodel.com/ogimage.jpg" />
        <meta property="og:image:alt" content="Freemodel" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@freemodel" />
        <meta name="twitter:creator" content="@freemodel" />
        <meta name="twitter:title" content="Freemodel" />
        <meta
          name="twitter:description"
          content="Freemodel specializes in home renovations, helping agents increase the home sales price for sellers. In-person project directors are assigned to each project and work with agents directly. No upfront payments, Freemodel is paid when the home sells."
        />
        <meta
          name="twitter:image"
          content="https://freemodel.com/ogimage.jpg"
        />
        <meta name="twitter:image:alt" content="Freemodel" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta itemProp="name" content="Freemodel" />
        <meta
          itemProp="description"
          content="Freemodel specializes in home renovations, helping agents increase the home sales price for sellers. In-person project directors are assigned to each project and work with agents directly. No upfront payments, Freemodel is paid when the home sells."
        />
        <meta itemProp="image" content="https://freemodel.com/ogimage.jpg" />
        <meta property="og:site_name" content="Freemodel" />
        <meta name="pinterest" content="nopin" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Freemodel" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="Freemodel" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" />

        <link rel="icon" href="/ENicon.svg" />
      </Head>

      <Navbar />

      <main>
        <Hero hero={{ title: "Meet the team." }} />
        {/* Sort project directors by state */}
        {sortedStatesList.map((state, idx) => {
          // get all project directors in this state
          const filteredTeam = team.filter(
            (item) => item.state[0].location.state.statename === state.statename
          );

          // Exclude Partnerships and In-House Design Team
          const filteredAndExcludedTeam = filteredTeam.filter(
            (item) =>
              item.location?.name != "Partnerships" &&
              item.location?.name != "In-House Design Team"
          );

          // check if there are any project directors in this state
          if (filteredAndExcludedTeam.length > 0) {
            return (
              <div key={idx}>
                <TeamList
                  title={state.statename}
                  team={filteredAndExcludedTeam}
                />
              </div>
            );
          }

          return null;
        })}

        {/* Sort by Partnerships */}
        {team
          .filter(
            (item) => item.state[0].location.state.statename === "Partnerships"
          )
          .map((item, idx) => {
            return (
              <div key={idx}>
                <TeamList title={"Partnerships"} team={[item]} />
              </div>
            );
          })}

        {/* Sort by Partnerships */}
        {team
          .filter(
            (item) =>
              item.state[0].location.state.statename === "In-House Design Team"
          )
          .map((item, idx) => {
            return (
              <div key={idx}>
                <TeamList title={"In-House Design Team"} team={[item]} />
              </div>
            );
          })}
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const query = `*[_type == "projectdirector"] {
    _id,
    name,
    slug,
    image {
      hotspot,
      crop,
        asset->{
            _ref,
            _type,
            altText,
            description,
            "tags": opt.media.tags[]->name.current,
            title,
            url
        }
    },
    title,
    bio,
    bool,
    location->{
        name,
        slug
    },
    "state": *[_type == "projectdirector" && _id == ^. _id]{
        location->{
            _id,
            name,
            state->{
                _id,
                statename,
            }
        }
    },
}
`;

  //get states
  const states = `*[_type == "states"] {
    _id,
    statename,
    stateabbr,
    slug,
}`;

  const team = await client.fetch(query);
  const statesList = await client.fetch(states);

  return {
    props: {
      team,
      statesList,
    },

    revalidate: 10,
  };
};
