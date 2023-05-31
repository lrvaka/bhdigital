import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const featureList = [
  {
    icon: (
      <svg
        id="envelope"
        className="w-32 h-32"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="main-envelope"
          d="M2 6H1.5C1.22386 6 1 6.22386 1 6.5V13.5C1 13.7761 1.22386 14 1.5 14H14.5C14.7761 14 15 13.7761 15 13.5V6.5C15 6.22386 14.7761 6 14.5 6H14M2 6L7.77639 8.8882C7.91716 8.95858 8.08284 8.95858 8.22361 8.8882L14 6M2 6H14"
          stroke="white"
          stroke-width="0.25"
        />
        <path
          id="envelope-streak-1"
          d="M2 15V18"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
        <path
          id="envelope-streak-2"
          d="M8 16V19"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
        <path
          id="envelope-streak-3"
          d="M14 15V18"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
        <path
          id="envelope-streak-4"
          d="M2 5V2"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
        <path
          id="envelope-streak-5"
          d="M8 4V1"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
        <path
          id="envelope-streak-6"
          d="M14 5V2"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
      </svg>
    ),
    desc: "Subscribe to a plan & complete the discovery form",
  },
  {
    icon: (
      <svg
        id="puzzle"
        className="w-32 h-32 overflow-visible"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="puzzle-path-1"
          d="M11.5 4H12.5C12.7761 4 13 4.22386 13 4.5V6.5C13 6.77614 13.2239 7 13.5 7H14.5C14.7761 7 15 7.22386 15 7.5V8V8.5C15 8.77614 14.7761 9 14.5 9H13.5C13.2239 9 13 9.22386 13 9.5V10V11.5C13 11.7761 12.7761 12 12.5 12H11.5C11.2239 12 11 12.2239 11 12.5V13.5C11 13.7761 10.7761 14 10.5 14H9.5C9.22386 14 9 13.7761 9 13.5V12.5C9 12.2239 8.77614 12 8.5 12H7.5C7.22386 12 7 11.7761 7 11.5V8.5C7 8.22386 7.22386 8 7.5 8H8.5C8.77614 8 9 7.77614 9 7.5V6.5C9 6.22386 8.77614 6 8.5 6H7.5C7.22386 6 7 5.77614 7 5.5V4.5C7 4.22386 7.22386 4 7.5 4H9C9.27614 4 9.5 4.22386 9.5 4.5V5C9.5 5.27614 9.72386 5.5 10 5.5H10.5C10.7761 5.5 11 5.27614 11 5V4.5C11 4.22386 11.2239 4 11.5 4Z"
          stroke="white"
          stroke-width="0.25"
        />
        <path
          id="puzzle-path-2"
          d="M4.5 4H6.5C6.77614 4 7 4.22386 7 4.5V5.5C7 5.77614 7.22386 6 7.5 6H8.5C8.77614 6 9 6.22386 9 6.5V7.5C9 7.77614 8.77614 8 8.5 8H7.5C7.22386 8 7 8.22386 7 8.5V10V11.5C7 11.7761 6.77614 12 6.5 12H5.5C5.22386 12 5 11.7761 5 11.5V11V10.5C5 10.2239 4.77614 10 4.5 10H4C3.72386 10 3.5 10.2239 3.5 10.5V11V11.5C3.5 11.7761 3.27614 12 3 12H1.5C1.22386 12 1 11.7761 1 11.5V9.5C1 9.22386 1.22386 9 1.5 9H2.5C2.77614 9 3 8.77614 3 8.5V7.5C3 7.22386 2.77614 7 2.5 7H1.5C1.22386 7 1 6.77614 1 6.5V4.5C1 4.22386 1.22386 4 1.5 4C1.77614 4 2 3.77614 2 3.5V2.5C2 2.22386 2.22386 2 2.5 2H3.5C3.77614 2 4 2.22386 4 2.5V3.5C4 3.77614 4.22386 4 4.5 4Z"
          stroke="white"
          stroke-width="0.25"
        />
        <path
          id="puzzle-path-3"
          d="M9.5 1V2M9 1.5H10"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
        <path
          id="puzzle-path-4"
          d="M3.5 14V15M3 14.5H4"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
        <path
          id="puzzle-path-5"
          d="M14.5 12V13M14 12.5H15"
          stroke="#F43F5E"
          stroke-width="0.25"
          stroke-linecap="round"
        />
      </svg>
    ),
    desc: "Receive a highly tailored Done-For-You digital growth strategy",
  },

  {
    icon: (
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
    ),
    desc: "Sit back and watch your online presence skyrocket",
  },
];

