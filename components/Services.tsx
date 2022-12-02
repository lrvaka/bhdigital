import React, {
  useRef,
  forwardRef,
  useState,
  useLayoutEffect,
  useEffect,
  LegacyRef,
} from "react";
import { gsap } from "gsap";

import NextImage from "next/image";
import service1 from "../public/service-1.png";
import service2 from "../public/service-2.png";
import service3 from "../public/service-3.png";
import useArrayRef from "../hooks/useArrayRef";

interface ServiceItemProps {
  heading: string;
  details: string;
  id: number;
  className?: string;
  changeSelected: (selected: number) => void;
}

const ServicesImages = ({
  selected,
  previous,
}: {
  selected: number;
  previous: number;
}) => {
  return (
    <>
      <div
        className={`absolute min-w-full min-h-full top-0 left-0 service-image ${
          selected === 0 ? " active " : previous === 0 ? " previous " : null
        }`}
      >
        <NextImage src={service1} />
      </div>
      <div
        className={`absolute min-w-full min-h-full top-0 left-0 service-image ${
          selected === 1 ? " active " : previous === 1 ? " previous " : null
        }`}
      >
        <NextImage src={service3} />
      </div>
      <div
        className={`absolute min-w-full min-h-full top-0 left-0 service-image ${
          selected === 2 ? " active " : previous === 2 ? " previous " : null
        }`}
      >
        <NextImage src={service2} />
      </div>
    </>
  );
};

const ServicesItem = forwardRef<HTMLButtonElement, ServiceItemProps>(
  function ServicesItem(props, ref) {
    return (
      <button
        ref={ref}
        onClick={() => props.changeSelected(props.id)}
        aria-hidden="true"
        className={props.className}
      >
        <h3 className="uppercase font-extrabold text-6xl xl:text-8xl service-heading ">
          <div className="inner">{props.heading}</div>
        </h3>
        <div className="invisible max-h-[0px] service-body">
          <p className="text-2xl">{props.details}</p>
        </div>
      </button>
    );
  }
);

function ServicesContent({
  selected,
  changeSelected,
  previous,
}: {
  selected: number;
  previous: number;
  changeSelected: (selected: number) => void;
}) {
  const parentRef = useRef<HTMLDivElement>(null);
  const imageParentRef = useRef<HTMLDivElement>(null);
  const ref0 = useRef<HTMLButtonElement>(null);
  const ref1 = useRef<HTMLButtonElement>(null);
  const ref2 = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const refArray = [ref0, ref1, ref2];

    refArray.forEach((e) => {
      const serviceHeading =
        e.current?.querySelector<HTMLElement>(".service-heading");

      const serviceBody =
        e.current?.querySelector<HTMLElement>(".service-body");

      if (e.current?.classList.contains("active")) {
        serviceBody!.style.maxHeight = `${serviceBody?.scrollHeight}px`;
        serviceBody!.style.visibility = `visible`;
      } else {
        serviceBody!.style.maxHeight = "";
        serviceBody!.style.visibility = `hidden`;
      }
    });
    const headingCtx = gsap.context(() => {
      gsap.fromTo(
        ".active>.service-heading>.inner",
        {
          y: "100%",
          rotationX: -90,
          opacity: 0,
        },
        {
          duration: 0.8,
          y: "0%",
          rotationX: 0,
          opacity: 1,
          ease: "power2.out",
        }
      );
    }, parentRef);

    const ctx = gsap.context(() => {
      // Target the two specific elements we have assigned the animate class

      gsap.fromTo(
        ".active.service-image",
        {
          y: "100%",
          clipPath: "inset(100% 0 0 0)",
          scale: 1.3,
        },
        {
          duration: 0.8,
          clipPath: "inset(0% 0 0 0)",
          y: "0%",
          scale: 1,
          ease: "power2.out",
        }
      );
    }, imageParentRef); // <- Scope!

    return () => {
      ctx.revert();
      headingCtx.revert();
    };
  }, [selected]);

  return (
    <>
      <div
        ref={imageParentRef}
        className="relative flex-1 max-w-[500px] overflow-hidden min-h-full  "
      >
        <ServicesImages previous={previous} selected={selected} />
      </div>
      <div ref={parentRef} className="max-w-prose">
        <ServicesItem
          ref={ref0}
          heading="Design"
          details=" Your website is the digital hub for all your online traffic, a
            well-designed website makes converting leads into sales easy.
            Blockhead Digital ensures that your website is optimized for
            converting visitors into customers!"
          changeSelected={changeSelected}
          className={`relative cursor-pointer pb-4 text-left service-item--bordered ${
            selected === 0 ? " active " : null
          }`}
          id={0}
        />
        <ServicesItem
          ref={ref1}
          heading="Development"
          details="We use the latest and greatest technologies to develop your websites. We code our websites from scratch. This gives us websites that are faster, highly customizable, and more secure than any traditional website builder."
          changeSelected={changeSelected}
          className={`relative cursor-pointer pb-4 text-left service-item--bordered ${
            selected === 1 ? " active " : null
          }`}
          id={1}
        />
        <ServicesItem
          ref={ref2}
          heading="Marketing"
          details="Now you've got a website - all you need now is traffic. We offer services such as paid advertisements, social media marketing and more, to generate traffic to your new and improved website!"
          changeSelected={changeSelected}
          className={`relative cursor-pointer pb-4 text-left ${
            selected === 2 ? " active " : null
          }`}
          id={2}
        />
      </div>
    </>
  );
}

export default function Services() {
  const [selected, setSelected] = useState(0);
  const [previous, setPrevious] = useState(0);

  const changeSelectedHandler = (current: number) => {
    setPrevious(selected);
    setSelected(current);
  };

  return (
    <div className="flex max-w-screen-2xl mx-auto px-4 gap-12 lg:gap-36 xl:gap-44 2xl:gap-56 ">
      <ServicesContent
        selected={selected}
        previous={previous}
        changeSelected={changeSelectedHandler}
      />
    </div>
  );
}
