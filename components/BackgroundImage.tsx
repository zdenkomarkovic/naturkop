"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Leaf, Factory, Star } from "lucide-react";

const BackgroundImage = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const cards = [
    {
      icon: <Leaf className="w-12 h-12 text-[#9b7e74]" />,
      title: "Kvalitetna sirovina i kontrolisan proces",
      delay: 0.1,
    },
    {
      icon: <Factory className="w-12 h-12 text-[#9b7e74]" />,
      title: "Pakovanje prema vašim specifikacijama",
      delay: 0.2,
    },
    {
      icon: <Star className="w-12 h-12 text-[#9b7e74]" />,
      title: "Poštovanje rokova i profesionalna podrška",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#9b7e74]/40 to-[#9b7e74]/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-2xl md:text-4xl font-semibold text-center text-[#9b7e74] mb-10"
        >
          Zašto odabrati nas?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={
                isMobile ? { opacity: 0, x: -80 } : { opacity: 0, y: 25 }
              }
              whileInView={
                isMobile ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
              }
              transition={{
                duration: 0.7,
                delay: card.delay,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-gradient-to-b from-[#9b7e74]/10 to-[#9b7e74]/10 border-4 border-[#9b7e74] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-xl md:text-lg font-bold text-[#9b7e74] leading-snug">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-40px" }}
        className="mt-10 w-full"
      >
        <img
          src="/20260408_220433.jpg"
          alt="Naturkop pozadina"
          className="w-full object-cover max-h-28 md:max-h-[440px]"
          style={{ objectPosition: "center 60%" }}
        />
      </motion.div>
    </section>
  );
};

export default BackgroundImage;
