import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BackgroundImage from "@/components/BackgroundImage";
import Brands from "@/components/Brands";
import Partners from "@/components/Partners";
import Collaborators from "@/components/Collaborators";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
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
