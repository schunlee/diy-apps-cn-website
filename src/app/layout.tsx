import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { fonts } from "./fonts";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIY Food Games",
  description: "apps of DIY Food Games studio, enjoy our games ^_^",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
