"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero sekcija */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kontakt
            </h1>
            <p className="text-xl md:text-2xl">
              Kontaktirajte nas za više informacija
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kontakt informacije */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informacije o firmi */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Naturkop doo
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Specijalizovani smo za preradu voća i povrća najvišeg kvaliteta. 
                  Naša firma sa dugogodišnjim iskustvom pruža najbolje proizvode 
                  iz Gornjeg Stupnja i Kruševca.
                </p>
              </div>

              {/* Adresa */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📍</span>
                  Glavna adresa
                </h3>
                <div className="text-gray-700">
                  <p className="font-semibold">Naturkop doo</p>
                  <p>Garevina bb</p>
                  <p>37234 Gornji Stupanj</p>
                </div>
              </div>

              {/* Ispostava */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">🏢</span>
                  Ispostava
                </h3>
                <div className="text-gray-700">
                  <p>Krusevac-Mudrakovac 37000</p>
                  <p>Istočna 8</p>
                </div>
              </div>

              {/* Kontakt informacije */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📞</span>
                  Kontakt
                </h3>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <span className="font-semibold">Email:</span><br />
                    <a href="mailto:naturkopdoo@gmail.com" className="text-green-600 hover:text-green-700 transition-colors">
                      naturkopdoo@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Telefon:</span><br />
                    <a href="tel:+38166224502" className="text-green-600 hover:text-green-700 transition-colors">
                      +381 66 224 502
                    </a>
                  </p>
                </div>
              </div>

              {/* Pravne informacije */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📋</span>
                  Pravne informacije
                </h3>
                <div className="text-gray-700 space-y-2">
                  <p><span className="font-semibold">PIB:</span> 106716188</p>
                  <p><span className="font-semibold">MB:</span> 20666226</p>
                </div>
              </div>
            </motion.div>

            {/* Kontakt forma */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pošaljite nam poruku
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="ime" className="block text-sm font-medium text-gray-700 mb-2">
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    id="ime"
                    name="ime"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Vaše ime i prezime"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email adresa
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="vas@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+381 66 224 502"
                  />
                </div>
                
                <div>
                  <label htmlFor="poruka" className="block text-sm font-medium text-gray-700 mb-2">
                    Poruka
                  </label>
                  <textarea
                    id="poruka"
                    name="poruka"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Vaša poruka..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Pošaljite poruku
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa sekcija */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pronađite nas
            </h2>
            <p className="text-lg text-gray-700">
              Naša lokacija u Gornjem Stupnju
            </p>
          </motion.div>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-lg">Mapa lokacije</p>
              <p className="text-sm">Garevina bb, 37234 Gornji Stupanj</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
