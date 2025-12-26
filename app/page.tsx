import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BackgroundImage from "@/components/BackgroundImage";
import Brands from "@/components/Brands";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <BackgroundImage />
      <Brands />
      <Partners />
    </main>
  );
}
