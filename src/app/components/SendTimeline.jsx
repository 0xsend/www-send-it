import { useId } from "react";
import clsx from "clsx";
import { StarField } from "./timeline/StarField";
import FormattedDate from "./util/FormattedDate";

function Timeline() {
  let id = useId();

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
      <svg
        className="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0"
        aria-hidden="true"
      >
        <defs>
          <pattern id={id} width="6" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M0 0H6M0 8H6"
              className="stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

function FixedSidebar({ main, footer }) {
  return (
    <div className="w-full relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:absolute lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <Glow />
      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
            <div className="relative">
              <StarField />
              {main}
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}

function Glow() {
  let id = useId();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
      <svg
        className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem] rounded-l-lg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${id}-desktop`} cx="100%">
            <stop offset="0%" stopColor="rgba(191, 159, 255, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
          <radialGradient id={`${id}-mobile`} cy="100%">
            <stop offset="0%" stopColor="rgba(191, 159, 255, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-desktop)`}
          className="hidden lg:block"
        />
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-mobile)`}
          className="lg:hidden"
        />
      </svg>
      <div className="bg-gradient-to-br  from-black to-transparent  absolute inset-0 h-24 w-full left-0 right-0" />
      <div className="bg-gradient-to-tr  from-black to-transparent  absolute bottom-0 h-36 w-full left-0 right-0" />

      <div className="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px" />
    </div>
  );
}

function ContentWrapper({ className, children }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
        <div
          className={clsx(
            "mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

const happenings = [
  // Token Launch - Ongoing
  {
    title: "Token Launch",
    date: "Ongoing",
    description: "Soon",
  },
  // Send.it acquisition - June 9th
  {
    title: "Send.it acquisition",
    date: "June 9th",
    description: "Domain name acquired.",
  },
  // 200 eth contributed - June 8th
  {
    title: "200 eth contributed",
    date: "June 8th",
    description: "200 eth contributed to the Send treasury.",
  },
  // 4/7 Multisig Setup - May 10th
  {
    title: "4/7 Multisig Setup",
    date: "May 10th",
    description: "4/7 multisig setup with Gnosis Safe.",
  },
];

const Happening = ({ title, date, description }) => (
  <article className="scroll-mt-16">
    <div>
      <header className="relative mb-10 xl:mb-0">
        <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
          <div className="inline-flex">
            {/* <FormattedDate
              date={date}
              className="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
            /> */}
            <div className="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50">
              {date}
            </div>
          </div>
          <div className="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300" />
        </div>
        <ContentWrapper>
          <div className="flex">
            <div className="inline-flex">
              {/* <FormattedDate
                    date={date}
                    className="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden"
                  /> */}
              <div className="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden">
                {date}
              </div>
            </div>
          </div>
        </ContentWrapper>
      </header>
      <ContentWrapper className="typography min-h-16">
        <h2 className="text-2xl/2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>

        {/* {description} */}
      </ContentWrapper>
    </div>
  </article>
);

export default function SendTimeline() {
  return (
    <>
      <FixedSidebar
        main={<div className="h-24"></div>}
        footer={<div className="h-24"></div>}
      />
      <div className="relative w-full">
        <Timeline />
        <main className="space-y-20 py-20 sm:space-y-32 sm:py-32 w-full">
          {happenings.map((happening) => (
            <Happening key={happening.title} {...happening} />
          ))}
        </main>
      </div>
    </>
  );
}
