"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/lib/sanityImage";

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
      {collaborator.logo && (
        <div className="relative h-full w-full">
          <Image
            src={urlFor(collaborator.logo)
              .width(300)
              .height(150)
              .auto("format")
              .quality(85)
              .url()}
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
    <section
      id="saradnici"
      className="pb-20  bg-gradient-to-t from-[#9b7e74]/10 to-[#9b7e74]/40"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
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
            className="bg-[#9b7e74]/20 border-4 border-[#9b7e74] rounded-lg text-center p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Želite da postanete naš partner?
            </h3>
            <p className="text-lg mb-6 text-gray-700">
              Kontaktirajte nas za mogućnosti distribucije i saradnje
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="bg-[#9b7e74] text-white hover:bg-[#7a5c52] px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
              >
                Kontaktirajte nas
              </a>
              <a
                href="tel:+38166224502"
                className="border-2 border-[#9b7e74] text-[#7a5c52] hover:bg-[#9b7e74] hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
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
