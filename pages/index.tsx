import type { NextPage } from "next";
import HeroBackground from "../components/HeroBackground";
import WorkCarousel from "../components/WorkCarousel";
import Services from "../components/Services";
import Loading from "../components/Loading";

/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import growthGraphic from "../public/growth-graphic.png";
import ewfLogo from "../public/ewf-logo.png";
import ewfLogoNoText from "../public/ewf-logo-notext.png";

import {
  BoltIcon,
  LockOpenIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import { CheckIcon } from "@heroicons/react/24/outline";
import { BanknotesIcon } from "@heroicons/react/24/outline";

import { PhoneIcon } from "@heroicons/react/24/outline";

export function Form() {
  return (
    <div className="relative bg-white text-black">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16  px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-rose-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export function BlogSection() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-rose-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   name: "Twitter",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "GitHub",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Dribbble",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2"></div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-base font-medium text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-300">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-500 py-2 px-4 text-base font-medium text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
            &copy; 2022 Blockhead Digital, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const features = [
  {
    name: "Web Design & Dev",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "SEO",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Branding",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Logo Design",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Social Media Management",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Consulting",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
];

export function ExtraFeature() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 lg:py-40">
        <div>
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-rose-600">
            Everything you need
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            All-in-one agency
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Generating you sales appointments is our bread and butter - but the
            benefits don&apos;t end there. We offer a variety of services to
            improve your digital presence as a whole!
          </p>
        </div>
        <div className="mt-20 lg:col-span-2 lg:mt-0">
          <dl className="grid grid-cols-1 gap-12 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute mt-1 h-6 w-6 text-rose-600"
                    aria-hidden="true"
                  />
                  <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export function Testimonial() {
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
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Workcation</title>
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
            <Image src={ewfLogo} alt="Workcation" />
          </div>

          <blockquote className="mt-10">
            <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-300">
              <p>
                &ldquo;Blockhead Digital transformed my digital presence -
                driving sales to my business&rdquo;
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

export function CTA() {
  return (
    <div className="bg-rose-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-rose-600">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-5 py-3 text-base font-medium text-white hover:bg-rose-700"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    name: "Don't pay until first sale",
    description:
      "That's right, we don't charge you until you get someone through the door - just send over the adspend and we'll work our magic!",
    icon: BanknotesIcon,
  },
  {
    id: 2,
    name: "No contracts",
    description:
      "We don't lock you into a 6-12 month contract like many agencies. Just pay the monthly retainer if you want to continue working with us, stop when you don't! We're confident that our results speaks for itself.",
    icon: LockOpenIcon,
  },
];

export function FeatureSection() {
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
            As a home improvements business, your success is dependent on the
            number of qualified sales appointments booked into your calendar. We
            use strategies that directly lead to sales!
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

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative px-6 lg:px-8 isolate">
      <div className="mx-auto max-w-3xl pt-48 pb-40">
        <div>
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
              <span className="text-gray-100">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-rose-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </span>
            </div>
          </div> */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              We Generate{" "}
              <span className="relative before:absolute before:-z-10 z-10 before:bg-lime-600 before:h-1/2 before:w-full before:bottom-3 before:-rotate-2">
                Qualified Sales
              </span>{" "}
              Appointments For Home Improvement Businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-center">
              Stop buying low quality traffic from agencies that sell you
              arbitrary marketing strategies that don&apos;t elevate your bottom
              line. We build pipelines that generate qualified sales
              appointments, every single day...
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-rose-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-rose-600 hover:bg-rose-700 hover:ring-rose-700"
              >
                Get started
                <span className="text-rose-200" aria-hidden="true">
                  &rarr;
                </span>
              </a>
              {/* <a
                href="#"
                className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-100 ring-1 ring-gray-100/10 hover:ring-gray-100/20"
              >
                Live demo
                <span className="text-gray-400" aria-hidden="true">
                  &rarr;
                </span>
              </a> */}
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

const Home: NextPage = () => {
  return (
    <>
      <Loading />
      <div className="font-bebas">
        <div className="relative">
          <header className="absolute flex justify-between w-full px-5 py-5 z-10">
            <div className=" w-20">
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
            <nav className="list-none flex gap-10 text-2xl self-center justify-center items-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-rose-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-rose-600 hover:bg-rose-700 hover:ring-rose-700"
              >
                Get in touch
              </a>
            </nav>
          </header>
          <HeroBackground />
          {/* <div className="relative  max-w-screen-xl mx-auto px-4  h-[99vh] text-center flex flex-col ">
            <div className="flex flex-col justify-center gap-2 z-10 flex-1">
              <div className="absolute bottom-0 left-0  translate-x-[50%] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 134.4 385.36"
                  className=" w-6 lg:w-8 translate-x-full fill-white  animate-bounce "
                >
                  <path d="M11.2 142.32v100.72c0 30.96 25.07 56.04 56 56.04s56-25.09 56-56.04V142.32c0-30.96-25.07-56.04-56-56.04s-56 25.09-56 56.04Zm-11.2 0c0-37.14 30.08-67.24 67.2-67.24s67.2 30.09 67.2 67.24v100.72c0 37.14-30.08 67.24-67.2 67.24S0 280.19 0 243.04V142.32Z" />
                  <path d="M61.6 114.28v22.4c0 3.09 2.51 5.6 5.6 5.6s5.6-2.51 5.6-5.6v-22.4c0-3.09-2.51-5.6-5.6-5.6s-5.6 2.51-5.6 5.6ZM67.2 371.84l30.8-30.8c2.18-2.19 5.73-2.19 7.92 0 2.19 2.18 2.19 5.73 0 7.92l-34.76 34.76a5.597 5.597 0 0 1-7.92 0L28.22 348.7a5.595 5.595 0 0 1 0-7.92 5.613 5.613 0 0 1 7.92 0l31.07 31.07ZM71.16 1.64l34.76 34.76a5.595 5.595 0 0 1 0 7.92 5.595 5.595 0 0 1-7.92 0l-30.8-30.8-31.07 31.07a5.613 5.613 0 0 1-7.92 0 5.595 5.595 0 0 1 0-7.92L63.24 1.64a5.597 5.597 0 0 1 7.92 0Z" />
                </svg>
              </div>
              <h1 className=" text-2xl sm:text-4xl md:text-5xl lg:text-text-6xl xl:text-8xl  font-black ">
                We Generate{" "}
                <span className="relative before:absolute before:-z-10 z-10 before:bg-lime-600 before:h-1/2 before:w-full before:bottom-3 before:-rotate-2">
                  Qualified Sales
                </span>{" "}
                Appointments For Home Improvements Businesses…
              </h1>
              <p className=" text-md md:text-xl lg:text-3xl text-slate-300">
                Stop buying low quality traffic from agencies that sell you
                arbitrary marketing strategies that don&apos;t elevate your
                bottom line. We build pipelines that generate qualified sales
                appointments, every single day...
              </p>
              <div className="flex flex-col gap-2 items-center md:gap-4 mt-10 sm:mt-20 xl:mt-40">
                <p className=" italic text-lg  sm:text-2xl md:text-4xl font-bold">
                  {" "}
                  We are onboarding{" "}
                  <span className="relative before:absolute before:-z-10 z-10 before:bg-lime-600 before:h-1/5 before:w-full before:bottom-0 before:-rotate-2">
                    new partners
                  </span>{" "}
                  <br />
                  Reserve your spot today!
                </p>
                <button className="bg-[#FF5050] p-3 w-fit text-lg lg:text-2xl">
                  Get Started{" "}
                </button>
              </div>
            </div>
          </div> */}
          <Example />
        </div>
        <FeatureSection />
        <CTA />
        <Testimonial />
        <ExtraFeature />
        <Form />
        {/* <div className="max-w-screen-2xl mx-auto px-4 py-40 2xl:max-w-[1920px]">
          <h2 className="text-2xl md:text-5xl max-w-xl font-black">
            We Build Partnerships
          </h2>
          <p className="text-lg md:text-2xl mt-2 md:mt-4 text-slate-300 max-w-prose">
            Blockhead Digital doesn&apos;t treat their clients like numbers on a
            screen. We build relationships & personalized plans to ensure that
            your online presence is growing & you are generating sales!
          </p>
        </div> */}

        {/* <div className="flex max-w-screen-2xl mx-auto justify-end px-4">
          <h2 className="text-xl md:text-4xl max-w-xl text-stone-300">
          We specialize in web design and development. Creating websites that
          are fast, beautiful and high-converting.
        </h2>
          <h2 className="text-xl md:text-4xl max-w-xl text-stone-300">
            We don&apos;t want clients. We build partnerships.
          </h2>
        </div>

        <div className="py-40">
          <span className="text-2xl flex self-end mb-12 px-4 max-w-screen-2xl mx-auto">
            <svg
              className="self-center mr-4"
              width="100"
              height="2"
              viewBox="0 0 100 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1.25"
                x2="100"
                y2="1.25"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
            Lately at Blockhead Digital.
          </span>
          <WorkCarousel />
        </div> */}

        {/* <div className="flex max-w-screen-2xl mx-auto justify-start px-4 ">
          <h2 className="text-xl md:text-4xl max-w-3xl text-stone-300">
            <span className="text-2xl flex self-end mb-12 text-white">
              <svg
                className="self-center mr-4"
                width="100"
                height="2"
                viewBox="0 0 100 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="1.25"
                  x2="100"
                  y2="1.25"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              What we offer.
            </span>
            We offer more than just websites,
            <br /> we elevate businesses digital presence.
          </h2>
        </div>

        <div className="py-40">
          <Services />
        </div>

        <div className="py-40 max-w-screen-2xl mx-auto justify-start px-4">
          <h2 className="text-8xl font-black">
            Ready To Elevate <br /> Your Business?
          </h2>
          <p className="text-2xl text-stone-300">
            Answers are just an email away. Drop us a line and the right person
            will get back to you as soon as possible.
          </p>
        </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
