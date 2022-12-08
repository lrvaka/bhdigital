import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import IndustryInfo from "./IndustryInfo";
import ChallengeInfo from "./ChallengeInfo";
import LeadSourceInfo from "./LeadSourceInfo";
import PaidAdCheck from "./PaidAdCheck";
import TellUsMoreInfo from "./TellUsMoreInfo";
import FinalInfo from "./FinalInfo";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface FormProps {
  landingPage?: Boolean;
}

export default function Form({ landingPage }: FormProps) {
  const [page, setPage] = useState(0);

  const [x, setX] = useState(0);

  const [formData, setFormData] = useState({
    industry: "",
    challenge: "",
    leadSource: "",
    paidAdCheck: "",
    tellUsMore: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
  });

  const componentList = [
    <IndustryInfo
      key={Number(Math.random)}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <ChallengeInfo
      key={Number(Math.random)}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <LeadSourceInfo
      key={Number(Math.random)}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <PaidAdCheck
      key={Number(Math.random)}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <TellUsMoreInfo
      key={Number(Math.random)}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <FinalInfo
      key={Number(Math.random)}
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
  ];

  return (
    <div className="relative text-white" id="form">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 " />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="py-16  px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 self-center">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-200">
              Growing your business is just a few clicks away! Submit the form
              and we&apos;ll get in touch with you within 24 hours!
            </p>
            {landingPage ? (
              <p className="mt-6 text-lg leading-6 font-bold text-gray-200">
                Scroll down to find out more about Blockhead Digital & how we
                can grow your construction business! ⬇️
              </p>
            ) : null}
          </div>
        </div>
        <div className=" pb-16 px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12 lg:py-16">
          <div className="bg-slate-100 rounded-tr-xl rounded-tl-xl h-10 overflow-hidden">
            <div
              className="bg-teal-600 animate-colorBg w-full h-full transition-all duration-1000 ease-in-expo"
              style={{
                width:
                  page === 0
                    ? "16%"
                    : page === 1
                    ? "33%"
                    : page === 2
                    ? "50%"
                    : page === 3
                    ? "66%"
                    : page === 4
                    ? "82%"
                    : "100%",
              }}
            ></div>
          </div>
          <div className="mx-auto lg:max-w-none bg-slate-800/75 p-5 lg:p-10 rounded-br-xl rounded-bl-xl  min-h-[620px] overflow-hidden relative w-full">
            <TransitionGroup component={null}>
              <CSSTransition
                classNames="slide"
                timeout={{ enter: 1000, exit: 250 }}
                key={page}
              >
                {componentList[page]}
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
