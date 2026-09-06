import { createFileRoute } from "@tanstack/react-router";

import hero from "@/assets/hero-children.jpg";

import { Gallery } from "@/components/site/Gallery";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie Photos — ANGELLO School, école bilingue à Douala" },
      {
        name: "description",
        content:
          "Classes, activités, événements : découvrez en images la vie quotidienne des élèves d'ANGELLO School à Japoma, Douala.",
      },
      { property: "og:title", content: "Galerie Photos — ANGELLO School, école bilingue à Douala" },
      {
        property: "og:description",
        content: "La vie d'ANGELLO School en images : crèche, maternelle, primaire et activités.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Galerie Photos"
        subtitle="Classes, activités et sourires : plongez dans le quotidien de nos élèves."
        image={hero}
        alt="Élèves souriants d'ANGELLO School"
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Gallery />
        </div>
      </section>
    </main>
  );
}
