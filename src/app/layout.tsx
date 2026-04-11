import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abstract Manwear | Premium Men's Underwear",
  description:
    "Premium men's underwear crafted with cutting-edge fabrics and minimalist design. Engineered for the modern man. Comfort Beyond Skin.",
  keywords: [
    "men's underwear",
    "premium underwear",
    "modal underwear",
    "boxer briefs",
    "men's briefs",
    "comfortable underwear",
  ],
  openGraph: {
    title: "Abstract Manwear | Premium Men's Underwear",
    description:
      "Premium men's underwear crafted with cutting-edge fabrics and minimalist design.",
    url: "https://abstractmanwear.com",
    siteName: "Abstract Manwear",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
