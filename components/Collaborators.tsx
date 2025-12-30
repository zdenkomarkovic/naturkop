import { getAllCollaborators } from "@/lib/sanity.fetch";
import CollaboratorsClient from "./CollaboratorsClient";

export default async function Collaborators() {
  const collaborators = await getAllCollaborators();
  return <CollaboratorsClient collaborators={collaborators} />;
}
