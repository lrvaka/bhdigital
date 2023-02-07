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
import ContactSection from "../components/ContactSection";
import ExtraFeatures from "../components/ExtraFeatures";
import Testimonial from "../components/Testimonial";
import Container from "../components/ui/Container";
import Navbar from "../components/ui/Navbar";

import NewsletterModal from "../components/NewsletterModal";
import Loading from "../components/Loading";
import Works from "../components/Works";

type CallbackType = (animation: GSAPTimeline, index: number | string) => void;

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

      <Container>
        {/* <NewsletterModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        <div className="relative" ref={heroRef}>
      
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
        <ContactSection />
        {/* <Form /> */}
      </Container>
    </>
  );
}
