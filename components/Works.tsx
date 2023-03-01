import WorksCube from "./WorksCube";
import ewfScreenshot from "../public/works/ewf-screenshot.png";
import fiScreenshot from "../public/works/fi-screenshot.png";
import catScreenshot from "../public/works/cat-screenshot.png";
import ewfLogo from "../public/logos/ewfLogo.png";
import fiLogo from "../public/logos/fiLogo.png";
import catLogo from "../public/logos/catLogo.svg";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../utils/gsap";

const worksList = [
  {
    name: "Exquisite Wood Floors",
    tags: {
      tech: ["NextJS", "Vercel", "Design"],
      marketing: ["Paid Ads", "Social Media Management", "Branding"],
    },
    desc: "We gave the wood flooring company a polished and professional digital makeover, nailing the perfect balance of style and functionality in the website, crafting engaging social media content and using targeted paid ads to reach the right audience.",
    matCap: "./matcaps/ewfMat.png",
    decal: "./logos/ewfLogo.png",
    screenshot: ewfScreenshot,
    url: "https://www.exquisitewoodfloors.com/",
    logo: ewfLogo,
    bgColor:
      "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-teal-800 via-amber-200 to-green-900",
  },
  {
    name: "Finnish Interiors",
    tags: {
      tech: ["NextJS", "Vercel", "Design"],
      marketing: ["Social Media Management", "Branding"],
    },
    desc: "With a beautifully crafted website, expertly managed social media channels and a fresh new brand, Blockhead Digital helped this interior contracting company soar to new heights, leaving a lasting impression on their clients and competitors alike.",
    matCap: "./matcaps/fiMat.png",
    decal: "./logos/fiLogo.png",
    screenshot: fiScreenshot,
    url: "https://finnish-interiors.vercel.app/",
    comingSoon: true,
    logo: fiLogo,
    bgColor:
      "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-yellow-400 to-yellow-200",
  },
  {
    name: "CatMobStaz",
    tags: {
      tech: ["NextJS", "Vercel", "Design"],
      marketing: ["Social Media Management", "Branding"],
    },
    desc: "Our team successfully enhanced CatMobStaz's digital presence through web design/development, social media management, and branding, resulting in a sleek website and strong social media presence that showcases their purrfect NFTs.",
    matCap: "./matcaps/mobMat.png",
    decal: "./logos/catLogo.svg",
    screenshot: catScreenshot,
    url: "https://www.catmobstaz.com/",
    logo: catLogo,
    bgColor:
      "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-rose-800 via-pink-300 to-rose-800",
  },
];

const Works = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      worksList.forEach((e, i) => {
        gsap.to("#screenshot" + i, {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: "#item" + i,
            start: "top bottom", // the default values
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to("#logo" + i, {
          scale: 2,
          ease: "none",
          scrollTrigger: {
            trigger: "#item" + i,
            start: "top bottom", // the default values
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to("#cube" + i, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#item" + i,
            start: "top center", // the default values
            end: "center center",
            scrub: true,
          },
        });

        // clip-path: polygon(0 0, 200% 0, 0 200%),

        gsap.fromTo(
          "#image-cover" + i,
          {
            clipPath: "polygon(0 0, 200% 0, 0 200%)",
            ease: "power4.easeInOut",
            scrollTrigger: {
              trigger: "#item" + i,
            },
          },
          {
            clipPath: "polygon(0 0, 0% 0, 0 0%)",
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia(containerRef);

    mm.add("(min-width: 1024px)", (context) => {
      const cards = gsap.utils.toArray(["#item0", "#item1", "#item2"]);
      const cardHeight = gsap.getProperty("#item0", "height");
      console.log(cards);
      const spacer = 20;
      const minScale = 0.8;

      const distributor = gsap.utils.distribute({
        base: minScale,
        amount: 0.2,
      });

      cards.forEach((card: any, index: number) => {
        const scaleVal = distributor(index, cards[index], cards);

        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: `top top`,
            scrub: true,

            invalidateOnRefresh: true,
          },
          ease: "none",
          scale: scaleVal,
        });

        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * spacer} top`,
          endTrigger: containerRef.current,
          end: `bottom top+=${+cardHeight + cards.length * spacer}`,
          pin: true,
          pinSpacing: false,

          id: "pin",
          invalidateOnRefresh: true,
        });
      });
    });
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="my-16 lg:my-24">
      <h2 className="sr-only">Works - What we&apos;ve worked on</h2>
      <div
        ref={containerRef}
        className="grid grid-row-3 max-w-6xl mx-auto gap-5 px-2 lg:px-0"
      >
        {worksList.map((e, i) => {
          return (
            <div
              id={"item" + i}
              key={i + e.name}
              className={
                i % 2 === 0
                  ? "glass-morph rounded-md border border-gray-700 text-white  relative flex flex-col lg:flex-row p-6 lg:p-10 flex-grow"
                  : "glass-morph rounded-md border border-gray-700 text-white  relative flex flex-col p-6 lg:p-10 lg:flex-row-reverse flex-grow"
              }
            >
              <div id="works-img" className="h-[400px] lg:h-full lg:w-2/3 mb-5">
                <div
                  id={"img-container" + i}
                  className={
                    e.bgColor +
                    " border border-gray-700 h-full rounded-lg overflow-hidden relative"
                  }
                >
                  <div
                    id={"image-cover" + i}
                    className="h-full w-full bg-gray-800 relative z-10"
                  ></div>

                  <Image
                    id={"logo" + i}
                    src={e.logo}
                    alt={e.logo + i}
                    className="absolute w-44 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-100"
                  />
                </div>
              </div>
              <div className="w-full px-2 lg:px-10 flex flex-col lg:h-full">
                <ul className="flex gap-2 mb-8 lg:mb-16 flex-wrap">
                  {e.tags.tech.map((e, i) => (
                    <li
                      key={e + i}
                      className="text-gray-100 text-center rounded-sm bg-rose-600 px-3 max-w-max text-md font-bold"
                    >
                      {e}
                    </li>
                  ))}
                  {e.tags.marketing.map((e, i) => (
                    <li
                      key={e + i}
                      className="text-gray-100 text-center rounded-sm border border-gray-700 px-3 max-w-max text-md font-bold"
                    >
                      {e}
                    </li>
                  ))}
                </ul>
                <div className=" lg:flex-grow mb-10">
                  <h3 className="text-3xl lg:text-6xl font-bold mb-7 after:block after:w-full after:border-b after:h-5 after:border-b-rose-900 uppercase">
                    {e.name}
                  </h3>
                  <p className="paragraph">{e.desc}</p>
                </div>

                <a
                  className="text-center rounded-md transition-all inline-block bg-rose-500 p-2 text-lg font-semibold leading-7 text-white shadow-sm ring-1 ring-rose-500 hover:bg-rose-700 hover:ring-rose-700 lg:text-xl"
                  target="_blank"
                  rel="noreferrer"
                  href={e.url}
                >
                  Visit Website
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
