import type { Metadata } from "next";
import KontaktContent from "@/components/KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Naturkop doo za porudžbine, saradnju ili uslužnu proizvodnju (private label). Nalazimo se u Mudrakovcu, Kruševac.",
  alternates: {
    canonical: "https://www.naturkop.rs/kontakt",
  },
  openGraph: {
    title: "Kontakt | Naturkop - Mamina kuhinja",
    description:
      "Kontaktirajte Naturkop doo za porudžbine, saradnju ili uslužnu proizvodnju (private label).",
    url: "https://www.naturkop.rs/kontakt",
  },
};

export default function KontaktPage() {
  return <KontaktContent />;
}
