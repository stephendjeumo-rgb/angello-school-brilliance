import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import hero from "@/assets/team-teachers.jpg";

import { TESTIMONIALS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TestimonialCard, TestimonialCarousel } from "@/components/site/Testimonials";

export const Route = createFileRoute("/temoignages")({
  head: () => ({
    meta: [
      { title: "Témoignages de parents — ANGELLO School Douala" },
      {
        name: "description",
        content:
          "95% de parents satisfaits : lisez les témoignages des familles d'ANGELLO School, école bilingue à Japoma, Douala.",
      },
      { property: "og:title", content: "Témoignages de parents — ANGELLO School Douala" },
      {
        property: "og:description",
        content: "Ce que les parents d'élèves disent d'ANGELLO School, de la crèche au primaire.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <main>
      <PageHero
        title="Témoignages de Parents"
        subtitle="95% de parents satisfaits — leur confiance est notre plus belle récompense."
        image={hero}
        alt="Équipe pédagogique d'ANGELLO School"
      />

      {/* Carousel vedette */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="À la une"
            title="Ils racontent leur expérience"
          />
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Tous les témoignages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle
            eyebrow="Toutes les familles"
            title="8 familles, 8 histoires"
            subtitle="De la crèche au primaire, découvrez pourquoi les parents choisissent Angello."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/preinscription">
                Écrire la vôtre <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
