import "@/styles/globals.css";
import { Noto_Serif, Pontano_Sans } from "next/font/google";

const noto_serif = Noto_Serif({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-noto-serif",
});

const pontano_sans = Pontano_Sans({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-pontano-sans",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${noto_serif.variable} ${pontano_sans.variable}`}>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "adonis-web", serif;
          font-weight: 700;
          font-style: normal;
        }
        p,
        a,
        li {
          font-family: ${pontano_sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </main>
  );
}
