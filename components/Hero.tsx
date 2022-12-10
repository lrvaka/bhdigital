export default function Hero() {
  return (
    <div className="relative px-6 lg:px-8 isolate">
      <div className="mx-auto max-w-3xl pt-48 pb-40">
        <div>
          <div>
            {/* <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              We Generate{" "}
              <span className="relative before:absolute before:-z-10 z-10 before:bg-lime-600 before:h-1/2 before:w-full before:bottom-3 before:-rotate-2">
                Qualified Sales
              </span>{" "}
              Appointments For Construction Businesses
            </h1> */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              Digital Marketing for Businesses | Boost Your Online
              Presence and Attract More Leads
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-center">
              Stop buying low quality traffic from agencies that sell you
              arbitrary marketing strategies that don&apos;t elevate your bottom
              line. We build pipelines that generate qualified sales
              appointments, every single day...
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <a
                href="#form"
                className="inline-block rounded-lg bg-rose-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-rose-600 hover:bg-rose-700 hover:ring-rose-700"
              >
                Get started
                <span className="text-rose-200" aria-hidden="true">
                  &rarr;
                </span>
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
      </div>
    </div>
  );
}
