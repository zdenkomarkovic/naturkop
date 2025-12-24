"use client";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero sekcija */}
      <section className="relative md:py-10 ">
        <div className=" mx-auto px-4 text-center md:pt-20 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5x  font-bold mb-4">Kontakt</h1>
            <p className="text-xl md:text-2xl">
              Kontaktirajte nas za više informacija
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kontakt informacije */}
      <section className="py-10 md:py-16">
        <div className="  max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 md:gap-12 gap-4 items-center">
            {/* Informacije o firmi */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-8"
            >
              {/* Kontakt informacije */}
              <div className="bg-white p-6 rounded-xl shadow-lg shadow-secondary">
                <div className=" space-y-2">
                  <p>
                    <span className="font-semibold">Email:</span>
                    <br />
                    <a
                      href="mailto:naturkopdoo@gmail.com"
                      className="text-secondary hover:text-green-700 transition-colors"
                    >
                      naturkopdoo@gmail.com
                    </a>
                  </p>
                  {/* <p>
                    <span className="font-semibold">Telefon:</span>
                    <br />
                    <a
                      href="tel:+38166224502"
                      className="text-secondary hover:text-green-700 transition-colors"
                    >
                      +381 66 224 502
                    </a>
                  </p> */}
                </div>
              </div>
              {/* Ispostava */}
              <div className="bg-white p-6 rounded-xl shadow-lg shadow-secondary">
                <div className="">
                  <p className="font-semibold">Naturkop doo: Ispostava</p>
                  <p>Kruševac-Mudrakovac 37000</p>
                  <p>Istočna 8</p>
                </div>
              </div>
              {/* Adresa */}
              <div className="bg-white p-6 rounded-xl shadow-lg shadow-secondary">
                <div className="">
                  <p className="font-semibold">Naturkop doo: Sedište</p>
                  <p>Garevina bb</p>
                  <p>37234 Gornji Stupanj</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa sekcija */}
      <section className="py-10 md:py-16 text-center">
        <div className="container mx-auto px-4 md:px-10 ">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-8"
          >
            <p className="mb-4 text-sm md:text-xl">
              <span className="font-semibold">Ispostava:</span>Istočna 8 -
              Kruševac-Mudrakovac 37000
            </p>{" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.924328243514!2d21.330531676053596!3d43.54561927110747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47567d758535b271%3A0xb11579ca79e8c1a3!2z0JjRgdGC0L7Rh9C90LAg0L7QsdC40LvQsNC30L3QuNGG0LAgLSDQiNGD0LM!5e0!3m2!1sen!2srs!4v1758835555111!5m2!1sen!2srs"
              width="600"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-2xl"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
