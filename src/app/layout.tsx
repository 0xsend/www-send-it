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
  title: "Send App - Pay and Get Paid with Crypto",
  description:
    "Crypto Simplified: Pay and Get Paid with Send App. Send and receive crypto instantly with just a phone number.",
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
