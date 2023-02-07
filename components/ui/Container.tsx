import Head from "next/head";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "../Footer";

const Container = ({ customMeta, children }: any) => {
  const router = useRouter();

  const meta = {
    title:
      "Blockhead Digital – 1 to 1 Digital Growth Partners",
    description: `Say goodbye to generic strategies and hello to tailored solutions built just for you. Choose a 1 to 1 digital growth partner and unleash your digital potential.`,
    imageUrl: "https://www.blockhead.digital/images/twitter.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.blockhead.digital${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.blockhead.digital${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Blockhead Digital" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bh_digital_" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main className=" min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Container;