const MainFeatures = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({ repeat: -1 });

      gsap.set("#main-envelope", {
        y: 4,
      });

      gsap.set("#envelope-streak-4, #envelope-streak-5, #envelope-streak-6", {
        y: 4,
      });

      gsap.set(
        "#envelope-streak-1, #envelope-streak-2, #envelope-streak-3, #envelope-streak-4, #envelope-streak-5, #envelope-streak-6",
        {
          drawSVG: "0% 0%",
        }
      );

      tl.to("#main-envelope", {
        y: 0,
        duration: 1,
      })
        .to(
          "#envelope-streak-1, #envelope-streak-2, #envelope-streak-3",
          {
            drawSVG: "80% 0%",
            stagger: { from: "end", amount: 0.1 },
            duration: 0.1,
          },

          "<+=0.5"
        )
        .to(
          "#envelope-streak-1, #envelope-streak-2, #envelope-streak-3",
          {
            drawSVG: "0% 0%",
            stagger: { from: "end", amount: 0.1 },
            duration: 0.1,
            stroke: "#FA9FAF",
          },

          "<+=0.3"
        )
        .to("#main-envelope", {
          y: 4,
          duration: 1,
        })
        .to(
          "#envelope-streak-4, #envelope-streak-5, #envelope-streak-6",
          {
            drawSVG: "80% 0%",
            stagger: { from: "end", amount: 0.1 },
            duration: 0.1,
          },

          "<+=0.5"
        )
        .to(
          "#envelope-streak-4, #envelope-streak-5, #envelope-streak-6",
          {
            drawSVG: "0% 0%",
            stagger: { from: "end", amount: 0.1 },
            duration: 0.1,
            stroke: "#FA9FAF",
          },

          "<+=0.3"
        );
    }, ref);

    let ctx1 = gsap.context(() => {
      let tl = gsap.timeline({ repeat: -1, yoyo: true });

      gsap.set("#puzzle-path-1", {
        x: 2,
        rotate: 10,
        origin: "top left",
      });

      gsap.set("#puzzle-path-2", {
        x: -2,
        rotate: -5,
        origin: "top right",
      });

      gsap.set("#puzzle-path-3", {
        scale: 0,
      });

      gsap.set("#puzzle-path-4", {
        scale: 0,
      });

      gsap.set("#puzzle-path-5", {
        scale: 0,
      });

      tl.to("#puzzle-path-1", {
        x: 0,
        rotate: 0,
      })
        .to(
          "#puzzle-path-2",
          {
            x: 0,
            rotate: 0,
          },
          "<+=0.1"
        )
        .to("#puzzle-path-3", { scale: 1, duration: 0.3 })
        .to("#puzzle-path-4", { scale: 0.75, duration: 0.3 }, "<+=0.1")
        .to("#puzzle-path-5", { scale: 0.5, duration: 0.3 }, "<+=0.1");
    }, ref);

    let ctx2 = gsap.context(() => {
      let tl = gsap.timeline({ repeat: -1, yoyo: true });

      gsap.set("#rocket", {});

      gsap.set("#rocket-path-2", {
        drawSVG: "0% 0%",
      });

      gsap.set("#rocket-path-1", {
        drawSVG: "0% 0%",
      });

      gsap.set("#rocket-path-3", {
        drawSVG: "0% 0%",
      });

      gsap.to("#rocket", {
        rotate: 1,
        repeat: -1,
        yoyo: true,
        duration: 0.25,
      });

      gsap.to("#rocket-path-2", {
        drawSVG: "0% 100%",
        stroke: "#FA9FAF",
        repeat: -1,
        yoyo: true,
        duration: 1.25,
      });

      gsap.to("#rocket-path-1", {
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
      ctx1.revert();
      ctx2.revert();
    }; // cleanup
  }, []);

  return (
    <div ref={ref} className="px-2 lg:px-0">
      <div className="mb-16 lg:mb-20 text-center flex flex-col justify-center items-center max-w-lg mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl  font-bold tracking-tight  max-w-2xl">
          Simpler is better, especially in Digital Growth
        </h2>
        <p className="paragraph">
          Digital growth as you know is finished - digital growth as you want it
          just arrived
        </p>
      </div>

      <ul className="flex justify-between flex-col gap-20 lg:flex-row max-w-6xl mx-auto text-center">
        {featureList.map((e, i) => (
          <li
            className="flex flex-1 flex-col justify-center items-center"
            key={i}
          >
            {e.icon}
            <p className="flex-1 text-lg text-gray-300 lg:text-xl">{e.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainFeatures;
