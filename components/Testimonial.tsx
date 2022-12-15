import Image from "next/image";
import ewfLogo from "../public/ewf-logo.png";
import ewfLogoNoText from "../public/ewf-logo-notext.png";

export default function Testimonial() {
  return (
    <section className="overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-exquisite-wood-floors"
        >
          <title id="svg-exquisite-wood-floors">exquisite wood floors</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
          />
        </svg>

        <div className="relative">
          <div className="mx-auto w-32 h-32 invert">
            <Image src={ewfLogo} alt="exquisite wood floors" />
          </div>

          <blockquote className="mt-10">
            <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-300">
              <p>
                &ldquo;Blockhead Digital elevated the digital presence of my
                company in every aspect - I recommend them to any business
                looking to take their business to the next level.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <div className=" h-10 w-10 mx-auto ">
                    <Image
                      className="rounded-full"
                      src={ewfLogoNoText}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-100">
                    Brian Fingleton
                  </div>

                  <svg
                    className="mx-1 hidden h-5 w-5 text-rose-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-300">
                    Founder, Exquisite Wood Floors
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
