import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { client, urlFor } from "../../client";
import Hero from "../../components/hero";
import Paragraph from "../../components/paragraph";
import { useRouter } from "next/router";

export default function ThankYouAgent({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;
  return (
    <div>
      <Head>
        <title>{`Thank You | Freemodel`}</title>
        <meta name="description" content={footer.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Freemodel" />
        <meta property="og:description" content={footer.description} />
        <meta property="og:image" content={urlFor(footer.footerimage).url()} />
        <meta
          property="og:url"
          content={`https://freemodel.com${currentURL}`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        <Hero
          hero={{ title: data.title }}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
        />

        <div className="text-center !text-2xl">
          <Paragraph text={data.body} />
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.fetch(`*[_type == "supportpage"][0]{
            title,
            mainImage{
                hotspot,
                crop,
                asset->{
                    _id,
                    url
                }
            },
            titlebutton,
            body
        }`);

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

  return {
    props: {
      footer,
      data,
    },

    revalidate: 10,
  };
};
