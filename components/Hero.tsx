import Image from "next/image";
import vercelLogo from "../public/logos/vercel.svg";
import nextJSLogo from "../public/logos/nextjs.svg";
import sanityLogo from "../public/logos/sanity.png";
import jamstackLogo from "../public/logos/jamstack.png";
import Marquee from "react-fast-marquee";
import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "../utils/gsap";

type CallbackType = (animation: GSAPTimeline, index: number | string) => void;

export default function Hero({ addAnimation }: { addAnimation: CallbackType }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let animation = gsap.timeline();

    let ctx = gsap.context(() => {
      gsap.set("#items-container > *", {
        y: -10,
        opacity: 0,
      });

      animation = gsap
        .timeline()
        .to("#items-container > *", {
          duration: 0.75,
          y: 0,
          opacity: 1,
          ease: "back",
          stagger: 0.25,
        })
        .from(
          "#marquee",
          {
            duration: 1,
            opacity: 0,
            ease: "back",
          },
          "<"
        );
    }, ref);

    if (addAnimation) addAnimation(animation, "end");

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={ref} className="relative px-6 lg:px-8 isolate">
      <div className=" pt-40 lg:pt-60 pb-40">
        <div
          id="items-container"
          className="flex flex-col max-w-screen-xl mx-auto"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-9xl  font-bold tracking-tight  ">
            Next-Gen Solutions For Your Digital Needs{" "}
          </h1>
          <p className="paragraph">
            ⚡️ Experience unparalleled web speed and scalability with expert
            NextJS and Headless CMS web development
          </p>
          <div className="mt-8 flex flex-col lg:flex-row gap-3">
            <a
              href="#form"
              className="text-center rounded-md transition-all inline-block bg-rose-500 p-2 text-lg font-semibold leading-7 text-white shadow-sm ring-1 ring-rose-500 hover:bg-rose-700 hover:ring-rose-700 lg:text-xl  lg:px-16 lg:py-3"
            >
              Get in touch
            </a>
            <a className="text-center rounded-md transition-all inline-block bg-gray-50 p-2 text-lg font-semibold leading-7 text-black shadow-sm  hover:bg-gray-200 hover:ring-rose-700 lg:text-xl lg:px-16 lg:py-3">
              Book a meeting
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div id="marquee">
        <Marquee className="max-w-6xl mx-auto" gradientColor={[17, 24, 39]}>
          <div className="invert h-10 mx-5 lg:mx-10 ">
            <Image className="h-full w-full" src={vercelLogo} />
          </div>
          <div className=" h-10 mx-5 lg:mx-10 ">
            <Image height={40} src={sanityLogo} />
          </div>
          <div className="invert h-10 mx-5 lg:mx-10 ">
            <Image className="h-full w-full" src={nextJSLogo} />
          </div>
          <div className=" h-10 mx-5 lg:mx-10 ">
            <Image className="h-full w-full" src={jamstackLogo} />
          </div>
          <div className="invert h-10 mx-5 lg:mx-10 ">
            <Image className="h-full w-full" src={vercelLogo} />
          </div>
          <div className=" h-10 mx-5 lg:mx-10 ">
            <Image height={40} src={sanityLogo} />
          </div>
          <div className="invert h-10  mx-5 lg:mx-10 ">
            <Image className="h-full w-full" src={nextJSLogo} />
          </div>
          <div className=" h-10 mx-5 lg:mx-10 ">
            <Image className="h-full w-full" src={jamstackLogo} />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
