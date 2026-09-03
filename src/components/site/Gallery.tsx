import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

import hero from "@/assets/hero-children.jpg";
import creche from "@/assets/level-creche.jpg";
import maternelle from "@/assets/level-maternelle.jpg";
import primaire from "@/assets/level-primaire.jpg";
import sport from "@/assets/activity-sport.jpg";
import arts from "@/assets/activity-arts.jpg";
import team from "@/assets/team-teachers.jpg";
import bus from "@/assets/transport-bus.jpg";
import campus from "@/assets/angello-campus.png.asset.json";

export type GalleryCategory =
  | "Crèche"
  | "Maternelle"
  | "Primaire"
  | "Activités"
  | "Événements";

export type GalleryItem = { src: string; alt: string; category: GalleryCategory };

/** Banque d'images de la vie scolaire, réutilisée sur l'accueil et la page Galerie. */
export const GALLERY_ITEMS: GalleryItem[] = [
  { src: creche, alt: "Tout-petits jouant avec des cubes en crèche", category: "Crèche" },
  { src: maternelle, alt: "Enfants en atelier peinture en maternelle", category: "Maternelle" },
  { src: primaire, alt: "Élèves du primaire levant la main en classe", category: "Primaire" },
  { src: sport, alt: "Match de football entre élèves d'Angello", category: "Activités" },
  { src: arts, alt: "Atelier de musique et percussions traditionnelles", category: "Activités" },
  { src: hero, alt: "Élèves souriants dans la cour de l'école", category: "Événements" },
  { src: campus.url, alt: "Façade colorée du campus ANGELLO à Japoma", category: "Événements" },
  { src: team, alt: "Équipe pédagogique d'ANGELLO School", category: "Événements" },
  { src: bus, alt: "Bus de ramassage scolaire d'ANGELLO School", category: "Activités" },
  { src: maternelle, alt: "Jeux éducatifs en petite section", category: "Crèche" },
  { src: primaire, alt: "Cours de mathématiques au primaire", category: "Primaire" },
  { src: arts, alt: "Répétition de danse pour la fête de fin d'année", category: "Événements" },
  { src: sport, alt: "Séance d'éducation physique", category: "Activités" },
  { src: creche, alt: "Coin lecture des tout-petits", category: "Crèche" },
  { src: hero, alt: "Récréation des élèves du primaire", category: "Primaire" },
];

const FILTERS = ["Tous", "Crèche", "Maternelle", "Primaire", "Activités", "Événements"] as const;

/** Galerie masonry avec filtres par catégorie et lightbox plein écran. */
export function Gallery({ items = GALLERY_ITEMS }: { items?: GalleryItem[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "Tous" ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => ((i ?? 0) + 1) % visible.length);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => ((i ?? 0) - 1 + visible.length) % visible.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, visible.length]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setFilter(f);
              setOpenIndex(null);
            }}
            aria-pressed={filter === f}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all duration-300",
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary hover:text-primary",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {visible.map((item, i) => (
          <Reveal key={`${item.src}-${i}`} delay={(i % 6) * 60} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
              aria-label={`Agrandir : ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setOpenIndex(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-background text-foreground"
          >
            <X />
          </button>
          <button
            type="button"
            aria-label="Image précédente"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => ((i ?? 0) - 1 + visible.length) % visible.length);
            }}
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-background text-foreground sm:left-6"
          >
            <ChevronLeft />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-background">
              {current.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Image suivante"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => ((i ?? 0) + 1) % visible.length);
            }}
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-background text-foreground sm:right-6"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
