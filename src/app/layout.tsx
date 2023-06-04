import "./globals.css";
import { Poppins, Source_Code_Pro } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-source-code-pro",
});

export const metadata = {
  title: "Send",
  description: "It's not the size, it's how you Send it",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${poppins.variable} ${sourceCodePro.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
