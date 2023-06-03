"use client";

import { ReactElement, useEffect, useState } from "react";
import tailwindConfig from "../../tailwind.config.js";

type EmojiContent = string | ReactElement;

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

const emojis: EmojiContent[] = [
  "💸",
  "💵",
  "💰",
  "🤑",
  "🏧",
  "💳",
  "🏦",
  "🎉",
  "🙏",
  "🤝",
  "👍",
  "🚀",
  "⭐",
  "🎁",
  "🔥",
  "💎",
  "🍕",
  "🍆",
  "🍑",
  "🍺",
  "🍻",
  "🍾",
  "F***ing Send it!",
  "Cha-ching!",
  "Price is right!",
  "Cash flow!",
  "Money moves!",
  "Making it rain!",
  "Pay day!",
  "Dollar bills!",
  "In the bank!",
  "Show me the money!",
  "Straight cash!",
  "Fast cash!",
  "Money talks!",
  "Raking it in!",
  "Cashing out!",
  "Stacks on stacks!",
  "Money on my mind!",
  "All about the Benjamins!",
  "Bling bling!",
  "Ka-ching!",
  ethLogo,
  ethLogo,
  ethLogo,
  ethLogo,
  ethLogo,
  ethLogo,
  ethLogo,
  ethLogo,
];

const colors = tailwindConfig.emojiColors;

const getRandomContent = () =>
  emojis[Math.floor(Math.random() * emojis.length)];
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
