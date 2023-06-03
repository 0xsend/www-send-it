"use client";

import { useEffect, useState } from "react";
import tailwindConfig from "../../tailwind.config.js";

const emojis = [
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
  "Send it!",
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
];

const colors = tailwindConfig.emojiColors;

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
const getRandomDuration = () => Math.random() * 5 + 5; // Random duration between 5 and 10 seconds
const getRandomLeftPosition = () => Math.random() * 70 + 10; // Random left position between 10 and 80%
const getRandomRotation = () => Math.random() * 100 - 50; // Random rotation between -50 and 50 degrees
const getFontSize = (emoji: string) => (emoji.length > 2 ? "1rem" : "2rem");
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

type EmojiState = {
  id: number;
  emoji: string;
  left: number;
  rotation: number;
  color: string;
  duration: number;
  started: number;
};

type EmojiProps = {
  emoji: string;
  left: number;
  rotation: number;
  color: string;
  duration: number;
};

const Emoji = ({ emoji, left, rotation, color, duration }: EmojiProps) => {
  const fontSize = getFontSize(emoji);
  return (
    <div
      className={`cursor-pointer`}
      onClick={(e) => {
        e.currentTarget.firstElementChild?.classList.add("animate-spin");
      }}
      style={{
        position: "fixed",
        top: -50,
        left: `${left}%`,
        animation: `float ${duration}s linear`,
        fontSize,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center bottom",
      }}
    >
      <span className={color}>{emoji}</span>
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
          emoji: getRandomEmoji(),
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
      {emojis.map(({ id, emoji, left, rotation, color, duration }) => (
        <Emoji
          key={id}
          emoji={emoji}
          left={left}
          rotation={rotation}
          color={color}
          duration={duration}
        />
      ))}
    </>
  );
};
