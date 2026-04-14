import type { Metadata } from "next";
import { Vollkorn, Manrope, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const vollkorn = Vollkorn({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abstract Manwear — Men's Underwear Manufactory",
  description:
    "A specialist manufactory producing men's essential underwear for international brands and wholesalers. OEM, ODM, and private label, from Shenzhen.",
  openGraph: {
    title: "Abstract Manwear",
    description:
      "Men's underwear manufactory. OEM, ODM, Private Label. Shenzhen, China.",
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
    <html
      lang="en"
      className={`${vollkorn.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
