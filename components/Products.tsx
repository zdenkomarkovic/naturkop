"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Nacrtani obris kajsije (krug + unutrašnji krug + listić)
function DrawnFruit({
  x,
  y,
  size = 60,
  delay = 0,
  rotate = 0,
  src = "/fruit_13534539.png",
}: {
  x: string;
  y: string;
  size?: number;
  delay?: number;
  rotate?: number;
  src?: string;
}) {
  return (
    <motion.img
      src={src}
      alt="kajsija"
      width={size}
      height={size}
      style={{ position: "absolute", left: x, top: y, rotate: `${rotate}deg`, pointerEvents: "none", zIndex: 10, objectFit: "contain", filter: "brightness(0) saturate(100%) invert(57%) sepia(24%) saturate(500%) hue-rotate(330deg) brightness(65%)" }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15, delay }}
      viewport={{ once: true, amount: 0 }}
    />
  );
}

const products = [
  {
    name: "Džem od šljive – Mamina kuhinja",
    imageLarge: "/images/MK_SLJIVA_L.jpg",
    imageSmall: "/images/sljiva.jpg",
    fruit: "/fruit_15612860.png",
    description:
      "Šljiva je uvek bila tu. Pouzdana, svoja, bez potrebe da se dokazuje. Džem od šljive Mamine kuhinje pravi se po tradicionalnoj recepturi, od biranih plodova koji daju tamnu boju i pun ukus. Bez veštačkih boja i aroma. Ovo je onaj džem koji se maže sigurno. Bez premišljanja. Znaš kakav je. I znaš da će biti dobar.",
  },
  {
    name: "Džem od višnje – Mamina kuhinja",
    imageLarge: "/images/MK_VISNJA_L.jpg",
    imageSmall: "/images/visnja.jpg",
    fruit: "/cherry_7101311.png",
    description:
      "Višnja nikada nije bila ona koja se svima dopada na prvu. Ima tu malo kiselkastog, malo ozbiljnog. I baš zato ostane. Džem od višnje Mamine kuhinje pravi se po tradicionalnoj recepturi, od zrelih plodova koji daju punu aromu i lepo izbalansiranu slatkoću. Bez veštačkih boja i aroma. Prvi zalogaj iznenadi, drugi se već traži, a treći dođe sam od sebe. Nije za svakoga. Ali ko je voli, zna zašto.",
  },
  {
    name: "Džem od jagode – Mamina kuhinja",
    imageLarge: "/images/MK_JAGODA_L.jpg",
    imageSmall: "/images/jagoda.jpg",
    fruit: "/strawberry_18643083.png",
    description:
      "Sećaš se one kriške hleba sa džemom, one koja se pojede na brzinu, dok neko viče da se vratiš u igru? Jagode su tada mirisale jače. Ili smo mi bili mlađi. Džem od jagode iz Mamine kuhinje pravi se po tradicionalnoj recepturi, od pažljivo biranog voća, uz dodatak slatkoće taman koliko treba. Ne više. Bez veštačkih boja i aroma. Ostaje mekan, pun, prepoznatljiv. Ovo je onaj džem koji danas namažeš uz kafu, a u glavi ti se javi nešto poznato. I to je dovoljno.",
  },
  {
    name: "Džem od kajsije – Mamina kuhinja",
    imageLarge: "/images/MK_KAJSIJA_L.jpg",
    imageSmall: "/images/kajsija.jpg",
    description:
      "Kajsija miriše na leto. Na vrućinu. Na lepljave prste i fleke koje niko ne gleda. Džem od kajsije iz Mamine kuhinje priprema se po tradicionalnoj recepturi, od pažljivo odabranih plodova, sa prijatnom slatkoćom i glatkom teksturom. Bez veštačkih dodataka. Nije nametljiv. Ne traži objašnjenje. Samo lepo legne, uz hleb, uz pecivo, uz one trenutke kada ne žuriš. Bar malo.",
  },
  {
    name: "Džem od šipka – Mamina kuhinja",
    imageLarge: "/images/MK_SIPURAK_L.jpg",
    imageSmall: "/images/sipurak.jpg",
    fruit: "/dog-rose_3504520.png",
    description:
      "Šipak ne traži pažnju. Raste tiho, tvrdoglavo, po svom. Džem od šipka iz Mamine kuhinje priprema se po tradicionalnoj recepturi, od pažljivo obrađenog ploda, sa dodatkom slatkoće koja naglasi njegovu posebnu aromu. Bez veštačkih dodataka. Nije blag. Nije ni očekivan. Ali ima karakter. I ljudi koji ga biraju, to odmah prepoznaju.",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // Blokiraj scroll kada je modal otvoren
  useEffect(() => {
    if (selectedProduct !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  return (
    <section
      id="proizvodi"
      className="relative pb-20 pt-5 bg-gradient-to-b from-[#9b7e74]/10 to-[#9b7e74]/40 overflow-hidden"
    >
      {/* <svg
        viewBox="0 0 1440 90"
        className=" w-full fill-current text-[#9b7e74]/30"
      >
        <path d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,21.3C840,21,960,43,1080,53.3C1200,64,1320,64,1380,64L1440,64L1440,0L0,0Z" />
      </svg> */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Priča Mamine kuhinje
          </h2>
          <p className="text-center text-lg text-gray-600  max-w-3xl mx-auto">
            Sećaš se one kriške hleba sa džemom, pojedene na brzinu između igre
            u dvorištu?
          </p>{" "}
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            {" "}
            Onog trenutka kada te mama dozove, pruži hleb u ruku i ti nastaviš
            igru, bezbrižan i siguran.
          </p>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Upravo tu toplinu čuvamo u Maminoj kuhinji.
          </p>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Naši džemovi prave se po tradicionalnoj recepturi, od pažljivo
            biranog voća, bez dodatih veštačkih boja i aroma.{" "}
          </p>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Mamina kuhinja nije samo domaći proizvod.
          </p>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            To je mali povratak u detinjstvo, u jednostavne trenutke koji su
            imali najvise smisla.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProduct(index)}
              >
                <div className="relative h-96">
                  {/* Slike */}
                  <div className="grid grid-cols-2 h-full p-2 md:p-4">
                    <div className="relative w-full">
                      <Image
                        src={product.imageLarge}
                        alt={`${product.name} - velika tegla`}
                        fill
                        className="object-cover"
                        unoptimized={true}
                      />
                    </div>
                    <div className="relative w-full">
                      <Image
                        src={product.imageSmall}
                        alt={`${product.name} - mala tegla`}
                        fill
                        className="object-cover"
                        unoptimized={true}
                      />
                    </div>
                  </div>
                  {/* Naslov i tagline */}
                  <div className="absolute top-0 left-0 right-0 pt-10">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center">
                      {product.name}
                    </h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 pb-10">
                    <p className="text-gray-600 text-xs md:text-sm text-center">
                      Mamina kuhinja. Domaći ukus koji se pamti.
                    </p>
                  </div>
                  {/* Voćke - u posebnom overlay-u iznad svega */}
                  <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 20 }}>
                    <DrawnFruit x="8%" y="19%" size={56} delay={0.1} rotate={-15} src={product.fruit ?? "/fruit_13534539.png"} />
                    <DrawnFruit x="72%" y="2%" size={41} delay={0.3} rotate={20} src={product.fruit ?? "/fruit_13534539.png"} />
                    <DrawnFruit x="6%" y="60%" size={37} delay={0.5} rotate={10} src={product.fruit ?? "/fruit_13534539.png"} />
                    <DrawnFruit x="78%" y="55%" size={57} delay={0.4} rotate={-20} src={product.fruit ?? "/fruit_13534539.png"} />
                    <DrawnFruit x="38%" y="35%" size={55} delay={0.6} rotate={8} src={product.fruit ?? "/fruit_13534539.png"} />
                    <DrawnFruit x="55%" y="70%" size={44} delay={0.7} rotate={-12} src={product.fruit ?? "/fruit_13534539.png"} />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm md:text-base text-justify">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* <motion.div
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
          </motion.div> */}
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
                    unoptimized={true}
                  />
                </div>
                <div className="relative h-[50vh] md:h-[60vh] w-full">
                  <Image
                    src={products[selectedProduct].imageSmall}
                    alt={`${products[selectedProduct].name} - mala tegla`}
                    fill
                    className="object-contain"
                    unoptimized={true}
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
