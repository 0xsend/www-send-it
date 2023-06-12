import Image from "next/image";
import SendToken from "./components/SendToken";
import SendApp from "./components/SendApp";
import { Emojis } from "./emojis";
import ScrollTo from "./components/util/ScrollTo";
import SendTokenLogo from "./components/logos/SendTokenLogo";
import ClickMeOrBounce from "./components/util/ClickMonitor";
import SendAppLogo from "./components/logos/SendAppLogo";

export default function Home() {
  return (
    <main>
      <div className="dark flex min-h-screen flex-col items-center justify-between p-8 sm:p-24 mb-24">
        <div className="">
          <div className="relative inset-0 h-100 w-100">
            <Emojis />
          </div>

          <h1 className="text-4xl sm:text-6xl mb-6 font-semibold text-left absolute left-6 top-6 p-2 bg-black bg-opacity-50 z-10">
            Send
          </h1>
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
        <div className="">
          <div className="absolute bottom-0 right-6 flex gap-4 items-center">
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://t.co/hr2OkXj0eZ"
                className=""
                title="Send Telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 hover:text-primary-500 dark:hover:text-primary-300"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M18.483 19.79v-.002l.018-.043L21.5 4.625v-.048c0-.377-.14-.706-.442-.903c-.265-.173-.57-.185-.784-.169a2.681 2.681 0 0 0-.586.12a3.23 3.23 0 0 0-.24.088l-.013.005l-16.72 6.559l-.005.002a1.353 1.353 0 0 0-.149.061a2.27 2.27 0 0 0-.341.19c-.215.148-.624.496-.555 1.048c.057.458.372.748.585.899a2.062 2.062 0 0 0 .403.22l.032.014l.01.003l.007.003l2.926.985c-.01.183.008.37.057.555l1.465 5.559a1.5 1.5 0 0 0 2.834.196l2.288-2.446l3.929 3.012l.056.024c.357.156.69.205.995.164c.305-.042.547-.17.729-.315a1.742 1.742 0 0 0 .49-.635l.008-.017l.003-.006l.001-.003ZM7.135 13.875a.3.3 0 0 1 .13-.33l9.921-6.3s.584-.355.563 0c0 0 .104.062-.209.353c-.296.277-7.071 6.818-7.757 7.48a.278.278 0 0 0-.077.136L8.6 19.434l-1.465-5.56Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://twitter.com/0xSend_" className="Send Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 hover:text-primary-500 dark:hover:text-primary-300"
                >
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center z-10 bg-black bg-opacity-50 min-h-screen">
        <div id="sendtoken" className="py-24"></div>

        <SendToken />

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

      <div className="relative flex flex-col items-center z-10 bg-black bg-opacity-50 min-h-screen">
        <div id="sendapp" className="py-24"></div>

        <SendApp />
      </div>
    </main>
  );
}
