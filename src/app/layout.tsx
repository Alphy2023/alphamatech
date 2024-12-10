import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
// import WOWWrapper from "@/components/wow-wrapper"

// Local font configuration
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

// Google Font configuration for Poppins
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // Ensures a fast font swap when Poppins loads
  weight: ["400", "500", "600", "700"], // Customize weights
  variable: "--font-poppins",
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Alphama Technology Solution",
  description: "Alphamatech idea transformed to solution.",
};

// RootLayout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} font-sans antialiased`}
        style={{
          fontFamily: `var(--font-poppins), var(--font-geist-sans), sans-serif`,
        }}
      >
        {/* <WOWWrapper> */}
        {children}
        {/* </WOWWrapper> */}
      </body>
    </html>
  );
}
