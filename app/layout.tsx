import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const pfd_font = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Text Block Ledger",
  description: "Created with innovation and disruption by Will Craig",
  icons: "favicon.ico"

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={pfd_font.className}>{children}</body>
    </html>
  );
}
