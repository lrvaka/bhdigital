import Image from "next/image";
import ewfLogo from "../public/ewf-logo.png";
import ewfLogoNoText from "../public/ewf-logo-notext.png";

export default function Testimonial() {
  return (
    <section className="py-12 md:py-20 lg:py-24 relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute  inset-x-0 top-0 z-10 transform-gpu overflow-hidden blur-3xl sm:top-0">
          <svg
            className="relative left-[calc(20%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-0 sm:h-[42.375rem]"
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
        <div className="relative">
          <div className="mx-auto w-32 h-32 invert">
            <Image src={ewfLogo} alt="exquisite wood floors" />
          </div>

          <blockquote className="mt-5 lg:mt-10">
            <div className="mx-auto max-w-3xl text-center text-lg lg:text-2xl font-medium text-gray-300">
              <p>
                &ldquo;Blockhead Digital elevated the digital presence of my
                company in every aspect - I recommend them to anyone looking to
                take their business to the next level.&rdquo;
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
                  <div className="uppercase text-base font-medium text-gray-100">
                    Brian Fingleton
                  </div>

                  <svg
                    className="mx-1 hidden h-5 w-5 text-rose-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="uppercase text-base font-medium text-gray-300">
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
