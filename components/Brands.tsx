"use client";
import { motion } from "framer-motion";

export default function Brands() {
  return (
    <section id="robne-marke" className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mamina kuhinja */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Mamina kuhinja
                </h3>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Naš flagship brend koji predstavlja srce i dušu tradicionalne
                domaće proizvodnje. Svaki proizvod pod ovom markom nosi
                autentičan ukus koji podseća na bakine recepte i miris domaće
                kuhinje.
              </p>
              <p className="text-gray-600">
                Džemovi i voćni namazi koji čuvaju prirodnu svežinu i bogatstvo
                domaćeg voća.
              </p>
            </motion.div>

            {/* Private Label */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-secondary mb-4">
                  Private Label Program
                </h3>
                <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nudimo kompletnu uslugu proizvodnje i pakovanja za partnere koji
                žele razviti sopstvenu robnu marku voćnih proizvoda.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Kvalitetna sirovina i kontrolisan proces
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Pakovanje prema vašim specifikacijama
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Poštovanje rokova i profesionalna podrška
                </li>
              </ul>
            </motion.div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Zainteresovani za saradnju?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Kontaktirajte nas za više informacija o našem Private Label
              programu
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
            >
              Pošaljite upit
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
