export default function CTA() {
  return (
    <div className="bg-rose-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          <span className="block uppercase">
            Ready to elevate your business?
          </span>
          <span className="block text-rose-500 uppercase">Start today!</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex shadow">
            <a
              href="#form"
              className="rounded-md transition-all inline-block bg-rose-500 px-4 py-2 font-semibold text-base  leading-7 text-white shadow-sm ring-1 ring-rose-500 hover:bg-rose-700 hover:ring-rose-700 lg:text-xl"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
