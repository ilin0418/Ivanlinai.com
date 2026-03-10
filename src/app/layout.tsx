import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/StarBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Ivan Lin",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} min-h-screen overflow-y-auto sm:h-screen sm:overflow-hidden pl-0 pr-0 pt-8 sm:pt-12 pb-2 mx-5 sm:mx-10 lg:mx-24 flex justify-center`}
      >
        <StarBackground />
        {children}
      </body>
    </html>
  );
}
