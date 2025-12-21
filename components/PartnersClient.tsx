"use client";
import { motion } from "framer-motion";
import { MapPinIcon, StoreIcon, ShoppingBagIcon, PhoneIcon, MailIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

interface Partner {
  _id: string;
  name: string;
  type: 'maloprodaja' | 'veleprodaja';
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

export default function PartnersClient({ partners }: PartnersClientProps) {
  const maloprodaja = partners.filter((p) => p.type === 'maloprodaja');
  const veleprodaja = partners.filter((p) => p.type === 'veleprodaja');

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
            <>
              {/* Maloprodaja */}
              {maloprodaja.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center mb-6">
                    <ShoppingBagIcon className="w-10 h-10 text-primary mr-4" />
                    <h3 className="text-3xl font-bold text-gray-900">Maloprodaja</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {maloprodaja.map((partner) => (
                      <div
                        key={partner._id}
                        className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        {partner.logo?.asset?.url && (
                          <div className="relative h-24 w-full mb-4">
                            <Image
                              src={partner.logo.asset.url}
                              alt={partner.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {partner.name}
                        </h4>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-start">
                            <MapPinIcon className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              {partner.location}
                              {partner.address && `, ${partner.address}`}
                            </span>
                          </div>
                          {partner.phone && (
                            <div className="flex items-center">
                              <PhoneIcon className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                              <a href={`tel:${partner.phone}`} className="hover:text-primary">
                                {partner.phone}
                              </a>
                            </div>
                          )}
                          {partner.email && (
                            <div className="flex items-center">
                              <MailIcon className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                              <a href={`mailto:${partner.email}`} className="hover:text-primary">
                                {partner.email}
                              </a>
                            </div>
                          )}
                          {partner.website && (
                            <div className="flex items-center">
                              <ExternalLinkIcon className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                              <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary"
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
                    ))}
                  </div>
                </div>
              )}

              {/* Veleprodaja */}
              {veleprodaja.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center mb-6">
                    <StoreIcon className="w-10 h-10 text-secondary mr-4" />
                    <h3 className="text-3xl font-bold text-gray-900">Veleprodaja</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {veleprodaja.map((partner) => (
                      <div
                        key={partner._id}
                        className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        {partner.logo?.asset?.url && (
                          <div className="relative h-24 w-full mb-4">
                            <Image
                              src={partner.logo.asset.url}
                              alt={partner.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {partner.name}
                        </h4>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-start">
                            <MapPinIcon className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                            <span>
                              {partner.location}
                              {partner.address && `, ${partner.address}`}
                            </span>
                          </div>
                          {partner.phone && (
                            <div className="flex items-center">
                              <PhoneIcon className="w-5 h-5 text-secondary mr-2 flex-shrink-0" />
                              <a href={`tel:${partner.phone}`} className="hover:text-secondary">
                                {partner.phone}
                              </a>
                            </div>
                          )}
                          {partner.email && (
                            <div className="flex items-center">
                              <MailIcon className="w-5 h-5 text-secondary mr-2 flex-shrink-0" />
                              <a href={`mailto:${partner.email}`} className="hover:text-secondary">
                                {partner.email}
                              </a>
                            </div>
                          )}
                          {partner.website && (
                            <div className="flex items-center">
                              <ExternalLinkIcon className="w-5 h-5 text-secondary mr-2 flex-shrink-0" />
                              <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary"
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
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
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
              * Lista prodajnih mesta se redovno ažurira. Za najtačnije informacije,
              kontaktirajte nas direktno.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
