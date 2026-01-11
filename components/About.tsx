"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#9b7e74]/10 to-[#9b7e74]/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            O nama
          </h2>

          {/* <div className="mb-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Mamina kuhinja
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Naturkop je preduzeće za preradu voća iz Mudrakovca, koje se bavi proizvodnjom
              domaćih džemova i voćnih namaza vrhunskog kvaliteta.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Naša misija je da sačuvamo autentičan ukus domaće tradicije i da svakim proizvodom
              prenesemo prirodnu svežinu i bogatstvo voća sa naših prostora.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pod brendom <span className="font-semibold text-primary">"Mamina kuhinja"</span> stvaramo
              proizvode koji podsećaju na miris i ukus pravog doma — jednostavno, prirodno i iskreno.
            </p>
          </div> */}

          <div className="mb-12 bg-gray-50 p-8 rounded-lg text-justify">
            {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Opis preduzeća
            </h3> */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Naturkop je porodično preduzeće koje se bavi preradom voća i
              proizvodnjom prirodnih voćnih prerađevina. U našem proizvodnom
              pogonu u Mudrakovcu nastaju pažljivo pripremljeni džemovi, voćni
              namazi i drugi proizvodi od voća, koji čuvaju autentičan ukus
              domaćeg voća i tradicije.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Naš brend "Mamina kuhinja" prepoznatljiv je po kvalitetu,
              jednostavnosti i ukusu koji podseća na domaće tegle iz bakinog
              špajza.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pored sopstvene linije proizvoda, Naturkop nudi i{" "}
              <span className="font-semibold">
                uslužnu proizvodnju i pakovanje PL (private label)
              </span>{" "}
              programa za partnere koji žele sopstvenu marku voćnih proizvoda.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center border-secondary border-2 rounded-full px-4 py-10 md:py-6 shadow-lg shadow-secondary">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Kvalitetna sirovina
              </h3>
              <p className="text-gray-600">
                Pažljivo birano voće sa naših prostora
              </p>
            </div>
            <div className="text-center border-secondary border-2 rounded-full  px-4 py-10 md:py-6 shadow-lg shadow-secondary">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Kontrolisani proces
              </h3>
              <p className="text-gray-600">
                Proizvodnja uz poštovanje svih standarda
              </p>
            </div>
            <div className="text-center border-secondary border-2 rounded-full  px-4 py-10 md:py-6 shadow-lg shadow-secondary">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pouzdan partner</h3>
              <p className="text-gray-600">
                Siguran izvor domaćih džemova i namaza
              </p>
            </div>
          </div> */}

          <div className="mt-12">
            <Image
              src="/onama.jpg"
              alt="O nama"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
      {/* <svg
        viewBox="0 0 1440 90"
        className="absolute bottom-0 left-0 w-full fill-current text-[#9b7e74]/40"
      >
        <path d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,21.3C840,21,960,43,1080,53.3C1200,64,1320,64,1380,64L1440,64L1440,0L0,0Z" />
      </svg> */}
    </section>
  );
}
