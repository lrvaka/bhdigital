import { Elastic } from "gsap";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "../../utils/gsap";

type CallbackType = (animation: GSAPTimeline, index: number | string) => void;

const Navbar = ({ addAnimation }: { addAnimation?: CallbackType }) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (addAnimation) {
      let ctx = gsap.context(() => {
        gsap.set("#navbar", { y: -10, opacity: 0, visibility: "visible" });

        const animation = gsap.timeline().to("#navbar", {
          duration: 2,
          y: 0,
          opacity: 1,
          ease: "back",
        });

        addAnimation(animation, "end");
      }, ref);

      return () => ctx.revert(); // cleanup
    }
  }, []);
  return (
    <header
      ref={ref}
      className="fixed flex justify-between w-full p-2 lg:p-5 z-20 top-0"
    >
      <nav
        id="navbar"
        className="rounded-md glass-morph p-4 w-full list-none flex gap-5 lg:gap-10 text-2xl self-center justify-between items-center"
      >
        <div className="w-14 lg:w-20">
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

        <ul className="flex gap-10 justify-center items-center text-base font-semibold leading-7 lg:text-xl text-gray-100">
          <li>
            <Link passHref href="/">
              Home
            </Link>
          </li>
          <li>
            <Link passHref href="/blog">
              Blog
            </Link>
          </li>
        </ul>
        <Link
          href="/#form"
          className="rounded-md transition-all inline-block bg-rose-500 px-4 py-2 font-semibold text-base  leading-7 text-white shadow-sm ring-1 ring-rose-500 hover:bg-rose-700 hover:ring-rose-700 lg:text-xl"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
