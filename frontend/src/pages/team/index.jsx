import React from "react";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Hero from "../../../components/hero";
import { client, urlFor } from "../../../client";
import TeamList from "../../../components/team/teamlist";
import { MdLocationCity } from "react-icons/md";
import Footer from "../../../components/footer";
import { useRouter } from "next/router";
import Bluebar from "../../../components/bluebar";

/**
 * 
 * @param {object} team - Project Directors
 * @param {object} teampage - Meet The Team Page
 * @param {object} statesList - List of states
 * @param {object} footer - Footer Data
 * @returns
 * 
 */

export default function Team({ team, teampage, statesList, footer }) {
  // First, sort the statesList alphabetically based on the statename
  const sortedStatesList = statesList
    .slice()
    .sort((a, b) => a.statename.localeCompare(b.statename));

  const partnershipsTeam = team.filter(
    (item) => item.state[0].location.state.statename === "Partnerships"
  );
  const sortedPartnershipsTeam = partnershipsTeam
    .slice()
    .sort((a, b) =>
      a.state[0].location.state.statename.localeCompare(
        b.state[0].location.state.statename
      )
    );

  const inHouseTeam = team.filter(
    (item) => item.state[0].location.state.statename === "In-House Design Team"
  );

  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  console.log("inHouseTeam", inHouseTeam);

  return (
    <div>
      <Head>
        <title>{"Meet The Team | Freemodel"}</title>
        <meta name="description" content={teampage?.seoDescription} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={teampage?.seoTitle} />
        <meta property="og:description" content={teampage?.seoDescription} />
        {teampage?.seoImage && (
          <meta property="og:image" content={urlFor(teampage.seoImage).url()} />
        )}
        <meta
          property="og:url"
          content={`https://freemodel.com${currentURL}`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        <Hero
          hero={{ title: teampage.title }}
          image={urlFor(teampage.mainImage).url()}
          buttontext={teampage.titlebutton}
        />
        <Bluebar 
          body={teampage.bluebarbody}
        />
        <div className="mb-6"></div>
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
              item.location?.name != "In-House Design Team" &&
              item.location?.name != "Author"
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
        {partnershipsTeam && (
          <div>
            <TeamList title={"Partnerships"} team={sortedPartnershipsTeam} />
          </div>
        )}
        {/* Sort by In-House */}
        {inHouseTeam.length < 0 && (
          <div className="mb-44">
            <TeamList title={"In-House Design Team"} team={inHouseTeam} />
          </div>
        )}
      </main>
      <Footer data={footer} />
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

  //get meettheteam
  const teamquery = `*[_type == "meettheteam"][0] {
    _id,
    title,
    mainImage {
      hotspot,
      crop,
      asset->{
        _id,
        url
      }
    },
    titlebutton,
    bluebarbody,
    seoTitle,
  seoDescription,
  seoImage,
  }`;

  //get states
  const states = `*[_type == "states"] {
    _id,
    statename,
    stateabbr,
    slug,
}`;

  const footer = await client.fetch(`*[_type == "footersettings"][0]{
  footerimage {
    hotspot,
    crop,
    asset->{
      _id,
      url
    }
  },
  linkedin,
  instagram,
  facebook,
  pinterest,
  leftItems,
  description,
  rightItems,
  navbar
}`);

  const team = await client.fetch(query);
  const statesList = await client.fetch(states);
  const teampage = await client.fetch(teamquery);

  return {
    props: {
      team,
      teampage,
      statesList,
      footer,
    },

    revalidate: 10,
  };
};
