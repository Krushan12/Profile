import type { Metadata } from "next";
import "./globals.css";

import { Inter } from 'next/font/google'
import { LenisProvider } from "@/components/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Krushant Wagh",
  description: "Portfolio Website of Krushant Wagh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo.png" />
      </head>
      <body
        className={`${inter.className} min-h-screen`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
