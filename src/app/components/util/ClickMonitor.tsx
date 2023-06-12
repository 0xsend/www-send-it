"use client";
import { useEffect, useState } from "react";

function ClickMeOrBounce({ children }: { children: React.ReactNode }) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={() => setAnimate(true)}
      className={animate ? "" : "animate-pulse"}
    >
      {children}
    </div>
  );
}

export default ClickMeOrBounce;
