import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dive Finder",
  description: "Find the best dive locations around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col dark`}
      >
        <Header />
        {/* <main className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex-1 flex flex-col items-center"> */}
        <main className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 animate-gradient-x flex-1 flex flex-col items-center">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
