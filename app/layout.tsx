import classNames from "classnames";
import { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import LocalFont from "next/font/local";
import Script from "next/script";
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

const atkinson = Atkinson_Hyperlegible<"--font-atkinson">({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-atkinson",
  weight: ["400", "700"],
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
        atkinson.variable,
        markerFont.variable,
        "selection:bg-terracotta-700 selection:text-white",
      )}
    >
      <body>
        {children}
        {process.env.NODE_ENV === "production" && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "53a3a4fd0e4c41a3bd9e71b8c3453d85"}'
          />
        )}
      </body>
    </html>
  );
}
