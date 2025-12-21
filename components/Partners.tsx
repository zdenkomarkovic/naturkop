import { getAllPartners } from "@/lib/sanity.fetch";
import PartnersClient from "./PartnersClient";

export default async function Partners() {
  const partners = await getAllPartners();
  return <PartnersClient partners={partners} />;
}
