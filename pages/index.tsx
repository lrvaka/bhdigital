import { useRef } from "react";
import HeroBackground from "../components/HeroBackground";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
import { useState, useCallback } from "react";
import gsap from "gsap";
import MainFeatures from "../components/MainFeatures";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Features from "../components/Features";
import ContactSection from "../components/ContactSection";
import ExtraFeatures from "../components/ExtraFeatures";
import Testimonial from "../components/Testimonial";
import Container from "../components/ui/Container";
import Navbar from "../components/ui/Navbar";
import WhatsIncluded from "../components/WhatsIncluded";

import NewsletterModal from "../components/NewsletterModal";
import Loading from "../components/Loading";
import Works from "../components/Works";
import AboutUs from "../components/AboutUs";

type CallbackType = (animation: GSAPTimeline, index: number | string) => void;

export default function Home({ firstLoad }: { firstLoad: boolean }) {
  let [isOpen, setIsOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // define a timeline
  const [tl, setTl] = useState<GSAPTimeline>(gsap.timeline());

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

      <Navbar addAnimation={addAnimation} />

      <Container>
        {/* <NewsletterModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        <div className="relative" ref={heroRef}>
          <HeroBackground
            heroRef={heroRef}
            addAnimation={addAnimation}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          <Hero addAnimation={addAnimation} />
        </div>
        <MainFeatures />

        <Works />

        {/* <AboutUs />
        <Features /> */}
        {/* <CTA /> */}
        <Testimonial />
        {/* <ExtraFeatures /> */}
        <ContactSection />
        {/* <Form /> */}
      </Container>
    </>
  );
}
