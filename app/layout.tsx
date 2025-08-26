import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      <body className="antialiased min-h-screen flex flex-col font-helvetica">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
