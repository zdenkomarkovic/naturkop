"use client";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  StoreIcon,
  ShoppingBagIcon,
  PhoneIcon,
  MailIcon,
  ExternalLinkIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Partner {
  _id: string;
  name: string;
  type: "maloprodaja" | "veleprodaja";
  location: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  logo?: {
    asset?: {
      url: string;
    };
  };
}

interface PartnersClientProps {
  partners: Partner[];
}

function PartnerCard({ partner }: { partner: Partner }) {
  const isRetail = partner.type === "maloprodaja";
  const iconColor = isRetail ? "text-primary" : "text-secondary";
  const hoverColor = isRetail ? "hover:text-primary" : "hover:text-secondary";
  const badgeBg = isRetail ? "bg-primary" : "bg-secondary";
  const Icon = isRetail ? ShoppingBagIcon : StoreIcon;

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
      {partner.logo?.asset?.url && (
        <div className="relative h-24 w-full mb-3">
          <Image
            src={partner.logo.asset.url}
            alt={partner.name}
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* Oznaka tipa */}
      <div
        className={`inline-flex items-center gap-1 ${badgeBg} text-white px-2 py-0.5 rounded-full text-xs font-medium mb-3`}
      >
        <Icon className="w-3 h-3" />
        <span>{isRetail ? "Maloprodaja" : "Veleprodaja"}</span>
      </div>

      <h4 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h4>
      <div className="space-y-2 text-gray-600">
        <div className="flex items-start">
          <MapPinIcon
            className={`w-5 h-5 ${iconColor} mr-2 flex-shrink-0 mt-0.5`}
          />
          <span>
            {partner.location}
            {partner.address && `, ${partner.address}`}
          </span>
        </div>
        {partner.phone && (
          <div className="flex items-center">
            <PhoneIcon className={`w-5 h-5 ${iconColor} mr-2 flex-shrink-0`} />
            <a href={`tel:${partner.phone}`} className={hoverColor}>
              {partner.phone}
            </a>
          </div>
        )}
        {partner.email && (
          <div className="flex items-center">
            <MailIcon className={`w-5 h-5 ${iconColor} mr-2 flex-shrink-0`} />
            <a href={`mailto:${partner.email}`} className={hoverColor}>
              {partner.email}
            </a>
          </div>
        )}
        {partner.website && (
          <div className="flex items-center">
            <ExternalLinkIcon
              className={`w-5 h-5 ${iconColor} mr-2 flex-shrink-0`}
            />
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className={hoverColor}
            >
              Posetite sajt
            </a>
          </div>
        )}
      </div>
      {partner.description && (
        <p className="mt-4 text-sm text-gray-600">{partner.description}</p>
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
            className="w-[350px] flex-shrink-0"
          >
            <PartnerCard partner={partner} />
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Gde možete kupiti naše proizvode
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Proizvodi "Mamina kuhinja" dostupni su na više lokacija
          </p>

          {partners.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Uskoro ćemo objaviti listu naših partnera.
              </p>
            </div>
          ) : (
            <div className="mb-16">
              <PartnerSlider partners={partners} />
            </div>
          )}

          <motion.div
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
