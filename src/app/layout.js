import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Next Shop",
  description: "Created By Arzoo Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="min-h-[calc(100vh-245px)] w-11/12 mt-26 mb-8 shadow-2xl   mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
