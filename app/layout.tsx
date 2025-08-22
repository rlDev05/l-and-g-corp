import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L&G Energy Corporation",
  description: "Professional services and solutions",
  icons: {
    icon: [
      {
        url: "/logo/l-and-g-corp-logo.jpg",
        type: "image/jpeg",
        sizes: "32x32",
      },
      {
        url: "/logo/l-and-g-corp-logo.jpg",
        type: "image/jpeg",
        sizes: "16x16",
      },
    ],
    shortcut: "/logo/l-and-g-corp-logo.jpg",
    apple: "/logo/l-and-g-corp-logo.jpg",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/l-and-g-corp-logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/logo/l-and-g-corp-logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo/l-and-g-corp-logo.jpg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
