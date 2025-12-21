"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const products = [
  {
    name: "Džem od šljive",
    imageLarge: "/images/MK_SLJIVA_L.jpg",
    imageSmall: "/images/sljiva.jpg",
    description: "Bogat ukus zrelih šljiva, savršen za doručak ili desert",
  },
  {
    name: "Džem od višnje",
    imageLarge: "/images/MK_VISNJA_L.jpg",
    imageSmall: "/images/visnja.jpg",
    description: "Slatko-kiselkast ukus višnje koji osvaja svako nepce",
  },
  {
    name: "Džem od jagode",
    imageLarge: "/images/MK_JAGODA_L.jpg",
    imageSmall: "/images/jagoda.jpg",
    description: "Omiljeni ukus detinjstva - svež i aromatičan",
  },
  {
    name: "Džem od kajsije",
    imageLarge: "/images/MK_KAJSIJA_L.jpg",
    imageSmall: "/images/kajsija.jpg",
    description: "Zlatni ukus leta u svakoj kašici",
  },
  {
    name: "Džem od šipurka",
    imageLarge: "/images/MK_SIPURAK_L.jpg",
    imageSmall: "/images/sipurak.jpg",
    description: "Tradicionalni ukus bogat vitaminom C",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // Blokiraj scroll kada je modal otvoren
  useEffect(() => {
    if (selectedProduct !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  return (
    <section id="proizvodi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Naši proizvodi
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Svaki proizvod iz naše "Mamina kuhinja" linije nosi autentičan ukus
            domaće tradicije i prirodnu svežinu voća
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className="grid grid-cols-2 h-96 p-4 cursor-pointer"
                  onClick={() => setSelectedProduct(index)}
                >
                  <div className="relative w-full">
                    <Image
                      src={product.imageLarge}
                      alt={`${product.name} - velika tegla`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full">
                    <Image
                      src={product.imageSmall}
                      alt={`${product.name} - mala tegla`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-primary/10 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Uslužna proizvodnja (Private Label)
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Kvalitetna sirovina, kontrolisani proces proizvodnje i poštovanje
              rokova čine Naturkop pouzdanim partnerom u oblasti prerade voća —
              bilo da ste kupac, distributer ili poslovni saradnik koji traži
              siguran izvor domaćih džemova i namaza.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal za prikaz slika */}
      <AnimatePresence>
        {selectedProduct !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dugme za zatvaranje */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X size={40} />
              </button>

              {/* Naslov */}
              <h3 className="text-white text-2xl md:text-4xl font-bold mb-6 text-center">
                {products[selectedProduct].name}
              </h3>

              {/* Slike */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 md:p-8 rounded-lg">
                <div className="relative h-[50vh] md:h-[60vh] w-full">
                  <Image
                    src={products[selectedProduct].imageLarge}
                    alt={`${products[selectedProduct].name} - velika tegla`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-[50vh] md:h-[60vh] w-full">
                  <Image
                    src={products[selectedProduct].imageSmall}
                    alt={`${products[selectedProduct].name} - mala tegla`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Opis */}
              <p className="text-white text-lg md:text-xl text-center mt-6">
                {products[selectedProduct].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
