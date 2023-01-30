import { CheckIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Web Design & Dev",
    description:
      "Blockhead Digital has a deep understanding of web design & development - we'll transform your website, your hub for all digital traffic.",
  },
  {
    name: "Social Media Management",
    description:
      "We create beautiful graphic designs for your social media accounts & have your accounts posting on a consistent basis to elevate your brand awareness.",
  },
  {
    name: "Paid Ads",
    description:
      "We run highly optimized & converting paid advertisements on platforms like Google & Facebook that generate qualified leads & sales appointments.",
  },
  {
    name: "CRM",
    description:
      "We'll create a full-fledged backend CRM for you to manage your new leads and help you convert them into high converting, qualified sales appointments!",
  },

  {
    name: "SEO",
    description:
      "We implement strategies in order to get your website ranking high on Google Search and Google Business.",
  },
  {
    name: "Branding",
    description:
      "We help you develop branding for your company! We help define branding strategy, color palette, tone of voice, typography, imagery & more!",
  },
];

export default function ExtraFeatures() {
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
