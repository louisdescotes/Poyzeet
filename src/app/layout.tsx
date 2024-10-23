"use client"

import localFont from "next/font/local";
import "./globals.css";
import { useOpenMenu } from "@/store";
import { HeadMetadata } from "./headMetadate";


const Satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Bold.woff", weight: "700" },
    { path: "./fonts/Satoshi-Medium.woff", weight: "500" },
    { path: "./fonts/Satoshi-Regular.woff", weight: "400" },
  ],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen } = useOpenMenu();

  return (
    <html lang="fr">
      <HeadMetadata />
      <body className={`${Satoshi.variable} antialiased bg-50 ${isOpen ? "overflow-hidden" : "overflow-auto"}`}>
        {children}
      </body>
    </html>
  );
}
