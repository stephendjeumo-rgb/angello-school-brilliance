import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bell, Bus, MapPin, ShieldCheck, Timer, UserCheck } from "lucide-react";

import bus from "@/assets/transport-bus.jpg";

import { waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Transport Scolaire — Bus haut standing | ANGELLO School Douala" },
      {
        name: "description",
        content:
          "Trois bus haut standing avec accompagnateurs formés desservent Douala chaque jour pour les élèves d'ANGELLO School. Sécurité et ponctualité garanties.",
      },
      { property: "og:title", content: "Transport Scolaire — Bus haut standing | ANGELLO School Douala" },
      {
        property: "og:description",
        content: "Un ramassage scolaire sûr, ponctuel et confortable sur tout Douala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TransportPage,
});

const FEATURES = [
  {
    icon: Bus,
    title: "3 bus haut standing",
    desc: "Véhicules récents, climatisés, avec sièges et ceintures adaptés à chaque âge.",
  },
  {
    icon: UserCheck,
    title: "Accompagnateurs formés",
    desc: "Un adulte dédié dans chaque bus veille sur les enfants du départ à l'arrivée.",
  },
  {
    icon: Timer,
    title: "Ponctualité garantie",
    desc: "Des itinéraires optimisés et un horaire fixe, communiqué à chaque famille.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité contrôlée",
    desc: "Chauffeurs expérimentés, entretien régulier et contrôles avant chaque trajet.",
  },
  {
    icon: Bell,
    title: "Parents informés",
    desc: "Notification en cas de retard ou d'imprévu, et contact direct avec l'école.",
  },
  {
    icon: MapPin,
    title: "Large couverture",
    desc: "Desserte des principaux quartiers de Douala, points d'arrêt proches des domiciles.",
  },
] as const;

function TransportPage() {
  return (
    <main>
      <PageHero
        title="Transport Scolaire"
        subtitle="Un ramassage sûr, ponctuel et confortable pour tous nos élèves, partout à Douala."
        image={bus}
        alt="Bus de ramassage scolaire d'ANGELLO School"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Sérénité pour les parents"
            title="Un service de transport complet"
            subtitle="Trois bus haut standing, une équipe dédiée et des règles de sécurité strictes."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <Reveal direction="left">
            <img
              src={bus}
              alt="Intérieur confortable d'un bus ANGELLO School"
              loading="lazy"
              className="w-full rounded-2xl shadow-lg"
            />
          </Reveal>
          <Reveal direction="right">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Tarifs & inscription
            </p>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Un abonnement simple et transparent
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Le transport scolaire est proposé en abonnement trimestriel ou annuel, selon votre
              quartier. Le tarif exact vous est communiqué après étude de votre adresse.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="hero">
                <Link to="/preinscription">
                  Préinscrire avec transport <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outlineBrand">
                <a
                  href={waLink(
                    "Bonjour ANGELLO School, je souhaite connaître les tarifs du transport scolaire pour mon quartier. Merci.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demander un tarif sur WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
