import type { NextPage } from "next";
import HeroBackground from "../components/HeroBackground";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Form from "../components/Form/Form";
import Features from "../components/Features";
import ExtraFeatures from "../components/ExtraFeatures";
import Testimonial from "../components/Testimonial";

const LandingPage: NextPage = () => {
  return (
    <>
      <Loading />
      <div className="font-bebas">
        <div className="relative">
          <header className="absolute flex justify-between w-full px-5 py-5 z-10">
            <div className=" w-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 524.99 571.61"
                style={{ color: "white", fill: "white" }}
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "white",
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                  d="M3 149.23 262.29 1.73 522 152.23 263 301.77 3 149.23z"
                />
                <path d="M190.06 378.7c11.26 3.23 19.6-3.73 19.6-17.84 0-16.67-11.63-36.95-25.98-45.29L53.79 240.08v59.1l129.89 75.49c2.15 1.25 4.27 2.61 6.38 4.03ZM183.68 436.69 53.79 361.2v60.38l129.89 75.49c14.35 8.34 25.98 1.58 25.98-15.09s-11.63-36.95-25.98-45.29ZM314.8 271.61l155.4-89.72v120l-155.4 89.72v-120zM314.8 451.61l155.4-89.72v120l-155.4 89.72v-120z" />
              </svg>
            </div>
          </header>
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

export default LandingPage;
