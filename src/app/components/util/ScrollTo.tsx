"use client";

export default function ScrollTo({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <a
        href={`#${id}`}
        className="text-xl"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(id)?.scrollIntoView({
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
