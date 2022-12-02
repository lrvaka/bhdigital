import type { NextPage } from "next";
import HeroBackground from "../components/HeroBackground";
import WorkCarousel from "../components/WorkCarousel";
import Services from "../components/Services";
import Loading from "../components/Loading";

const Home: NextPage = () => {
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
            <nav className="list-none flex gap-10 text-2xl self-center justify-center items-center">
              {/* <li>Portfolio</li>
            <li>About Us</li> */}
              <li className="bg-[#FF5050] p-3">Get in touch </li>
            </nav>
          </header>
          <HeroBackground />
          <div className="relative  max-w-screen-xl mx-auto px-4  h-[99vh] text-center flex flex-col ">
            <div className="flex flex-col justify-center gap-2 z-10 flex-1">
              {/* <div className="absolute bottom-0 left-0  translate-x-[50%] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 134.4 385.36"
                  className=" w-6 lg:w-8 translate-x-full fill-white  animate-bounce "
                >
                  <path d="M11.2 142.32v100.72c0 30.96 25.07 56.04 56 56.04s56-25.09 56-56.04V142.32c0-30.96-25.07-56.04-56-56.04s-56 25.09-56 56.04Zm-11.2 0c0-37.14 30.08-67.24 67.2-67.24s67.2 30.09 67.2 67.24v100.72c0 37.14-30.08 67.24-67.2 67.24S0 280.19 0 243.04V142.32Z" />
                  <path d="M61.6 114.28v22.4c0 3.09 2.51 5.6 5.6 5.6s5.6-2.51 5.6-5.6v-22.4c0-3.09-2.51-5.6-5.6-5.6s-5.6 2.51-5.6 5.6ZM67.2 371.84l30.8-30.8c2.18-2.19 5.73-2.19 7.92 0 2.19 2.18 2.19 5.73 0 7.92l-34.76 34.76a5.597 5.597 0 0 1-7.92 0L28.22 348.7a5.595 5.595 0 0 1 0-7.92 5.613 5.613 0 0 1 7.92 0l31.07 31.07ZM71.16 1.64l34.76 34.76a5.595 5.595 0 0 1 0 7.92 5.595 5.595 0 0 1-7.92 0l-30.8-30.8-31.07 31.07a5.613 5.613 0 0 1-7.92 0 5.595 5.595 0 0 1 0-7.92L63.24 1.64a5.597 5.597 0 0 1 7.92 0Z" />
                </svg>
              </div> */}
              <h1 className=" text-2xl sm:text-4xl md:text-5xl lg:text-text-6xl xl:text-8xl  font-black ">
                We Generate{" "}
                <span className="relative before:absolute before:-z-10 z-10 before:bg-lime-600 before:h-1/2 before:w-full before:bottom-3 before:-rotate-2">
                  Qualified Sales
                </span>{" "}
                Appointments For Home Improvements Businesses…
              </h1>
              <p className=" text-md md:text-xl lg:text-3xl text-slate-300">
                Stop buying low quality traffic from agencies that sell you
                arbitrary marketing strategies that don&apos;t elevate your
                bottom line. We build pipelines that generate qualified sales
                appointments, every single day...
              </p>
              <div className="flex flex-col gap-2 items-center md:gap-4 mt-10 sm:mt-20 xl:mt-40">
                <p className=" italic text-lg  sm:text-2xl md:text-4xl font-bold">
                  {" "}
                  We are onboarding{" "}
                  <span className="relative before:absolute before:-z-10 z-10 before:bg-lime-600 before:h-1/5 before:w-full before:bottom-0 before:-rotate-2">
                    new partners
                  </span>{" "}
                  <br />
                  Reserve your spot today!
                </p>
                <button className="bg-[#FF5050] p-3 w-fit text-lg lg:text-2xl">
                  Get Started{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-screen-2xl mx-auto px-4 py-40 2xl:max-w-[1920px]">
          <h2 className="text-2xl md:text-5xl max-w-xl font-black">
            We Build Partnerships
          </h2>
          <p className="text-lg md:text-2xl mt-2 md:mt-4 text-slate-300 max-w-prose">
            Blockhead Digital doesn&apos;t treat their clients like numbers on a
            screen. We build relationships & personalized plans to ensure that
            your online presence is growing & you are generating sales!
          </p>
        </div> */}

        {/* <div className="flex max-w-screen-2xl mx-auto justify-end px-4">
          <h2 className="text-xl md:text-4xl max-w-xl text-stone-300">
          We specialize in web design and development. Creating websites that
          are fast, beautiful and high-converting.
        </h2>
          <h2 className="text-xl md:text-4xl max-w-xl text-stone-300">
            We don&apos;t want clients. We build partnerships.
          </h2>
        </div>

        <div className="py-40">
          <span className="text-2xl flex self-end mb-12 px-4 max-w-screen-2xl mx-auto">
            <svg
              className="self-center mr-4"
              width="100"
              height="2"
              viewBox="0 0 100 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1.25"
                x2="100"
                y2="1.25"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
            Lately at Blockhead Digital.
          </span>
          <WorkCarousel />
        </div> */}

        {/* <div className="flex max-w-screen-2xl mx-auto justify-start px-4 ">
          <h2 className="text-xl md:text-4xl max-w-3xl text-stone-300">
            <span className="text-2xl flex self-end mb-12 text-white">
              <svg
                className="self-center mr-4"
                width="100"
                height="2"
                viewBox="0 0 100 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="1.25"
                  x2="100"
                  y2="1.25"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              What we offer.
            </span>
            We offer more than just websites,
            <br /> we elevate businesses digital presence.
          </h2>
        </div>

        <div className="py-40">
          <Services />
        </div>

        <div className="py-40 max-w-screen-2xl mx-auto justify-start px-4">
          <h2 className="text-8xl font-black">
            Ready To Elevate <br /> Your Business?
          </h2>
          <p className="text-2xl text-stone-300">
            Answers are just an email away. Drop us a line and the right person
            will get back to you as soon as possible.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Home;
