import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsap";
import Image from "next/image";
import safeImg from "../public/safe.png";
import rocketImg from "../public/rocket.png";

const AboutUs = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let context = gsap.context(() => {
      gsap.set("#item-container", { y: -20, opacity: 0 });
      gsap.set("#item-header", { y: -20, opacity: 0 });

      gsap.to("#sparkle-paths > *", {
        scale: 0.85,
        y: 20,
        ease: "power4.easeInOut",
        stagger: 0.1,
        repeat: Infinity,
        yoyo: true,
      });

      gsap.fromTo(
        "#item-container",
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.5,
          duration: 0.5,
          scrollTrigger: "#item-container",
        }
      );

      gsap.fromTo(
        "#item-header",
        { y: -20, opacity: 0 },
        {
          y: 0,
          delay: 0.25,
          opacity: 1,
          stagger: 0.5,
          duration: 0.5,
          scrollTrigger: "#item-container",
        }
      );

      gsap.fromTo(
        "#circle",
        { drawSVG: "0% 0%" },
        {
          drawSVG: "0% 100%",
          duration: 4,
          ease: "power4.in",
          stagger: 0.5,
          scrollTrigger: "#item-container",
        }
      );

      gsap.fromTo(
        "#rocket",
        { y: 50 },
        {
          y: -50,
          scrollTrigger: { trigger: "#item-container", scrub: 1 },
        }
      );
    }, ref);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative my-16 px-4 lg:px-8 lg:my-24 max-w-screen-xl mx-auto"
    >
      <div className="gap-20 flex flex-col lg:grid  lg:grid-cols-2">
        <div>
          <h2 className="text-5xl font-bold">
            Our Next-Gen Technologies & Expertise
          </h2>
          <p className="paragraph">
            At Blockhead Digital, we specialize in building next-gen websites
            using cutting-edge technologies such as NextJS, Headless CMS, and
            the JAMstack architecture as a whole.
          </p>
          <p className="paragraph">
            Our approach to web design and development is grounded in our
            expertise in these technologies, allowing us to create ultra-fast
            and scalable website solutions that are tailored to your business
            needs. We pride ourselves on creating websites that are built to
            last and stay up to date with the latest industry standards. With
            our expertise, you can take your digital presence to the next level,
            achieve your business goals with confidence and out-compete your
            competition.
          </p>
        </div>
        <div>
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 335.66 430.59"
            className="absolute w-20 right-0 z-10"
            fill="yellow"
          >
            <g id="sparkle-paths">
              <path d="m172.31,187.21c-37.35,15.79-54.88,46.43-64.68,82.1-5.43,19.66-7.73,40.21-11.43,60.37-.11.56-.28,1.06-.22,1.01-1.79-13.05-3.08-26.71-5.54-40.21-5.43-29.29-15.29-56.73-35.34-79.57-9.18-10.47-20.27-18.26-34.38-23.46,3.3-1.57,5.82-2.74,8.34-3.98,23.74-11.7,37.85-31.92,48.27-55.16,10.59-23.74,15.46-48.89,17.7-74.65.22-2.24.5-4.48.79-6.72h1.79c.34,2.52.79,5.04,1.01,7.62,2.46,27.61,7.79,54.54,20.05,79.69,11.54,23.52,27.33,43.01,53.76,52.98h-.12Z" />
              <path d="m265.94,167.33c2.07,18.87,8.23,35.73,21.22,49.78,12.82,13.83,28.95,21.89,48.5,27.33-39.82,11.43-64.73,34.72-70,76.21-5.15-41.27-29.79-64.9-69.78-76.21,40.27-11.48,65.24-35.28,70-77.17l.06.06Z" />
              <path d="m191.07,56.78c31.25-18.7,40.82-30.91,44.91-56.78,4.2,27.21,19.49,45.64,45.41,56.62-12.54,5.43-22.96,12.43-31.08,22.46-8.18,10.02-12.27,21.79-14.5,34.5-3.75-27.5-19.32-45.69-44.69-56.79h-.05Z" />
              <path d="m136.64,349.56c4.2,19.1,12.71,35.95,36.9,40.6-11.59,1.68-20.61,5.99-25.93,14.79-5.1,8.34-8.57,17.7-12.32,25.65-4.09-18.76-12.04-36.12-36.46-40.54,10.98-2.02,19.88-6.38,25.2-14.95,5.1-8.18,8.62-17.3,12.66-25.59l-.05.05Z" />
              <path d="m20.66,49.06c2.91,10.92,7.67,19.77,20.66,22.96-13.27,3.08-17.81,12.15-20.66,24.08-3.19-11.43-7.22-21.05-20.66-23.97,12.77-3.41,17.69-12.38,20.66-23.07h0Z" />
            </g>
          </svg>
          <div
            id="rocket"
            className="absolute w-32 bottom-0 -translate-y-1/2 -translate-x-1/2"
          >
            <Image src={rocketImg} alt="rocket" />
          </div>
          <div>
            <div className="glass-morph-1 border w-full rounded-lg px-2 flex flex-col">
              <div className="w-full h-7 border-b-[1px] border-b-gray-700 ">
                <div className="flex gap-1 h-full items-center py-2">
                  <div className="rounded-full w-3 h-3 bg-gray-600"></div>
                  <div className="rounded-full w-3 h-3 bg-gray-600"></div>
                  <div className="rounded-full w-3 h-3 bg-gray-600"></div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-2 py-10 flex-1">
                  <div className="rounded-md flex flex-col gap-2 justify-center  p-2">
                    <div className="rounded-full bg-white w-full h-1"></div>
                    <div className="rounded-full bg-white w-3/4 h-1"></div>
                    <div className="rounded-full bg-white w-1/2 h-1"></div>
                    <div className="flex gap-2 lg:gap-5">
                      <div className="rounded-full bg-gray-600 w-1/4 h-4"></div>
                      <div className="rounded-full bg-gray-600 w-1/4 h-4"></div>
                    </div>
                  </div>
                  <div className="glass-morph-1 relative rounded-md flex flex-col justify-center items-center gap-2 p-2 h-40">
                    <Image
                      src={safeImg}
                      fill
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-morph-1 border w-full rounded-lg px-2 flex flex-col">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 py-2 flex-1">
                <div className="glass-morph-1 rounded-md flex flex-col justify-center items-center gap-2  p-2">
                  <div id="item-container" className="w-1/2 h-auto relative">
                    <p className="absolute text-3xl text-[#6DE972] top-0 bottom-0 left-0 right-0 m-auto w-max h-max">
                      100
                    </p>
                    <svg
                      viewBox="0 0 180 180"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      pathLength="1"
                      stroke-dashoffset="0px"
                      stroke-dasharray="1px 1px"
                    >
                      <path
                        d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z"
                        fill="#6DE972"
                        fill-opacity="0.2"
                        opacity="1"
                      ></path>
                      <path
                        id="circle"
                        d="M175 90C175 136.944 136.944 175 90 175C43.0558 175 5 136.944 5 90C5 43.0558 43.0558 5 90 5C136.944 5 175 43.0558 175 90Z"
                        stroke="#6DE972"
                        stroke-width="10"
                        pathLength="1"
                        stroke-dashoffset="0px"
                        stroke-dasharray="1px 1px"
                      ></path>
                    </svg>
                  </div>
                  <h3 id="item-header" className="text-md">
                    Performance
                  </h3>
                </div>
                <div className="glass-morph-1 rounded-md flex flex-col justify-center items-center gap-2 p-2">
                  <div id="item-container" className="w-1/2 h-auto relative">
                    <p className="absolute text-3xl text-[#6DE972] top-0 bottom-0 left-0 right-0 m-auto w-max h-max">
                      100
                    </p>
                    <svg
                      viewBox="0 0 180 180"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      pathLength="1"
                      stroke-dashoffset="0px"
                      stroke-dasharray="1px 1px"
                    >
                      <path
                        d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z"
                        fill="#6DE972"
                        fill-opacity="0.2"
                        opacity="1"
                      ></path>
                      <path
                        id="circle"
                        d="M175 90C175 136.944 136.944 175 90 175C43.0558 175 5 136.944 5 90C5 43.0558 43.0558 5 90 5C136.944 5 175 43.0558 175 90Z"
                        stroke="#6DE972"
                        stroke-width="10"
                        pathLength="1"
                        stroke-dashoffset="0px"
                        stroke-dasharray="1px 1px"
                      ></path>
                    </svg>
                  </div>
                  <h3 id="item-header" className="text-md">
                    Accessibility
                  </h3>
                </div>
                <div className="glass-morph-1 rounded-md flex flex-col justify-center items-center gap-2 p-2">
                  <div id="item-container" className="w-1/2 h-auto relative">
                    <p className="absolute text-3xl text-[#6DE972] top-0 bottom-0 left-0 right-0 m-auto w-max h-max">
                      100
                    </p>
                    <svg
                      viewBox="0 0 180 180"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      pathLength="1"
                      stroke-dashoffset="0px"
                      stroke-dasharray="1px 1px"
                    >
                      <path
                        d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z"
                        fill="#6DE972"
                        fill-opacity="0.2"
                        opacity="1"
                      ></path>
                      <path
                        id="circle"
                        d="M175 90C175 136.944 136.944 175 90 175C43.0558 175 5 136.944 5 90C5 43.0558 43.0558 5 90 5C136.944 5 175 43.0558 175 90Z"
                        stroke="#6DE972"
                        stroke-width="10"
                        pathLength="1"
                        stroke-dashoffset="0px"
                        stroke-dasharray="1px 1px"
                      ></path>
                    </svg>
                  </div>
                  <h3 id="item-header" className="text-md">
                    Best Practices
                  </h3>
                </div>
                <div className="glass-morph-1 rounded-md flex flex-col justify-center items-center gap-2 p-2">
                  <div id="item-container" className="w-1/2 h-auto relative">
                    <p className="absolute text-3xl text-[#6DE972] top-0 bottom-0 left-0 right-0 m-auto w-max h-max">
                      100
                    </p>
                    <svg
                      viewBox="0 0 180 180"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      pathLength="1"
                      stroke-dashoffset="0px"
                      stroke-dasharray="1px 1px"
                    >
                      <path
                        d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z"
                        fill="#6DE972"
                        fill-opacity="0.2"
                        opacity="1"
                      ></path>
                      <path
                        id="circle"
                        d="M175 90C175 136.944 136.944 175 90 175C43.0558 175 5 136.944 5 90C5 43.0558 43.0558 5 90 5C136.944 5 175 43.0558 175 90Z"
                        stroke="#6DE972"
                        stroke-width="10"
                        pathLength="1"
                        stroke-dashoffset="0px"
                        stroke-dasharray="1px 1px"
                      ></path>
                    </svg>
                  </div>
                  <h3 id="item-header" className="text-md">
                    SEO
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
