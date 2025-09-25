"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="o-nama" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            O nama
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Naturkop doo je firma sa bogatom tradicijom u oblasti prerade voća i povrća. 
            Naša misija je da pružimo najkvalitetnije proizvode koji zadržavaju prirodnu 
            hranljivost i ukus svežeg voća i povrća.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prirodni proizvodi</h3>
              <p className="text-gray-600">Koristimo samo najkvalitetnije sirovine</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Moderna tehnologija</h3>
              <p className="text-gray-600">Savremeni procesi prerade i pakovanja</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kvalitet</h3>
              <p className="text-gray-600">Stroga kontrola kvaliteta u svakom koraku</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
