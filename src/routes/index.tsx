import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Bus,
  GraduationCap,
  HeartHandshake,
  Languages,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import hero from "@/assets/hero-children.jpg";
import campus from "@/assets/angello-campus.png.asset.json";
import bus from "@/assets/transport-bus.jpg";
import creche from "@/assets/level-creche.jpg";
import maternelle from "@/assets/level-maternelle.jpg";
import primaire from "@/assets/level-primaire.jpg";

import { ACTIVITIES, LEVELS, waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/site/CountUp";
import { Gallery } from "@/components/site/Gallery";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TestimonialCarousel } from "@/components/site/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ANGELLO School — École bilingue d'excellence à Douala" },
      {
        name: "description",
        content:
          "Groupe Scolaire Bilingue ANGELLO à Japoma, Douala : crèche, garderie, maternelle et primaire. 100% de réussite au CEP, transport scolaire, activités périscolaires.",
      },
      { property: "og:title", content: "ANGELLO School — École bilingue d'excellence à Douala" },
      {
        property: "og:description",
        content:
          "De la crèche au primaire, une éducation bilingue d'excellence à Japoma, Douala. 500+ élèves, 100% de réussite au CEP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: 500, suffix: "+", label: "Élèves épanouis" },
  { value: 100, suffix: "%", label: "Réussite au CEP" },
  { value: 25, suffix: "", label: "Enseignants dévoués" },
  { value: 3, suffix: "", label: "Bus haut standing" },
] as const;

const STRENGTHS = [
  {
    icon: Languages,
    title: "Bilinguisme total",
    desc: "Français et anglais dès la crèche, pour des enfants à l'aise partout.",
  },
  {
    icon: Award,
    title: "100% au CEP",
    desc: "Trois années consécutives de réussite totale aux examens officiels.",
  },
  {
    icon: Users,
    title: "Effectifs réduits",
    desc: "Un suivi individualisé grâce à des classes à taille humaine.",
  },
  {
    icon: ShieldCheck,
    title: "Cadre sécurisé",
    desc: "Campus clos, personnel formé et protocoles de sécurité stricts.",
  },
  {
    icon: Bus,
    title: "Transport scolaire",
    desc: "Trois bus haut standing avec accompagnateurs sur Douala.",
  },
  {
    icon: HeartHandshake,
    title: "Partenariat parents",
    desc: "Communication hebdomadaire et réunions de suivi régulières.",
  },
] as const;

const LEVEL_IMAGES: Record<string, string> = {
  creche,
  garderie: hero,
  maternelle,
  primaire,
};

function HomePage() {
  return (
    <main>
      {/* ===== Hero ===== */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Élèves souriants d'ANGELLO School dans la cour de l'école"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-28 text-center sm:py-40">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Groupe Scolaire Bilingue — Japoma, Douala
          </p>
          <h1 className="text-4xl font-bold leading-tight text-primary-foreground sm:text-6xl">
            Offrez à votre enfant une éducation{" "}
            <span className="text-gradient-gold">bilingue d'excellence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            De la crèche au primaire, ANGELLO School forme des enfants curieux, bilingues et
            confiants, dans un cadre moderne et bienveillant.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/preinscription">
                Préinscrire mon enfant <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to="/nos-niveaux">Découvrir nos niveaux</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== Chiffres clés ===== */}
      <section className="bg-brand-gradient">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 lg:grid-cols-4">
          {STATS.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold text-gold sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Ce qui nous distingue ===== */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Pourquoi Angello"
            title="Ce qui nous distingue"
            subtitle="Une école pensée pour la réussite et l'épanouissement de chaque enfant."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STRENGTHS.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Niveaux ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="De la crèche au primaire"
            title="Un parcours éducatif complet"
            subtitle="Chaque étape de la petite enfance au CEP, encadrée avec exigence et douceur."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEVELS.map((level, i) => (
              <Reveal
                key={level.slug}
                delay={i * 100}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={LEVEL_IMAGES[level.slug]}
                    alt={`Section ${level.name} à ANGELLO School`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                    {level.age}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-primary">{level.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{level.short}</p>
                  <Link
                    to="/nos-niveaux"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-gold"
                  >
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Activités ===== */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Au-delà de la classe"
            title="Activités périscolaires"
            subtitle="Sept clubs pour révéler les talents et passions de chaque enfant."
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

      {/* ===== Transport ===== */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <Reveal direction="left">
            <img
              src={bus}
              alt="Bus de ramassage scolaire haut standing d'ANGELLO School"
              loading="lazy"
              className="w-full rounded-2xl shadow-lg"
            />
          </Reveal>
          <Reveal direction="right">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Transport scolaire
            </p>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Des trajets sûrs et ponctuels, chaque jour
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Trois bus haut standing sillonnent Douala avec des accompagnateurs formés. Suivi des
              trajets, sièges adaptés et ponctualité garantie pour votre tranquillité.
            </p>
            <Button asChild variant="hero" className="mt-6">
              <Link to="/transport">
                Découvrir le transport <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ===== Témoignages ===== */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Ils nous font confiance"
            title="La parole aux parents"
            subtitle="95% de parents satisfaits — voici ce qu'ils disent d'ANGELLO School."
          />
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
          <Reveal className="mt-8 text-center">
            <Button asChild variant="outlineBrand">
              <Link to="/temoignages">Voir tous les témoignages</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ===== Galerie aperçu ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="La vie à Angello"
            title="Notre école en images"
            subtitle="Classes, activités et sourires : plongez dans le quotidien de nos élèves."
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* ===== CTA final ===== */}
      <section className="relative isolate overflow-hidden">
        <img
          src={campus.url}
          alt="Façade du campus ANGELLO School à Japoma, Douala"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center">
          <Sparkles className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Prêt à offrir le meilleur à votre enfant ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Les inscriptions pour la rentrée sont ouvertes. Les places sont limitées par classe :
            préinscrivez votre enfant dès aujourd'hui.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/preinscription">
                <GraduationCap /> Préinscrire mon enfant
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a
                href={waLink("Bonjour ANGELLO School, je souhaite obtenir des informations. Merci.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Nous écrire sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
