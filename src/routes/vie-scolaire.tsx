import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, Utensils } from "lucide-react";

import hero from "@/assets/activity-arts.jpg";
import sport from "@/assets/activity-sport.jpg";
import arts from "@/assets/activity-arts.jpg";

import { ACTIVITIES } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/vie-scolaire")({
  head: () => ({
    meta: [
      { title: "Vie Scolaire — Activités, cantine et événements | ANGELLO School" },
      {
        name: "description",
        content:
          "Sports, arts, robotique, clubs de lecture, jardinage : découvrez la vie scolaire riche d'ANGELLO School à Douala, de 7h à 17h30.",
      },
      { property: "og:title", content: "Vie Scolaire — Activités, cantine et événements | ANGELLO School" },
      {
        property: "og:description",
        content: "Sept clubs périscolaires, une cantine équilibrée et des événements toute l'année.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SchoolLifePage,
});

const DAY = [
  { time: "7h00", label: "Accueil des élèves et garderie du matin" },
  { time: "7h30", label: "Ouverture des classes et rituel bilingue" },
  { time: "10h00", label: "Récréation et collation encadrées" },
  { time: "12h00", label: "Déjeuner à la cantine, menus équilibrés" },
  { time: "13h30", label: "Reprise des cours et ateliers" },
  { time: "15h30 – 17h30", label: "Clubs périscolaires et garderie du soir" },
] as const;

function SchoolLifePage() {
  return (
    <main>
      <PageHero
        title="La Vie Scolaire"
        subtitle="Des journées rythmées, joyeuses et structurées, de l'accueil du matin aux clubs du soir."
        image={hero}
        alt="Atelier artistique à ANGELLO School"
      />

      {/* Une journée type */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle
            eyebrow="Une journée à Angello"
            title="Le rythme de nos élèves"
            subtitle="Un emploi du temps pensé pour alterner apprentissages, jeux et temps calmes."
          />
          <ol className="relative mt-12 space-y-8 border-l-2 border-gold/40 pl-8">
            {DAY.map((d, i) => (
              <Reveal as="li" key={d.time} delay={i * 80} className="relative">
                <span className="absolute -left-[41px] grid h-5 w-5 place-items-center rounded-full bg-gold" aria-hidden="true" />
                <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Clock className="h-4 w-4 text-gold" /> {d.time}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{d.label}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Activités */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Sept clubs"
            title="Des activités pour tous les talents"
            subtitle="Chaque après-midi, les élèves choisissent un club encadré par des animateurs diplômés."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ACTIVITIES.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 60}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-3xl" aria-hidden="true">
                  {a.emoji}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-primary">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cantine & événements */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-2">
          <Reveal
            direction="left"
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <img
              src={sport}
              alt="Séance de sport à ANGELLO School"
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-8">
              <CalendarDays className="h-8 w-8 text-gold" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold text-primary">Événements toute l'année</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Fête de fin d'année, semaine bilingue, concours d'éloquence, tournois sportifs et
                sorties pédagogiques rythment l'année scolaire et renforcent l'esprit de communauté.
              </p>
            </div>
          </Reveal>
          <Reveal
            direction="right"
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <img
              src={arts}
              alt="Atelier musique à ANGELLO School"
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-8">
              <Utensils className="h-8 w-8 text-gold" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold text-primary">Cantine équilibrée</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Des repas chauds préparés sur place, avec des menus variés validés par une
                nutritionniste. Les allergies et régimes particuliers sont pris en compte.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/preinscription">
              Offrir ce quotidien à mon enfant <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
