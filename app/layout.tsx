import { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "styles/global.css";

export const metadata: Metadata = {
  title: "Sawyer Hollenshead",
  description: "Frontend developer and UX designer",
  icons: ["/favicon.png"],
};

// https://shantellsans.com
const markerFont = localFont({
  src: "../public/fonts/shantell-sans/normal-light.woff2",
  variable: "--font-marker",
});

// const sansFont = Atkinson_Hyperlegible<"--font-sans">({
//   subsets: ["latin"],
//   style: ["normal", "italic"],
//   variable: "--font-sans",
//   weight: ["400", "700"],
// });

// const sansFont = Raleway<"--font-sans">({
//   subsets: ["latin"],
//   style: ["normal", "italic"],
//   variable: "--font-sans",
//   weight: ["400", "700"],
// });

// https://www.gent.media/manrope
const sansFont = Manrope<"--font-sans">({
  subsets: ["latin"],
  variable: "--font-sans",
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
      className={[sansFont.variable, markerFont.variable].join(" ")}
    >
      <body>{children}</body>
    </html>
  );
}
