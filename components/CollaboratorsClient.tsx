"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Collaborator {
  _id: string;
  name?: string;
  logo?: {
    asset?: {
      url: string;
    };
  };
}

interface CollaboratorsClientProps {
  collaborators: Collaborator[];
}

function CollaboratorLogo({ collaborator }: { collaborator: Collaborator }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-32 flex items-center justify-center">
      {collaborator.logo?.asset?.url && (
        <div className="relative h-full w-full">
          <Image
            src={collaborator.logo.asset.url}
            alt={collaborator.name || "Collaborator logo"}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}

function CollaboratorSlider({
  collaborators,
}: {
  collaborators: Collaborator[];
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Dupliraj saradnike za beskonačni efekat
  const duplicatedCollaborators = [
    ...collaborators,
    ...collaborators,
    ...collaborators,
  ];

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
            duration: collaborators.length * 5,
            ease: "linear",
          },
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedCollaborators.map((collaborator, index) => (
          <div
            key={`${collaborator._id}-${index}`}
            className="w-[250px] flex-shrink-0"
          >
            <CollaboratorLogo collaborator={collaborator} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function CollaboratorsClient({
  collaborators,
}: CollaboratorsClientProps) {
  return (
    <section id="saradnici" className="pb-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Naši saradnici
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Sarađujemo sa renomiranim partnerima širom regiona
          </p> */}

          {collaborators.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Uskoro ćemo objaviti listu robnih marki.
              </p>
            </div>
          ) : (
            <div className="mb-16">
              <CollaboratorSlider collaborators={collaborators} />
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
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Želite da postanete naš saradnik?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Kontaktirajte nas za mogućnosti saradnje i partnerstva
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
              * Lista saradnika se redovno ažurira. Za najtačnije
              informacije, kontaktirajte nas direktno.
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
