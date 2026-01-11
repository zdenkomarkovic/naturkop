"use client";
import { motion } from "framer-motion";
import React from "react";

const BackgroundImage = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center">
      {/* Parallax pozadinska slika */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Sadržaj */}
      <div className="relative py-5 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Zašto odabrati nas?
          </h2>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Svaki naš proizvod nosi dušu domaće kuhinje i bogatstvo prirode
          </p>
        </motion.div>

        {/* Kartice */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-6 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Kvalitetna sirovina i kontrolisan proces
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-6 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            {" "}
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏭</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Pakovanje prema vašim specifikacijama
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-6 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            {" "}
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Poštovanje rokova i profesionalna podrška
            </h3>
          </motion.div>
        </div>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="text-5xl mb-4">🍓</div>
            <h3 className="text-xl font-bold mb-3">100% Prirodno</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Samo prirodni sastojci bez veštačkih aditiva i konzervansa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="text-5xl mb-4">🏡</div>
            <h3 className="text-xl font-bold mb-3">Domaća Tradicija</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Recepti zasnovani na tradicionalnim metodama pripreme
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-3">Kontrolisan Kvalitet</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Stroga kontrola kvaliteta u svakoj fazi proizvodnje
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="text-xl font-bold mb-3">Lokalna Proizvodnja</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Sveže voće iz naših krajeva za autentičan ukus
            </p>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default BackgroundImage;
