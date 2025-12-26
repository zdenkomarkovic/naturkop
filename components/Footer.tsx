"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ showBlog }: { showBlog: boolean }) {
  return (
    <motion.footer
      className="bg-secondary text-white py-10 md:px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-6 mb-6">
          {/* Navigacija */}
          <div className="w-fit mx-auto">
            <h3 className="text-xl font-semibold mb-6">Navigacija</h3>
            <nav className=" flex flex-wrap items-center justify-center gap-3 md:gap-6">
              <Link
                href="/"
                className="block  hover:text-gray-300 transition-colors"
              >
                Početna
              </Link>
              <Link
                href="/o-nama"
                className="block  hover:text-gray-300 transition-colors"
              >
                O nama
              </Link>
              <Link
                href="/#proizvodi"
                className="block  hover:text-gray-300 transition-colors"
              >
                Proizvodi
              </Link>
              <Link
                href="/#partneri"
                className="block  hover:text-gray-300 transition-colors"
              >
                Partneri
              </Link>
              {showBlog && (
                <Link
                  href="/blog"
                  className="block  hover:text-gray-300 transition-colors"
                >
                  Blog
                </Link>
              )}
              <Link
                href="/kontakt"
                className="block  hover:text-gray-300 transition-colors"
              >
                Kontakt
              </Link>
            </nav>
          </div>
          {/* Logo i osnovne informacije */}
          <div className=" text-center md:px-24">
            <div className="mb-6">
              <Image
                src="/naturkopfooter.png"
                alt="Naturkop doo"
                width={250}
                height={100}
                className="mx-auto w-full md:mx-0 rounded-3xl"
              />
            </div>
            <p className=" text-lg leading-relaxed">
              PREDUZEĆE ZA PROIZVODNJU I PROMET DOO NATUR KOP GAREVINA
            </p>
            <p className="text-lg leading-relaxed">
              Garevina bb, 37234 Gornji Stupanj - MB 20666226 - PIB 106716188
            </p>
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
