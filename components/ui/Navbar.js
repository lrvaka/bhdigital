import Link from "next/link";

const Navbar = () => {
  return (
    <header className="absolute flex justify-between w-full px-5 py-5 z-10 top-0">
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
      <nav className="list-none flex gap-5 lg:gap-10 text-2xl self-center justify-center items-center">
        <ul className="flex gap-10 justify-center items-center text-base font-semibold leading-7 lg:text-xl uppercase">
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
          className=" inline-block border-rose-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-rose-600 hover:bg-rose-700 hover:ring-rose-700 uppercase lg:text-xl"
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
