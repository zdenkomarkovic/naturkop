"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Partner {
  _id: string;
  name?: string;
  logo?: {
    asset?: {
      url: string;
    };
  };
}

interface PartnersClientProps {
  partners: Partner[];
}

function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-32 flex items-center justify-center">
      {partner.logo?.asset?.url && (
        <div className="relative h-full w-full">
          <Image
            src={partner.logo.asset.url}
            alt={partner.name || "Partner logo"}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}

function PartnerSlider({ partners }: { partners: Partner[] }) {
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Dupliraj partnere za beskonačni efekat
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
      <motion.div
        className="flex gap-6 flex-shrink-0"
        drag="x"
        dragConstraints={{ left: -1000, right: 1000 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        onDragStart={() => setIsPaused(true)}
        onDragEnd={(event, info) => {
          setDragOffset(dragOffset + info.offset.x);
          setIsPaused(false);
        }}
        animate={
          !isPaused
            ? {
                x: [dragOffset, dragOffset - 100 / 3 + "%"],
              }
            : undefined
        }
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: partners.length * 5,
            ease: "linear",
          },
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner._id}-${index}`}
            className="w-[250px] flex-shrink-0"
          >
            <PartnerLogo partner={partner} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PartnersClient({ partners }: PartnersClientProps) {
  return (
    <section id="partneri" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Maminu kuhinju možete pronaći ovde
          </h2>
          {/* <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Proizvodi "Mamina kuhinja" dostupni su na više lokacija
          </p> */}

          {partners.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Uskoro ćemo objaviti listu naših partnera.
              </p>
            </div>
          ) : (
            <div className="mb-14">
              <PartnerSlider partners={partners} />
            </div>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="py-12 text-center bg-primary/10 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Uslužna proizvodnja robnih marki
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Kvalitetna sirovina, kontrolisani proces proizvodnje i poštovanje
              rokova čine Naturkop pouzdanim partnerom u oblasti prerade voća —
              bilo da ste kupac, distributer ili poslovni saradnik koji traži
              siguran izvor domaćih džemova i namaza.
            </p>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Želite da postanete naš partner?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Kontaktirajte nas za mogućnosti distribucije i saradnje
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
              >
                Kontaktirajte nas
              </a>
              <a
                href="tel:+38166224502"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
              >
                Pozovite nas
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 italic">
              * Lista prodajnih mesta se redovno ažurira. Za najtačnije
              informacije, kontaktirajte nas direktno.
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
