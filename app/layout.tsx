import { Analytics } from "@vercel/analytics/react";
import classNames from "clsx";
import { Metadata } from "next";
import { Manrope } from "next/font/google";
import LocalFont from "next/font/local";
import "styles/global.css";

export const metadata: Metadata = {
  title: "Sawyer Hollenshead",
  description: "Frontend developer and UX designer",
  icons: ["/favicon.png"],
};

// https://shantellsans.com
const markerFont = LocalFont({
  src: "../public/fonts/shantell-sans/normal-light.woff2",
  variable: "--font-marker",
});

const manrope = Manrope<"--font-manrope">({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-manrope",
  weight: ["500", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        manrope.variable,
        markerFont.variable,
        "selection:bg-terracotta-700 selection:text-white",
      )}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
