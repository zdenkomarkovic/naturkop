import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BackgroundImage from "@/components/BackgroundImage";
import Brands from "@/components/Brands";
import Partners from "@/components/Partners";
import Collaborators from "@/components/Collaborators";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Partners />
      <BackgroundImage />
      <Brands />
      <Collaborators />
    </main>
  );
}
