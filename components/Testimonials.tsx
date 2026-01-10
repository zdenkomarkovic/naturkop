"use client";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marija Petrović",
    role: "Vlasnica prodavnice zdrave hrane",
    text: "Džemovi iz Mamine kuhinje su hit kod naših kupaca. Kvalitet je izvanredan, a ukus podseta na pravo domaće. Saradnja sa Naturkopom je profesionalna i bez problema.",
    rating: 5,
  },
  {
    name: "Stefan Jovanović",
    role: "Restoran 'Domaća kuća'",
    text: "Koristimo proizvode Naturkopa u našem restoranu već godinu dana. Gosti posebno vole džem od kajsije i šipurka. Pouzdani ste partner i preporučujem vas svima.",
    rating: 5,
  },
  {
    name: "Ana Nikolić",
    role: "Majka dvoje dece",
    text: "Mamina kuhinja je postala nezamenljiv deo našeg doručka. Deca obožavaju džem od jagode, a ja sam spokojna jer znam da je prirodan i bez aditiva. Hvala vam!",
    rating: 5,
  },
  {
    name: "Dragan Milošević",
    role: "Vlasnik hotela",
    text: "Za naš hotel smo tražili kvalitetne domaće proizvode i našli smo ih kod Naturkopa. Gosti su oduševljeni, a mi zadovoljni saradnjom. Svaka preporuka!",
    rating: 5,
  },
  {
    name: "Jelena Stojanović",
    role: "Nutricionista",
    text: "Kao nutricionista cenim proizvode koji su prirodni i bez štetnih dodataka. Džemovi iz Mamine kuhinje su odličan izbor za one koji vode računa o ishrani.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20  bg-gradient-to-t from-[#9b7e74]/10 to-[#9b7e74]/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Šta kažu naši kupci
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Pročitajte iskustva zadovoljnih kupaca i partnera koji su nam
            ukazali poverenje
          </p>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnFocusIn: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <Quote className="text-primary w-10 h-10" />
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-primary text-xl">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 flex-grow italic leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-bold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
