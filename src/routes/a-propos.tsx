import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Eye, Heart, Target } from "lucide-react";

import campus from "@/assets/angello-campus.png.asset.json";
import team from "@/assets/team-teachers.jpg";
import hero from "@/assets/hero-children.jpg";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À Propos — ANGELLO School, école bilingue à Douala" },
      {
        name: "description",
        content:
          "Découvrez l'histoire, la mission et les valeurs d'ANGELLO School, groupe scolaire bilingue fondé en 2023 à Japoma, Douala.",
      },
      { property: "og:title", content: "À Propos — ANGELLO School, école bilingue à Douala" },
      {
        property: "og:description",
        content:
          "Histoire, mission et valeurs du Groupe Scolaire Bilingue ANGELLO à Japoma, Douala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Target,
    title: "Excellence",
    desc: "Des exigences académiques élevées, mesurées par des résultats concrets : 100% de réussite au CEP depuis trois ans.",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    desc: "Chaque enfant est accueilli, écouté et encouragé. La confiance est le premier moteur des apprentissages.",
  },
  {
    icon: Eye,
    title: "Ouverture",
    desc: "Le bilinguisme et les activités culturelles ouvrent nos élèves au monde dès leur plus jeune âge.",
  },
] as const;

function AboutPage() {
  return (
    <main>
      <PageHero
        title="À Propos d'ANGELLO School"
        subtitle="Une école bilingue née d'une conviction : chaque enfant de Douala mérite une éducation d'excellence."
        image={hero}
        alt="Élèves d'ANGELLO School en classe"
      />

      {/* Notre histoire */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <Reveal direction="left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Notre histoire
            </p>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Fondée en 2023, une école pensée pour les familles de Douala
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              ANGELLO School est née à Japoma de la volonté de créer un établissement qui conjugue
              rigueur académique, bilinguisme réel et épanouissement de l'enfant. En trois ans,
              l'école a grandi pour accueillir plus de 500 élèves, de la crèche au primaire.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Aujourd'hui, nos 25 enseignants, nos trois bus haut standing et nos sept clubs
              périscolaires font d'ANGELLO une référence de l'éducation bilingue dans la région.
            </p>
          </Reveal>
          <Reveal direction="right">
            <img
              src={campus.url}
              alt="Façade colorée du campus ANGELLO School à Japoma"
              loading="lazy"
              className="w-full rounded-2xl shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* Mission & valeurs */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Notre mission"
            title="Former des enfants curieux, bilingues et confiants"
            subtitle="Trois valeurs guident chacune de nos décisions, de la salle de classe à la cour de récréation."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 100}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <Reveal direction="left" className="order-2 lg:order-1">
            <img
              src={team}
              alt="Équipe pédagogique d'ANGELLO School"
              loading="lazy"
              className="w-full rounded-2xl shadow-lg"
            />
          </Reveal>
          <Reveal direction="right" className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Notre équipe
            </p>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              25 enseignants diplômés et passionnés
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Recrutés pour leur expertise et leur pédagogie, nos enseignants francophones et
              anglophones se forment en continu. Ils assurent un suivi individualisé et communiquent
              chaque semaine avec les familles.
            </p>
            <Button asChild variant="hero" className="mt-6">
              <Link to="/preinscription">
                Rejoindre la famille Angello <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
