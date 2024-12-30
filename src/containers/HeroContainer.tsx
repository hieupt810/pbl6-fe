import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HeroContainer() {
  return (
    <div className="mx-auto max-w-screen-md pt-4 text-center sm:pt-20 lg:pt-28">
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        Discover Trending Products Across E-commerce
      </h1>

      <p className="mt-8 text-pretty text-base font-medium text-gray-500 sm:text-lg/8">
        We use AI to collect and analyze trending products from major e-commerce
        platforms. Making it easy for you to find and compare prices of the
        hottest items on the market.
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/product"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <div className="flex items-center gap-1">
            <span>Discover</span>
            <ArrowRightIcon className="size-4" />
          </div>
        </a>
      </div>
    </div>
  );
}
