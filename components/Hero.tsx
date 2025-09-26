"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] flex items-end justify-center overflow-hidden md:pb-20 pb-10">
      {/* Pozadinska slika */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Pozadina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Sadržaj */}
      <div className="relative  container  px-4 text-left text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold md:mb-6 mb-4">
            Naturkop doo
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl md:mb-8 mb-4 font-light">
            Prerada voća i povrća
          </p>
          <p className="text-lg md:text-xl md:mb-12 mb-8 max-w-6xl md:leading-relaxed">
            Specijalizovani smo za preradu voća i povrća najvišeg kvaliteta.
            Naša firma sa dugogodišnjim iskustvom pruža najbolje proizvode iz
            Gornjeg Stupnja i Kruševca.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex  sm:flex-row gap-4 justify-start"
          >
            <a
              href="/kontakt"
              className="bg-secondary hover:bg-green-700 text-white md:px-8 px-4 md:py-4 py-1.5 rounded-full md:text-lg text-base font-semibold transition-colors duration-300"
            >
              Kontaktirajte nas
            </a>
            <a
              href="#o-nama"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 md:px-8 px-4 md:py-4 py-1.5 rounded-full md:text-lg text-base font-semibold transition-colors duration-300"
            >
              Saznajte više
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indikator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
