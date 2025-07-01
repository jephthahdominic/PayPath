import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";

export const metadata: Metadata = {
  title: "Paypath",
  description: "A financial tool for transferring, recieving and budgetting money in fiat and crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
