"use client";

import Image from "next/image";

export function ScrollToSendApp({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <a
        href="#sendapp"
        className="text-xl"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("sendapp")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      >
        {children}
      </a>
    </div>
  );
}
