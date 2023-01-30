import { useIsomorphicLayoutEffect } from "@react-three/fiber/dist/declarations/src/core/utils";
import { Ref, useEffect, useLayoutEffect, useRef, useContext } from "react";
import { gsap, SplitText } from "../utils/gsap";
import InitialLoadContext from "../store/initialLoad-context";

type CallbackType = (animation: GSAPTimeline, index: number) => void;

const Loading = ({
  addAnimation,
  setIsOpen,
  isOpen,
  ...props
}: {
  addAnimation?: CallbackType;
  setIsOpen?: (value: boolean) => void;
  isOpen?: boolean;
}) => {
  const logo = useRef<SVGSVGElement>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline>();
  const { setFirstLoad } = useContext(InitialLoadContext);

  useEffect(() => {
    // Note that ref.current may be null. This is expected, because you may
    // conditionally render the ref-ed element, or you may forgot to assign it

    let animation = gsap.timeline();

    let ctx = gsap.context(() => {
      let logoWidth = gsap.getProperty("#logo", "width");
      let containerWidth = gsap.getProperty("#container", "width");

      gsap.set("#container", {
        autoAlpha: 1,
      });
      gsap.set("#bottom", { visibility: "hidden", opacity: 0 });
      gsap.set("#text", { visibility: "hidden", opacity: 0 });

      const blockheadText = new SplitText("#text", {
        type: "words,chars,lines",
      });

      animation = gsap
        .timeline()
        .fromTo(
          "#top",
          { drawSVG: "0% 0%" },
          { drawSVG: "0% 100%", duration: 1, ease: "power4.in" }
        )
        .to("#bottom", {
          visibility: "visible",
          opacity: 1,
          duration: 0.5,
          ease: "power4.in",
        })
        .fromTo(
          "#logo",
          {
            x: containerWidth
              ? Number(containerWidth) / 2 - Number(logoWidth) / 2
              : 0,
          },
          { x: 0, duration: 0.5 }
        )
        .to("#text", { visibility: "visible", opacity: 1 }, "-=3")
        .from(blockheadText.lines, {
          duration: 0.75,
          opacity: 0,
          y: "100%",
          rotationX: -90,
          ease: "back",
          stagger: 0.05,
        })
        .to("#backdrop", { y: "100%", duration: 0.75, ease: "power4.in" })
        .to(
          "#backdrop-white",
          {
            y: "100%",
            duration: 0.75,
            ease: "power4.in",
            onComplete: () => {
              setFirstLoad(true);
            },
          },
          "-=0.5"
        );

    }, container); // <- IMPORTANT! Scopes selector text

    addAnimation(animation, 0);

    return () => ctx.revert(); // cleanup
  }, [addAnimation, setFirstLoad]); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div ref={container}>
      <div
        id="backdrop-white"
        className="fixed z-40  w-screen h-screen top-0 left-0 flex items-center justify-center overflow-hidden bg-white"
      ></div>
      <div
        id="backdrop"
        className="font-['organetto'] fixed z-50  w-screen h-screen top-0 left-0 flex items-center justify-center overflow-hidden bg-gray-900"
      >
        <div id="container" className="flex gap-4 invisible">
          <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 524.99 571.61"
            className="max-w-[100px] md:max-w-[125px] h-full w-full"
            {...props}
          >
            <defs>
              <style>{".g{fill:#fff}"}</style>
            </defs>

            <path
              id="top"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
              d="M3 149.23 262.29 1.73 522 152.23 263 301.77 3 149.23z"
            />
            <path
              id="bottom"
              className="g invisible"
              d="M190.06 378.7c11.26 3.23 19.6-3.73 19.6-17.84 0-16.67-11.63-36.95-25.98-45.29L53.79 240.08v59.1l129.89 75.49c2.15 1.25 4.27 2.61 6.38 4.03ZM183.68 436.69 53.79 361.2v60.38l129.89 75.49c14.35 8.34 25.98 1.58 25.98-15.09s-11.63-36.95-25.98-45.29ZM314.8 271.61l155.4-89.72v120l-155.4 89.72v-120zM314.8 451.61l155.4-89.72v120l-155.4 89.72v-120z"
            />
          </svg>
          <h3
            id="text"
            className="leading-none text-2xl md:text-3xl max-h-fit self-center"
          >
            Blockhead
            <br />
            Digital
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Loading;
