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

export default function Home() {
  return (
    <main>
      <div className="dark flex min-h-screen flex-col items-center justify-between p-8 sm:p-24 mb-24">
        <div className="">
          <div className="relative inset-0 h-100 w-100">
            <Emojis />
          </div>

          <a href="/" title="Send">
            <h1 className="text-4xl sm:text-6xl mb-6 font-semibold text-left absolute left-6 top-6 p-2 bg-black bg-opacity-50 z-10">
              <SendLogo />
              <span className="sr-only">Send</span>
            </h1>
          </a>
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

      <div className="relative z-10">
        <div className="fixed bottom-0 right-6 flex gap-4 items-center z-100">
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://go.send.it/tg" className="" title="Send Telegram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-12 md:h-12 hover:text-primary-500 dark:hover:text-primary-300"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M18.483 19.79v-.002l.018-.043L21.5 4.625v-.048c0-.377-.14-.706-.442-.903c-.265-.173-.57-.185-.784-.169a2.681 2.681 0 0 0-.586.12a3.23 3.23 0 0 0-.24.088l-.013.005l-16.72 6.559l-.005.002a1.353 1.353 0 0 0-.149.061a2.27 2.27 0 0 0-.341.19c-.215.148-.624.496-.555 1.048c.057.458.372.748.585.899a2.062 2.062 0 0 0 .403.22l.032.014l.01.003l.007.003l2.926.985c-.01.183.008.37.057.555l1.465 5.559a1.5 1.5 0 0 0 2.834.196l2.288-2.446l3.929 3.012l.056.024c.357.156.69.205.995.164c.305-.042.547-.17.729-.315a1.742 1.742 0 0 0 .49-.635l.008-.017l.003-.006l.001-.003ZM7.135 13.875a.3.3 0 0 1 .13-.33l9.921-6.3s.584-.355.563 0c0 0 .104.062-.209.353c-.296.277-7.071 6.818-7.757 7.48a.278.278 0 0 0-.077.136L8.6 19.434l-1.465-5.56Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="https://twitter.com/sendit_eth" title="Send Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-12 md:h-12 hover:text-primary-500 dark:hover:text-primary-300"
              >
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                />
              </svg>
            </a>
            <a href="https://go.send.it/cg" title="Send Token CoinGecko">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 286 286"
                className="w-8 h-8 md:w-12 md:h-12 hover:text-primary-500 dark:hover:text-primary-300"
              >
                <g id="Coin_Gecko_AI">
                  <g>
                    <g id="XMLID_00000109714536317397490150000016779953084460001213_">
                      <path
                        fill="currentColor"
                        d="M181.06,84.79c-0.32-0.93-0.68-1.81-1.1-2.64C180.52,83.09,180.88,83.98,181.06,84.79z"
                      />
                    </g>
                    <g id="XMLID_00000078027483154438176710000012863250752772532919_">
                      <g id="XMLID_00000155833996814241537590000005311418052219229083_">
                        <g>
                          <path
                            fill="currentColor"
                            d="M142.85-0.49C63.6-0.13-0.35,64.39,0,143.65c0.36,79.25,64.9,143.2,144.14,142.85
						c79.25-0.36,143.2-64.89,142.85-144.13C286.63,63.11,222.1-0.84,142.85-0.49z M124.68,135.96c-14.17,0-25.66-11.48-25.66-25.65
						c0-14.16,11.49-25.65,25.66-25.65c14.16,0,25.65,11.49,25.65,25.65C150.34,124.48,138.85,135.96,124.68,135.96z M145.14,163.7
						l0.13-0.16l0.14-0.16c7.32,4.72,15.68,6.39,24.03,6.63c8.36,0.22,16.88-0.41,25.26-2.1c8.37-1.74,16.6-4.31,24.55-7.59
						c4.46-1.84,8.9-3.85,13.13-6.21c0.03-0.02,0.05-0.03,0.08-0.05c2.63-1.58,5.2-3.25,7.73-4.97c0.55-0.39,1.08-0.8,1.6-1.22
						l0.06,0.07l0.22,0.26c-6.45,5.87-14.13,10.23-21.95,14.08c-7.9,3.72-16.14,6.77-24.65,8.97c-8.48,2.19-17.33,3.85-26.29,3.03
						C160.37,173.49,151.08,170.4,145.14,163.7z M210.98,135.96c-0.01-3.08,2.47-5.56,5.53-5.59c3.08-0.01,5.56,2.46,5.59,5.53
						c0.01,3.07-2.47,5.58-5.53,5.59C213.5,141.51,211,139.03,210.98,135.96z M167.03,273.59c-5.54-38.83,28.37-76.86,47.49-96.32
						c4.34-4.41,11.05-10.49,17.29-16.95c24.82-23.21,29.76-50.94-21.04-64.8c-9.63-2.79-19.61-6.74-29.72-10.73
						c-0.32-0.93-0.68-1.81-1.1-2.64c-1.16-2-3.19-4.3-6.26-6.91c-6.6-5.73-19.01-5.58-29.72-3.04
						c-11.84-2.79-23.52-3.78-34.75-1.09C60.1,84.64,52.2,108.6,50.29,137.47c-2.6,31.2-4.12,54.45-15.93,81.01
						c-14.74-21.26-23.43-47.05-23.55-74.88C10.48,70.32,69.62,10.65,142.9,10.32S275.85,69.12,276.18,142.4
						C276.48,207.85,229.31,262.46,167.03,273.59z"
                          />
                        </g>
                      </g>
                      <path
                        id="XMLID_00000036209898089073278220000000037352250193229441_"
                        fill="currentColor"
                        d="M142.72,110.55
				c0,9.97-8.08,18.04-18.04,18.04c-9.97,0-18.05-8.07-18.05-18.04s8.08-18.04,18.05-18.04C134.64,92.5,142.72,100.58,142.72,110.55
				z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a href="https://go.send.it/etherscan" title="Send Token Etherscan">
              <svg
                viewBox="0 0 123 123"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 md:w-12 md:h-12 hover:text-primary-500 dark:hover:text-primary-300"
              >
                <g clip-path="url(#clip0_3340_1163)">
                  <mask
                    id="mask0_3340_1163"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="535"
                    height="123"
                  >
                    <path d="M534.515 0H0V122.14H534.515V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_3340_1163)">
                    <path
                      d="M25.79 58.4149C25.7901 57.7357 25.9244 57.0633 26.1851 56.4361C26.4458 55.809 26.8278 55.2396 27.3092 54.7605C27.7907 54.2814 28.3619 53.9021 28.9903 53.6444C29.6187 53.3867 30.2918 53.2557 30.971 53.2589L39.561 53.2869C40.9305 53.2869 42.244 53.831 43.2124 54.7994C44.1809 55.7678 44.725 57.0813 44.725 58.4509V90.9309C45.692 90.6439 46.934 90.3379 48.293 90.0179C49.237 89.7962 50.0783 89.262 50.6805 88.5019C51.2826 87.7418 51.6102 86.8006 51.61 85.8309V45.5409C51.61 44.1712 52.154 42.8576 53.1224 41.889C54.0908 40.9204 55.4043 40.3762 56.774 40.3759H65.381C66.7506 40.3762 68.0641 40.9204 69.0325 41.889C70.0009 42.8576 70.545 44.1712 70.545 45.5409V82.9339C70.545 82.9339 72.7 82.0619 74.799 81.1759C75.5787 80.8462 76.2441 80.2941 76.7122 79.5886C77.1803 78.8832 77.4302 78.0555 77.431 77.2089V32.6309C77.431 31.2615 77.9749 29.9481 78.9431 28.9797C79.9113 28.0113 81.2245 27.4672 82.5939 27.4669H91.201C92.5706 27.4669 93.884 28.0109 94.8525 28.9794C95.8209 29.9478 96.365 31.2613 96.365 32.6309V69.3399C103.827 63.9319 111.389 57.4279 117.39 49.6069C118.261 48.4717 118.837 47.1386 119.067 45.7267C119.297 44.3148 119.174 42.8678 118.709 41.5149C115.931 33.5227 111.516 26.1983 105.745 20.0105C99.974 13.8228 92.9749 8.90785 85.1955 5.58032C77.4161 2.2528 69.0277 0.585938 60.5671 0.686416C52.1065 0.786893 43.7601 2.6525 36.062 6.16383C28.3638 9.67517 21.4834 14.7549 15.8611 21.078C10.2388 27.401 5.99842 34.8282 3.41131 42.8842C0.824207 50.9401 -0.0526487 59.4474 0.836851 67.8617C1.72635 76.276 4.36263 84.4119 8.57696 91.7489C9.31111 93.0145 10.3912 94.0444 11.6903 94.7175C12.9894 95.3906 14.4536 95.679 15.911 95.5489C17.539 95.4059 19.566 95.2029 21.976 94.9199C23.0251 94.8008 23.9937 94.2999 24.6972 93.5126C25.4008 92.7253 25.7901 91.7067 25.791 90.6509L25.79 58.4149Z"
                      fill="currentColor"
                    />
                    <path
                      d="M25.6021 110.51C34.6744 117.11 45.3959 121.072 56.5802 121.957C67.7646 122.841 78.9757 120.615 88.9731 115.523C98.9705 110.431 107.364 102.673 113.226 93.1068C119.087 83.5405 122.188 72.539 122.185 61.3197C122.185 59.9197 122.12 58.5347 122.027 57.1577C99.808 90.2957 58.7831 105.788 25.604 110.505"
                      fill="currentColor"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3340_1163">
                    <rect width="535" height="123" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
