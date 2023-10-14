import { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import localFont from "next/font/local";
import "../global.css";

export const metadata: Metadata = {
  title: "Sawyer Hollenshead",
  description: "Designer and frontend developer",
  icons: ["/favicon.png"],
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
