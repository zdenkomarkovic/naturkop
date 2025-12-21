import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Brands />
      <Partners />
    </main>
  );
}
