import Image from "next/image";
import SendToken from "./components/SendToken";
import SendApp from "./components/SendApp";
import { Emojis } from "./emojis";
import ScrollTo from "./components/util/ScrollTo";
import SendTokenLogo from "./components/logos/SendTokenLogo";
import ClickMeOrBounce from "./components/util/ClickMonitor";
import SendAppLogo from "./components/logos/SendAppLogo";
import SendLogo from "./components/logos/SendLogo";
import SendTimeline from "./components/SendTimeline";
import SendLinks from "./components/SendLinks";
import { getTokenAmounts } from "@/lib/getTokenAmounts";

// should prob be in a util file
const SendArrowDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2V4zM7 14v2h2v-2H7zm0 0v-2H5v2h2zm10 0v2h-2v-2h2zm0 0v-2h2v2h-2z"
    />
  </svg>
);

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const data = await getTokenAmounts();

  return (
    <main>
      <div className="absolute p-6 bg-black bg-opacity-50 z-10 flex justify-between items-center w-full">
        <a
          href="/"
          title="Send"
          className="flex flex-col group hover:fill-primary-500"
        >
          <SendLogo />
        </a>

        <a
          href="https://info.send.it"
          title="Send Info"
          className="hover:text-primary text-xl"
        >
          Info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="inline-block ml-2 h-8 w-8"
          >
            <path
              fill="currentColor"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
            />
          </svg>
        </a>
      </div>
      <div className="dark flex min-h-screen flex-col items-center justify-between p-8 sm:p-24 mb-24">
        <div className="w-full">
          <div className="relative inset-0 h-100 w-100">
            <Emojis />
          </div>
        </div>

        <div className="relative flex flex-col h-full">
          {/* <div className=" before:absolute before:h-[500px] before:w-[780px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[560px] after:w-[540px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[490px]" /> */}
          <div className="w-full md:max-w-md bg-black bg-opacity-50 justify-center flex flex-col gap-2">
            <ClickMeOrBounce>
              <ScrollTo id="sendtoken">
                <div className="group text-center font-thin group flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                  <SendTokenLogo />
                  <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out absolute bottom-4">
                    <p className="text-xs font-thin text-primary">send it</p>
                  </div>
                </div>
              </ScrollTo>
            </ClickMeOrBounce>

            <p className="font-thin font-sans ">
              it&apos;s not the size, it&apos;s how you send it
            </p>

            <ClickMeOrBounce>
              <ScrollTo id="sendapp">
                <div className="group text-center font-thin group flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                  <SendAppLogo />
                  <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out absolute bottom-4">
                    <p className="text-xs font-thin text-white">send it</p>
                  </div>
                </div>
              </ScrollTo>
            </ClickMeOrBounce>
          </div>
        </div>

        <div className="relative bottom-16 sm:bottom-0">
          <ClickMeOrBounce>
            <ScrollTo id="sendhappenings">
              <SendArrowDown />
            </ScrollTo>
          </ClickMeOrBounce>
        </div>
      </div>

      {/* Send Happenings */}
      <div className="relative flex flex-col items-center z-10 bg-black bg-opacity-50 min-h-screen">
        <div id="sendhappenings" className="py-24"></div>

        <SendTimeline />
      </div>

      <div className="flex flex-col w-full items-center mt-24">
        <ClickMeOrBounce>
          <ScrollTo id="sendtoken">
            <SendArrowDown />
          </ScrollTo>
        </ClickMeOrBounce>
      </div>

      {/* Send Token */}
      <div className="relative flex flex-col items-center z-10 bg-black bg-opacity-50 min-h-screen">
        <div id="sendtoken" className="py-24"></div>

        <SendToken total={data?.total} circulating={data?.circulating} />

        <div className="pt-24" />

        <ClickMeOrBounce>
          <ScrollTo id="sendapp">
            <div className="group text-center font-thin group flex flex-col items-center justify-center transform transition-transform hover:scale-110">
              <SendAppLogo />
              <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out absolute bottom-4">
                <p className="text-xs font-thin text-white">send it</p>
              </div>
            </div>
          </ScrollTo>
        </ClickMeOrBounce>
      </div>

      {/* Send App */}
      <div className="relative flex flex-col items-center z-10 bg-black bg-opacity-50 min-h-screen">
        <div id="sendapp" className="py-24"></div>

        <SendApp />
      </div>

      <SendLinks />

      {/* Footer */}
      <footer className="">
        <div className="max-w-7xl min-w-[320px] mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="mx-2 md:-mx-5 -my-2 flex flex-wrap"
            aria-label="Footer"
          >
            <a href="mailto:send@send.it">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 mr-2"
              >
                <path
                  fill="currentColor"
                  d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31M5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4v1.5M3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1Z"
                />
              </svg>
              send@send.it
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
