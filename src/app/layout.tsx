import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Bold.woff", weight: "700" },
    { path: "./fonts/Satoshi-Medium.woff", weight: "500" },
    { path: "./fonts/Satoshi-Regular.woff", weight: "400" },
  ],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Poyzeet",
  description: "Vinyl de bruit blanc",
  icons: "/simpleBlackLogo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${Satoshi.variable} antialiased bg-50`}>
        {children}</body>
    </html>
  );
}
