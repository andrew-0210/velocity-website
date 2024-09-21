import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Velocity Website",
  description: "A super CRM for powerful people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} relative subpixel-antialiased selection:bg-[#edc0ff] selection:text-[#2a2a2a]`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
