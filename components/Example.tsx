import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const Example = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#rocket-path-1, #rocket-path-2, #rocket-path-3", {
        drawSVG: "0% 0%",
      });

      gsap.to("#rocket", {
        rotate: 1,
        repeat: -1,
        yoyo: true,
        duration: 0.25,
      });

      gsap.to("#rocket-path-1", {
        drawSVG: "0% 100%",
        stroke: "#FA9FAF",
        repeat: -1,
        yoyo: true,
        duration: 1.25,
      });

      gsap.to("#rocket-path-2", {
        drawSVG: "0% 50%",
        stroke: "#FA9FAF",
        repeat: -1,
        yoyo: true,
        duration: 0.75,
      });

      gsap.to("#rocket-path-3", {
        drawSVG: "0% 80%",
        stroke: "#FA9FAF",
        repeat: -1,
        yoyo: true,
        duration: 1,
      });
    }, ref);

    return () => {
      ctx.revert();
    }; // cleanup
  }, []);

  return (
    <div ref={ref}>
      <svg
        id="rocket"
        className="w-32 h-32"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="rocket-path-1"
          d="M1 13L3 11"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
        <path
          id="rocket-path-2"
          d="M2 15L4 13"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
        <path
          id="rocket-path-3"
          d="M4 16L6 14"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
        <path
          d="M12.625 2.5L15.4082 0.909588C15.8503 0.656956 16.343 1.14967 16.0904 1.59178L14.5 4.375M12.625 2.5L14.5 4.375M12.625 2.5L6.5 6M14.5 4.375L11 10.5M6.5 6H3.11803C2.59042 6 2.42252 6.71126 2.89443 6.94721L4 7.5M6.5 6L4 7.5M4 7.5L3.62048 7.68976C3.31523 7.84239 3.24921 8.24921 3.49053 8.49053L4 9M11 10.5V13.882C11 14.4096 10.2887 14.5775 10.0528 14.1056L9.5 13M11 10.5L9.5 13M9.5 13L9.31024 13.3795C9.15761 13.6848 8.75079 13.7508 8.50947 13.5095L8 13M4 9L3.35355 9.64645C3.15829 9.84171 3.15829 10.1583 3.35355 10.3536L6.64645 13.6464C6.84171 13.8417 7.15829 13.8417 7.35355 13.6464L8 13M4 9L8 13M11 7V7C10.4477 7 10 6.55228 10 6V6C10 5.44772 10.4477 5 11 5V5C11.5523 5 12 5.44772 12 6V6C12 6.55228 11.5523 7 11 7Z"
          stroke="white"
          stroke-width="0.25"
        />
      </svg>
    </div>
  );
};

export default Example;
