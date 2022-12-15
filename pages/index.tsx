import type { NextPage } from "next";
import HeroBackground from "../components/HeroBackground";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Form from "../components/Form/Form";
import Features from "../components/Features";
import ExtraFeatures from "../components/ExtraFeatures";
import Testimonial from "../components/Testimonial";
import Head from "../components/ui/Head";
import Navbar from "../components/Navbar";

const meta = {
  title:
    "Blockhead Digital - Digital Marketing for Businesses | Boost Your Online Presence and Attract More Leads",
  description:
    "Maximize your online presence and increase leads with our specialized digital marketing services for construction companies. From SEO to social media, we have the tools and expertise to drive results for your business.",
  url: "https://www.blockhead.digital",
  twitter: "https://twitter.com/bh_digital_",
  imageUrl: "https://www.blockhead.digital/images/twitter.png",
  imageAlt: "Blockhead Digital",
};

const Home: NextPage = () => {
  return (
    <>
      <Head heading={meta} />

      <div className="font-bebas">
        <div className="relative">
          <Navbar />
          <HeroBackground />

          <Hero />
        </div>
        <Features />
        <CTA />
        <Testimonial />
        <ExtraFeatures />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default Home;
