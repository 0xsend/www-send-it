import "./globals.css";
import { Poppins, Inter, Source_Code_Pro } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

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
  title: "/send",
  description: "It's not the size, it's how you Send it",
  metadataBase: new URL("https://send.it/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark antialiased ${poppins.variable} ${sourceCodePro.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
