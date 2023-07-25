import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function NewsletterModal({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    // Use the `Transition` component at the root level
    <Transition show={isOpen} as={Fragment}>
      <Dialog className="relative z-50" onClose={() => setIsOpen(false)}>
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/20 w-screen h-screen top-0 left-0"
            aria-hidden="true"
          />
        </Transition.Child>
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto w-[90vw] sm:max-w-xl ">
              <div className="relative overflow-hidden rounded-2xl bg-rose-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                  >
                    <path
                      className="text-rose-500 text-opacity-40"
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    />
                    <path
                      className="text-rose-700 text-opacity-40"
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <div className="sm:text-center">
                    <Dialog.Title className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      <span className="italic font-bold "> NO BULLSH*T </span>
                      weekly digital marketing tips!
                    </Dialog.Title>
                    <Dialog.Description className="mx-auto mt-6 max-w-2xl text-lg text-rose-200">
                      Sign up for our newsletter and receive weekly digital
                      marketing tips that&apos;ll take your brand/business to
                      the next level!
                    </Dialog.Description>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-12 sm:mx-auto sm:flex sm:max-w-lg"
                  >
                    <div className="min-w-0 flex-1">
                      <label htmlFor="cta-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-600"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-600 sm:px-10"
                      >
                        Elevate my business
                      </button>
                    </div>
                  </form>
                </div>
                <button
                  className="absolute top-1 left-1 font-semibold text-2xl rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 hover:text-stone-600 transition-all"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
