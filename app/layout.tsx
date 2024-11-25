import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
// import { initializeLogRocket } from "./utils/logrocket";
// import { setupLogRocketReact } from "logrocket-react";

// initializeLogRocket()
// import LogRocket from 'logrocket';
// LogRocket.init('bqevyx/glamora');
// setupLogRocketReact(LogRocket);

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

export const metadata: Metadata = {
  title: "Glamora",
  description:
    "Glamora is a boutique offering a curated selection of unique and high-quality goods. From fashion to home decor, we have something for everyone. Shop with us today and discover the perfect item to elevate your style!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
