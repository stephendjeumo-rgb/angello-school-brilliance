import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Users } from "lucide-react";

import hero from "@/assets/level-maternelle.jpg";
import creche from "@/assets/level-creche.jpg";
import garderie from "@/assets/hero-children.jpg";
import maternelle from "@/assets/level-maternelle.jpg";
import primaire from "@/assets/level-primaire.jpg";

import { LEVELS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/nos-niveaux")({
  head: () => ({
    meta: [
      { title: "Nos Niveaux — Crèche, Garderie, Maternelle, Primaire | ANGELLO School" },
      {
        name: "description",
        content:
          "De la crèche (0-3 ans) au primaire (6-12 ans), découvrez les programmes, horaires et effectifs de chaque niveau d'ANGELLO School à Douala.",
      },
      {
        property: "og:title",
        content: "Nos Niveaux — Crèche, Garderie, Maternelle, Primaire | ANGELLO School",
      },
      {
        property: "og:description",
        content: "Un parcours éducatif bilingue complet de 0 à 12 ans à Japoma, Douala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LevelsPage,
});

const IMAGES: Record<string, string> = { creche, garderie, maternelle, primaire };

function LevelsPage() {
  return (
    <main>
      <PageHero
        title="Nos Niveaux"
        subtitle="Un parcours éducatif bilingue complet, de la crèche au certificat d'études primaires."
        image={hero}
        alt="Enfants en classe de maternelle à ANGELLO School"
      />

      <section className="py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4">
          {LEVELS.map((level, i) => (
            <Reveal
              key={level.slug}
              className="grid items-center gap-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-2"
            >
              <img
                src={IMAGES[level.slug]}
                alt={`Section ${level.name} à ANGELLO School`}
                loading="lazy"
                className={`h-64 w-full object-cover lg:h-full ${i % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div className="p-6 sm:p-10">
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-primary">
                  {level.age}
                </span>
                <h2 className="mt-3 text-3xl font-bold text-primary">{level.name}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{level.objectives}</p>
                <ul className="mt-5 space-y-2">
                  {level.program.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold" /> {level.schedule}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4 text-gold" /> {level.size}
                  </span>
                </div>
                <Button asChild variant="hero" className="mt-6">
                  <Link to="/preinscription">
                    Préinscrire en {level.name} <ArrowRight />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
