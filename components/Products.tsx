"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Džem od šljive",
    image: "/images/MK_SLJIVA_L.jpg",
    description: "Bogat ukus zrelih šljiva, savršen za doručak ili desert",
  },
  {
    name: "Džem od višnje",
    image: "/images/MK_VISNJA_L.jpg",
    description: "Slatko-kiselkast ukus višnje koji osvaja svako nepce",
  },
  {
    name: "Džem od jagode",
    image: "/images/MK_JAGODA_L.jpg",
    description: "Omiljeni ukus detinjstva - svež i aromatičan",
  },
  {
    name: "Džem od kajsije",
    image: "/images/MK_KAJSIJA_L.jpg",
    description: "Zlatni ukus leta u svakoj kašici",
  },
  {
    name: "Džem od šipurka",
    image: "/images/MK_SIPURAK_L.jpg",
    description: "Tradicionalni ukus bogat vitaminom C",
  },
];

export default function Products() {
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
                <div className="relative h-80 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
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
              Kvalitetna sirovina, kontrolisani proces proizvodnje i poštovanje rokova čine
              Naturkop pouzdanim partnerom u oblasti prerade voća — bilo da ste kupac,
              distributer ili poslovni saradnik koji traži siguran izvor domaćih džemova i namaza.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
