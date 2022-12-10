import {
  BoltIcon,
  LockOpenIcon,
  GlobeAltIcon,
  ScaleIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import growthGraphic from "../public/growth-graphic.png";
import Image from "next/image";

const transferFeatures = [
  {
    id: 1,
    name: "Connect our marketing system to your business",
    description:
      "We design ads, copy, sales pages, lead surveys, within a week! And we get you setup with a personalized backend CRM to manage your newly generated leads.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "We populate your calendar",
    description:
      "Within the first week, expect your calendar to be filled with qualified sales appointments - the key to growing your business!",
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: "Growth",
    description:
      "With the systems in place & your calendar filled, you'll start experiencing the one thing digital marketing is meant to achieve - GROWTH! ",
    icon: BoltIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "No contracts",
    description:
      "We don't lock you into a 6-12 month contract like many agencies. Just pay the monthly retainer if you want to continue working with us, stop when you don't! We're confident that our results speaks for itself.",
    icon: LockOpenIcon,
  },
  {
    id: 2,
    name: "First month FREE!",
    description:
      "That's right, first month free of charge! - just send over the adspend and we'll work our magic!",
    icon: BanknotesIcon,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative max-w-prose mx-auto">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight white sm:text-4xl">
            Marketing strategies that work
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-400">
            As a growing business, your success is dependent on the number
            of qualified sales appointments booked into your calendar. We use
            strategies that directly lead to sales!
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative max-w-prose">
            <h3 className="text-2xl font-bold tracking-tight white sm:text-3xl">
              A system tailored to you
            </h3>
            <p className="mt-3 text-lg text-gray-400">
              We use strategies/systems that are tailored to generating
              qualified traffic, leads and sales!
            </p>

            <dl className="mt-10 space-y-10 ">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white">
                      <span className="font-black" aria-hidden="true">
                        {item.id}
                      </span>
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-100">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <Image className="relative mx-auto" src={growthGraphic} alt="" />
          </div>
        </div>

        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-32 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2 max-w-prose">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                We build partnerships
              </h3>
              <p className="mt-3 text-lg text-gray-400">
                We don&apos;t just want &quot;clients&quot; - we build
                partnerships, we work with people that we share a mutual trust
                with. If you win, we win.
              </p>

              <dl className="mt-10 space-y-10 ">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white">
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-100">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-400">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mt-10 lg:col-start-1 lg:mt-0">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <svg
                className=" fill-rose-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 560 420"
              >
                <path d="M238 39.88c2.92 3.83 8.38 4.6 12.25 1.73 1.86-1.37 3.08-3.42 3.41-5.7s-.27-4.6-1.66-6.43l-13.12-17.34c-2.92-3.83-8.38-4.61-12.25-1.73-1.86 1.37-3.08 3.42-3.41 5.7s.27 4.6 1.66 6.43L238 39.88ZM309.75 41.61c3.87 2.87 9.33 2.1 12.25-1.73l13.12-17.34c1.39-1.84 1.99-4.16 1.66-6.44s-1.55-4.34-3.41-5.7c-3.87-2.86-9.32-2.09-12.25 1.73L308 29.47c-1.39 1.84-1.99 4.15-1.66 6.43s1.55 4.34 3.41 5.7ZM280 43.34c4.81.02 8.73-3.86 8.75-8.67v-26C288.7 3.87 284.8 0 280 0s-8.7 3.87-8.75 8.67v26.01c.02 4.81 3.94 8.69 8.75 8.67ZM281.86 354.07l-10.12-9.96a26.352 26.352 0 0 0-17.27-7.47 25.644 25.644 0 0 0-7.68-17.09l-10.13-9.97a26.33 26.33 0 0 0-17.27-7.45 25.657 25.657 0 0 0-7.69-17.11l-10.12-9.96a26.352 26.352 0 0 0-17.27-7.47 25.644 25.644 0 0 0-7.68-17.09l-10.13-9.97c-4.99-4.86-11.68-7.59-18.64-7.59s-13.66 2.72-18.65 7.59l-21.82 21.48c-4.96 4.85-7.75 11.5-7.75 18.43s2.8 13.58 7.75 18.43l10.13 9.97a26.39 26.39 0 0 0 17.27 7.46c.31 6.46 3.06 12.57 7.68 17.1l10.13 9.97a26.39 26.39 0 0 0 17.27 7.46c.31 6.46 3.06 12.57 7.69 17.1l10.13 9.97a26.386 26.386 0 0 0 17.26 7.46 25.7 25.7 0 0 0 7.69 17.1l10.13 9.97c4.98 4.87 11.68 7.59 18.64 7.59s13.66-2.72 18.64-7.59l21.82-21.48c4.96-4.85 7.75-11.5 7.75-18.43 0-6.94-2.79-13.58-7.75-18.43Zm-162.14-67.52c-1.65-1.61-2.59-3.82-2.59-6.13s.93-4.52 2.59-6.13l21.82-21.48c3.5-3.43 9.11-3.43 12.61 0l10.13 9.97c1.66 1.61 2.59 3.82 2.59 6.13s-.93 4.52-2.59 6.13l-21.82 21.48a9.044 9.044 0 0 1-12.62 0l-10.13-9.97Zm35.08 34.53c-1.65-1.61-2.59-3.82-2.59-6.13s.93-4.52 2.59-6.13l21.82-21.48a9.022 9.022 0 0 1 12.61 0l10.13 9.97c1.65 1.61 2.59 3.82 2.59 6.13s-.93 4.52-2.59 6.13l-21.82 21.48a9.032 9.032 0 0 1-12.61 0l-10.13-9.97Zm45.21 44.5-10.13-9.97c-1.65-1.61-2.59-3.82-2.59-6.13s.93-4.52 2.59-6.13l21.82-21.48c3.51-3.43 9.11-3.43 12.61 0l10.13 9.97c1.66 1.61 2.59 3.82 2.59 6.13s-.93 4.52-2.59 6.13l-21.82 21.48a9.044 9.044 0 0 1-12.62 0Zm69.52 13.05-21.82 21.48a9.025 9.025 0 0 1-12.62 0l-10.13-9.97c-1.65-1.61-2.59-3.82-2.59-6.13s.93-4.52 2.59-6.13l21.82-21.48c3.51-3.42 9.11-3.42 12.61 0l10.13 9.97c1.65 1.61 2.58 3.82 2.58 6.13s-.93 4.52-2.58 6.13Z" />
                <path d="M338.14 162c-.58.7-12.22 12.41-12.22 12.41l107.21 105.54c3.36 3.23 5.28 7.68 5.31 12.34a14.89 14.89 0 0 1-4.43 10.75 16.95 16.95 0 0 1-11.99 4.37c-4.41-.16-8.59-2.04-11.63-5.23l-.29-.29-.02-.02-74.21-73.05c-3.44-3.38-8.96-3.36-12.38.04a8.581 8.581 0 0 0-2.54 6.14c0 2.3.94 4.51 2.58 6.12l74.23 73.06a18.13 18.13 0 0 1 5.52 12.76 14.69 14.69 0 0 1-4.35 10.62 17.195 17.195 0 0 1-23.93-1.17l-74.82-73.64c-3.44-3.38-8.96-3.36-12.38.04a8.581 8.581 0 0 0-2.54 6.14c0 2.3.94 4.51 2.58 6.12l68.97 67.89c3.47 3.35 5.46 7.95 5.54 12.77.04 3.98-1.52 7.81-4.35 10.62a17.195 17.195 0 0 1-23.93-1.17l-72.11-70.96-2.72-2.68c-3.44-3.38-8.96-3.36-12.38.04a8.605 8.605 0 0 0 .05 12.26l66.5 65.45c3.3 3.18 5.18 7.57 5.21 12.15a15 15 0 0 1-4.47 10.8c-3.77 3.6-9.06 5.13-14.17 4.09l-12.69 13.88a35.24 35.24 0 0 0 15.8 3.77 33.12 33.12 0 0 0 23.39-9.44 32.001 32.001 0 0 0 9.27-18.48c3.66 1.25 7.5 1.89 11.37 1.9 8.66.08 17-3.27 23.21-9.32a31.763 31.763 0 0 0 9.4-20.49c2.72.67 5.52 1.02 8.32 1.03 8.66.07 17-3.27 23.2-9.32a31.89 31.89 0 0 0 9.52-22.92c0-.77-.07-1.55-.12-2.32.78.05 1.57.11 2.35.11 8.71.06 17.1-3.32 23.34-9.4a32.108 32.108 0 0 0 9.6-23.05c-.02-9.29-3.8-18.18-10.48-24.64L338.13 161.97ZM108.37 236.52l13.01-11.64-34.2-33.66L191.56 88.48l10.98 10.81a25.305 25.305 0 0 0 17.79 7.29l24.43.07 16.39-16.14c-2.35-.74-4.79-1.14-7.25-1.18l-33.54-.09c-2.06 0-4.04-.8-5.5-2.25l-13.7-13.48c2.16-8.82-.51-18.12-7.02-24.44l-33.52-32.99c-4.99-4.86-11.68-7.59-18.65-7.59s-13.66 2.72-18.65 7.59l-8.4 8.27L96.77 6.44c-3.44-3.38-8.96-3.36-12.38.04a8.581 8.581 0 0 0-2.54 6.14c0 2.3.94 4.51 2.58 6.12l18.11 17.83-69.43 68.34L14.92 87c-3.44-3.38-8.96-3.36-12.38.04A8.681 8.681 0 0 0 0 93.18c0 2.3.94 4.51 2.58 6.12l18.11 17.83-8.32 8.19c-4.96 4.85-7.75 11.49-7.75 18.43s2.79 13.58 7.75 18.43l33.52 32.99a26.504 26.504 0 0 0 18.64 7.59c2.77-.04 5.51-.5 8.13-1.38l35.7 35.14Zm-50.14-53.65-33.52-32.99c-3.38-3.39-3.38-8.88 0-12.26L135.69 28.38c3.51-3.43 9.11-3.42 12.62 0l33.52 32.98c1.63 1.62 2.55 3.83 2.55 6.13s-.92 4.51-2.55 6.13L70.85 182.86c-3.51 3.42-9.11 3.42-12.61 0Z" />
                <path d="M557.46 90.17c-3.42-3.4-8.93-3.41-12.38-.04l-17.2 16.93-69.44-68.35 17.12-16.85a8.662 8.662 0 0 0 2.58-6.13c0-2.3-.91-4.52-2.54-6.14a8.806 8.806 0 0 0-12.38-.04l-17.2 16.93-8.4-8.27c-4.99-4.86-11.68-7.59-18.64-7.59s-13.65 2.72-18.64 7.59L366.82 51.2a25.684 25.684 0 0 0-7.75 18.42l-15.74 15.5a7.905 7.905 0 0 1-6.18 2.22l-32.57-2.69a25.473 25.473 0 0 0-19.97 7.2l-57.11 56.21a24.725 24.725 0 0 0-7.04 13.3l-9.32 51.73a24.475 24.475 0 0 0 6.58 21.57 25.159 25.159 0 0 0 18.22 7.75c1.15 0 2.3-.08 3.43-.23l14.69-1.93c6.98-.93 13.28-4.71 17.39-10.43 6.08-8.5 15.83-24.79 16.26-42.25l36.34-35.77a8.639 8.639 0 0 0 2.58-6.12c0-2.3-.91-4.52-2.54-6.14-3.42-3.4-8.94-3.42-12.38-.04l-38.98 38.36a8.657 8.657 0 0 0-2.57 6.69c.85 13.67-7.78 27.95-13 35.25a7.886 7.886 0 0 1-5.41 3.27L237.07 225c-2.48.34-4.97-.52-6.7-2.32a7.438 7.438 0 0 1-2-6.54l9.32-51.73a7.49 7.49 0 0 1 2.14-4.04l57.11-56.21a7.847 7.847 0 0 1 6.18-2.22l32.57 2.69c7.39.64 14.69-2 19.97-7.2l10.37-10.21c.26.28.51.58.79.85l109.41 107.7-39.48 38.86 12.41 12.22 43.03-42.35c1.4.24 2.82.38 4.25.4 6.97.02 13.67-2.71 18.65-7.59l33.52-32.99c4.96-4.85 7.75-11.49 7.75-18.43s-2.79-13.58-7.75-18.43l-8.32-8.19 17.12-16.85a8.639 8.639 0 0 0 2.58-6.12c0-2.3-.91-4.51-2.54-6.14Zm-21.18 61.86-33.51 32.99a9.044 9.044 0 0 1-12.62 0L379.17 75.78c-1.63-1.62-2.55-3.83-2.55-6.13s.92-4.51 2.55-6.13l33.52-32.99c3.53-3.37 9.09-3.37 12.61 0l110.98 109.24c1.63 1.62 2.55 3.83 2.55 6.13s-.92 4.51-2.55 6.13Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
