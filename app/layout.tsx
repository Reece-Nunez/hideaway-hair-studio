import type { Metadata } from "next";
import { Bellefair } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: "400",
});

const glacial = localFont({
  src: [
    {
      path: "../public/GlacialIndifference-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/GlacialIndifference-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-glacial",
});

export const metadata: Metadata = {
  title: "Hideaway Hair Studio | Your Sanctuary for Beautiful Hair",
  description:
    "Hideaway Hair Studio - Where style meets self-expression. Expert cuts, color, and styling in a relaxing atmosphere. Book your appointment today.",
  keywords: ["hair studio", "haircut", "hair color", "styling", "beauty"],
  openGraph: {
    title: "Hideaway Hair Studio",
    description: "Your sanctuary for beautiful hair",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${glacial.variable} antialiased`}
        style={{ fontFamily: 'var(--font-glacial), system-ui, sans-serif' }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
