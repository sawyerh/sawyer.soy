import { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import localFont from "next/font/local";
import "../global.css";

export const metadata: Metadata = {
  title: "Sawyer Hollenshead",
  description: "Frontend developer and UX designer",
  icons: ["/favicon.png"],
  openGraph: {
    images: "/og-image.jpeg",
  },
};

// https://shantellsans.com
const markerFont = localFont({
  src: "../../public/fonts/shantell-sans/variable.woff2",
  variable: "--font-marker",
});

const sansFont = Atkinson_Hyperlegible<"--font-sans">({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

// const sansFont = Raleway<"--font-sans">({
//   subsets: ["latin"],
//   style: ["normal", "italic"],
//   variable: "--font-sans",
//   weight: ["400", "700"],
// });

// https://www.gent.media/manrope
// const sansFont = Manrope<"--font-sans">({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   weight: ["400", "700"],
// });

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
