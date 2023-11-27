import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Snip Url",
  description: "A next generation url shortener",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} flex min-h-screen flex-col`}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <Header />
          <div className="flex-1 border-2 border-red-100">{children}</div>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
