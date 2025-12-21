import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { hasBlogPosts } from "@/lib/sanity.fetch";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naturkop - Mamina kuhinja | Domaći džemovi i voćni namazi",
  description:
    "Naturkop - proizvodnja domaćih džemova i voćnih namaza pod brendom 'Mamina kuhinja'. Autentičan ukus domaće tradicije iz Mudrakovca. Private label programa.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "džem",
    "domaći džem",
    "voćni namaz",
    "Mamina kuhinja",
    "Naturkop",
    "prerada voća",
    "Mudrakovac",
    "Kruševac",
    "private label",
    "džem od šljive",
    "džem od višnje",
    "džem od jagode",
    "tradicionalni proizvodi",
  ],
  alternates: {
    canonical: "https://www.naturkop.rs/",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showBlog = await hasBlogPosts();

  return (
    <html lang="sr">
      <body
        className={`${inter.variable} antialiased text-gray-700 bg-muted text-base md:text-xl`}
      >
        <Header showBlog={showBlog} />
        {children}
        <ButtonToTop />
        <Footer showBlog={showBlog} />
      </body>
    </html>
  );
}
