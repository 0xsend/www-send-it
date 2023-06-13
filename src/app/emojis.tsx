"use client";

import { ReactElement, useEffect, useState } from "react";
import tailwindConfig from "../../tailwind.config.js";
import SendAppLogo from "./components/logos/SendAppLogo";
import SendTokenLogo from "./components/logos/SendTokenLogo";
import SendLogo from "./components/logos/SendLogo";

type EmojiContent = string | ReactElement;

const sendLogo = <SendLogo className="w-16" />;

const sendAppLogo = <SendAppLogo className="w-16 h-16" />;

const sendTokenLogo = <SendTokenLogo className="w-16 h-16" />;

const ethLogo = (
  <svg viewBox="0 0 115 182" className="w-6">
    <path
      d="M57.5054 181V135.84L1.64064 103.171L57.5054 181Z"
      fill="#F0CDC2"
      stroke="#1616B4"
      strokeLinejoin="round"
    ></path>
    <path
      d="M57.6906 181V135.84L113.555 103.171L57.6906 181Z"
      fill="#C9B3F5"
      stroke="#1616B4"
      strokeLinejoin="round"
    ></path>
    <path
      d="M57.5055 124.615V66.9786L1 92.2811L57.5055 124.615Z"
      fill="#88AAF1"
      stroke="#1616B4"
      strokeLinejoin="round"
    ></path>
    <path
      d="M57.6903 124.615V66.9786L114.196 92.2811L57.6903 124.615Z"
      fill="#C9B3F5"
      stroke="#1616B4"
      strokeLinejoin="round"
    ></path>
    <path
      d="M1.00006 92.2811L57.5054 1V66.9786L1.00006 92.2811Z"
      fill="#F0CDC2"
      stroke="#1616B4"
      strokeLinejoin="round"
    ></path>
    <path
      d="M114.196 92.2811L57.6906 1V66.9786L114.196 92.2811Z"
      fill="#B8FAF6"
      stroke="#1616B4"
      strokeLinejoin="round"
    ></path>
  </svg>
) as ReactElement;

const emojis = [
  "📈",
  "💵",
  "💰",
  "🤑",
  "👑",
  "💳",
  "🏦",
  "🧧",
  "📱",
  "💴",
  "🚀",
  "🧑‍🍳",
  "💋",
  "🔥",
  "💎",
  "🌕",
  "🧠",
  "🏝️",
  "🔑",
  "💯",
  "💹",
  "⬆️",
  "🔜",
  "🆙",
];

const phrases: EmojiContent[] = [
  ...emojis, // more emojissss
  ...emojis, // more emojissss
  ...emojis, // more emojissss
  "Send it!",
  "Cha-ching!",
  "Price is right!",
  "Crypto Queen!",
  "1 $SEND = 1 $SEND",
  "Makin it rain!",
  "Pay day!",
  "Green Only",
  "Get that bread",
  "All in",
  "Straight crypto!",
  "Crypto King",
  "$Eth talks",
  "Raking it in!",
  "Cashin out!",
  "Stacks on stacks!",
  "Crypto on my mind",
  "Ultra-sound money!",
  "Bling bling!",
  "Cha-ching!",
  "To da moon",
  "Up only",
  "Big green dildo",
  "Future of France",
  "Full Send",
  "Respect the pamp",
  "Funds are safu",
  "Hodl",
  "Sedn",
  "Buidl",
  "wagmi",
  "wagsi (we all gonna Send it)",
  "Send fren",
  "Send to me web3",
  "wen Send",
  "Send it like kek-ham",
  "pamp it",
  "Load the pump",
  "F*ck fiat",
  "Whales are watching",
  "Fill your bags",
  "Shill your bags",
  "Wen moon",
  "Wen binance",
  "JEETS",
  "Printer go brrrrr",
  "Send me daddy",
  "Don't pay it, Send it",
  "why lend when you can Send",
  "Smol Send, big Send, just Send",
  "Giga-Send",
  "F*** Ben, Send to a fren",
  "It's not the size it's how you Send it",
  ...Array(30).fill(ethLogo), // Add f-ton eth logos
  ...Array(20).fill(sendAppLogo),
  ...Array(20).fill(sendTokenLogo),
  ...Array(20).fill(sendLogo),
];

const colors = tailwindConfig.emojiColors;

const getRandomContent = () =>
  phrases[Math.floor(Math.random() * phrases.length)];
const getRandomDuration = () => Math.random() * 10 + 7; // Random duration between 7 and 17 seconds
const getRandomLeftPosition = () => Math.random() * 90 + 5; // Random left position between 5 and 95%
const getRandomRotation = () => Math.random() * 60 - 30; // Random rotation between -50 and 50 degrees
const getFontSize = (emoji: EmojiContent) =>
  emoji.toString().length > 2 ? "1rem" : "2rem";
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

type EmojiState = {
  id: number;
  content: EmojiContent;
  left: number;
  rotation: number;
  color: string;
  duration: number;
  started: number;
};

type EmojiProps = {
  content: EmojiContent;
  left: number;
  rotation: number;
  color: string;
  duration: number;
};

const Emoji = ({
  content: emoji,
  left,
  rotation,
  color,
  duration,
}: EmojiProps) => {
  const fontSize = getFontSize(emoji);
  return (
    <div
      className={`cursor-pointer`}
      onClick={(e) => {
        e.currentTarget.firstElementChild?.classList.add("animate-spin");
      }}
      style={{
        position: "fixed",
        top: -70,
        left: `${left}%`,
        animation: `float ${duration}s linear`,
        fontSize,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center bottom",
      }}
    >
      <div className={color}>{emoji}</div>
    </div>
  );
};

export const Emojis = () => {
  const [emojis, setEmojis] = useState<EmojiState[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!started) {
        setStarted(true);
      }
      setEmojis((prevEmojis) => [
        // ...prevEmojis,
        ...prevEmojis.filter(
          (emoji) => Date.now() - emoji.started < emoji.duration * 1000
        ),
        {
          id: Math.random(), // Unique id for key prop
          content: getRandomContent(),
          left: getRandomLeftPosition(),
          rotation: getRandomRotation(),
          color: getRandomColor(),
          duration: getRandomDuration(),
          started: Date.now(),
        },
      ]);
    }, 1000); // New emoji every second

    return () => clearInterval(interval);
  }, [started]);

  useEffect(() => {
    if (!started) {
      const timeout = setTimeout(() => {
        setStarted(true);
      }, 1200); // Start after 1.2 second
      return () => clearTimeout(timeout);
    }
  }, [started]);

  return (
    <>
      {emojis.map(({ id, content, left, rotation, color, duration }) => (
        <Emoji
          key={id}
          content={content}
          left={left}
          rotation={rotation}
          color={color}
          duration={duration}
        />
      ))}
    </>
  );
};
