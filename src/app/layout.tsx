import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/libs/utils";

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
      <body className={cn("font-sans flex flex-col min-h-screen", inter.variable)}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
