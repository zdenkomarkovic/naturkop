"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className="bg-secondary text-white py-10 md:px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 md:gap-6 mb-6">
          {/* Logo i osnovne informacije */}
          <div className=" text-center md:text-left">
            <p className=" mb-6 text-lg leading-relaxed">
              Specijalizovani za preradu voća i povrća najvišeg kvaliteta.
            </p>
            <div className="mb-6">
              <Image
                src="/naturkopfooter.png"
                alt="Naturkop doo"
                width={250}
                height={100}
                className="mx-auto w-full md:mx-0 rounded-full"
              />
            </div>
          </div>

          {/* Navigacija */}
          <div className="w-fit mx-auto">
            <h3 className="text-xl font-semibold mb-6">Navigacija</h3>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block  hover:text-gray-300 transition-colors"
              >
                Početna
              </Link>
              <Link
                href="/"
                className="block  hover:text-gray-300 transition-colors"
              >
                Proizvodi
              </Link>
              <Link
                href="/kontakt"
                className="block  hover:text-gray-300 transition-colors"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Kontakt informacije */}
          <div className="w-fit mx-auto">
            <h3 className="text-xl font-semibold mb-6">Kontakt</h3>
            <div className="space-y-3">
              <div>
                <a
                  href="tel:+38166224502"
                  className=" hover:text-gray-300 transition-colors"
                >
                  +381 66 224 502
                </a>
              </div>
              <div>
                <a
                  href="mailto:naturkopdoo@gmail.com"
                  className=" hover:text-gray-300 transition-colors"
                >
                  naturkopdoo@gmail.com
                </a>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold text-white mb-1">Sediste:</p>
                <p>Garevina bb - Gornji Stupanj</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold text-white mb-1">Ispostava:</p>
                <p>Istočna 8 - Krusevac-Mudrakovac</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        {/* Donji deo */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:px-20">
            <p className=" text-center md:text-left">
              &copy; {new Date().getFullYear()} Naturkop doo. Sva prava
              zadržana.
            </p>
            <a
              href="https://www.manikamwebsolutions.com/"
              target="_blank"
              className=" "
            >
              Izrada sajta:{" "}
              <span className="font-bold text-primary hover:text-white transition-colors">
                ManikamWebSolutions
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
