import ConditionalLayout from "@/components/ConditionalLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { hasBlogPosts } from "@/lib/sanity.fetch";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Naturkop - Mamina kuhinja | Domaći džemovi i voćni namazi",
    template: "%s | Naturkop - Mamina kuhinja",
  },
  description:
    "Naturkop doo iz Mudrakovca — proizvodnja domaćih džemova i voćnih namaza pod brendom 'Mamina kuhinja'. Bez veštačkih boja i aroma. Private label program za partnere.",
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
    "džem od kajsije",
    "džem od šipka",
    "tradicionalni proizvodi",
    "domaća radinost",
    "voćne prerađevine",
  ],
  authors: [{ name: "Naturkop doo" }],
  creator: "Naturkop doo",
  publisher: "Naturkop doo",
  metadataBase: new URL("https://www.naturkop.rs"),
  alternates: {
    canonical: "https://www.naturkop.rs/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://www.naturkop.rs/",
    siteName: "Naturkop - Mamina kuhinja",
    title: "Naturkop - Mamina kuhinja | Domaći džemovi i voćni namazi",
    description:
      "Domaći džemovi i voćni namazi bez veštačkih boja i aroma. Mamina kuhinja — ukus koji budi sećanja na detinjstvo.",
    images: [
      {
        url: "/onama.jpg",
        width: 1200,
        height: 630,
        alt: "Naturkop - Mamina kuhinja domaći džemovi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naturkop - Mamina kuhinja | Domaći džemovi i voćni namazi",
    description:
      "Domaći džemovi i voćni namazi bez veštačkih boja i aroma. Mamina kuhinja — ukus koji budi sećanja na detinjstvo.",
    images: ["/onama.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showBlog = await hasBlogPosts();

  return (
    <html lang="sr" className="overflow-x-hidden">
      <body
        className={`${inter.variable} antialiased text-gray-700 bg-muted text-base md:text-xl overflow-x-hidden`}
      >
        <ConditionalLayout showBlog={showBlog}>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
