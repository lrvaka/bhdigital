import type { NextPage } from "next";
import { useRef } from "react";
import HeroBackground from "../components/HeroBackground";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import { useState, useCallback } from "react";
import gsap from "gsap";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Form from "../components/Form/Form";
import Features from "../components/Features";
import ExtraFeatures from "../components/ExtraFeatures";
import Testimonial from "../components/Testimonial";
import Head from "../components/ui/Head";
import Navbar from "../components/Navbar";

import NewsletterModal from "../components/NewsletterModal";
import Loading from "../components/Loading";
import Works from "../components/Works";

type CallbackType = (animation: GSAPTimeline, index: number | string) => void;

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

export default function Home({ firstLoad }: { firstLoad: boolean }) {
  let [isOpen, setIsOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // define a timeline
  const [tl, setTl] = useState<GSAPTimeline>();
  // pass a callback to child elements, this will add animations to the timeline

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  const addAnimation = useCallback<CallbackType>(
    (animation: GSAPTimeline, index: number | string) => {
      tl && tl.add(animation, index);
    },
    [tl]
  );

  return (
    <>
      {!firstLoad ? (
        <Loading
          addAnimation={addAnimation}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : null}

      <Head heading={meta} />
      <NewsletterModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>
        <div className="relative" ref={heroRef}>
          <Navbar />
          <HeroBackground
            heroRef={heroRef}
            addAnimation={addAnimation}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          <Hero />
        </div>
        <Works />
        {/* <Features /> */}
        <CTA />
        <Testimonial />
        <ExtraFeatures />
        <Form />
      </main>
      <Footer />
    </>
  );
}
