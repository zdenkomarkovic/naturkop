import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BackgroundImage from "@/components/BackgroundImage";
import Brands from "@/components/Brands";
import Partners from "@/components/Partners";
import Collaborators from "@/components/Collaborators";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Naturkop doo - Mamina kuhinja",
  description:
    "Naturkop doo je porodično preduzeće koje proizvodi domaće džemove i voćne namaze pod brendom Mamina kuhinja, bez veštačkih boja i aroma.",
  url: "https://www.naturkop.rs",
  logo: "https://www.naturkop.rs/naturkopfooter.png",
  image: "https://www.naturkop.rs/onama.jpg",
  email: "naturkopdoo@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Istočna 8",
    addressLocality: "Kruševac-Mudrakovac",
    postalCode: "37000",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.5456,
    longitude: 21.3305,
  },
  sameAs: ["https://www.naturkop.rs"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mamina kuhinja — džemovi i voćni namazi",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Džem od šljive" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Džem od višnje" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Džem od jagode" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Džem od kajsije" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Džem od šipka" } },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />

      {/* Nepravilan divider */}
      <svg
        viewBox="0 0 1440 120"
        className="w-full"
        preserveAspectRatio="none"
        style={{ display: "block", verticalAlign: "bottom" }}
      >
        <path
          className="fill-current text-[#9b7e74]/40"
          d="M0,50 C150,80 250,20 400,45 C550,70 650,30 800,55 C950,80 1100,25 1250,50 C1350,65 1400,40 1440,60 L1440,0 L0,0 Z"
        />
        <path
          className="fill-current text-[#9b7e74]/10"
          d="M0,50 C150,80 250,20 400,45 C550,70 650,30 800,55 C950,80 1100,25 1250,50 C1350,65 1400,40 1440,60 L1440,120 L0,120 Z"
        />
      </svg>

      <Products />
      <svg
        viewBox="0 0 1440 120"
        className="w-full"
        preserveAspectRatio="none"
        style={{ display: "block", verticalAlign: "bottom" }}
      >
        <path
          className="fill-current text-[#9b7e74]/40"
          d="M0,50 C150,80 250,20 400,45 C550,70 650,30 800,55 C950,80 1100,25 1250,50 C1350,65 1400,40 1440,60 L1440,0 L0,0 Z"
        />
        <path
          className="fill-current text-[#9b7e74]/10"
          d="M0,50 C150,80 250,20 400,45 C550,70 650,30 800,55 C950,80 1100,25 1250,50 C1350,65 1400,40 1440,60 L1440,120 L0,120 Z"
        />
      </svg>
      <Partners />
      <Collaborators />
      <BackgroundImage />
      <Brands />
      <Testimonials />
    </main>
  );
}
