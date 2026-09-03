import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { TESTIMONIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

type Testimonial = { name: string; child: string; quote: string };

/** Initiales affichées en médaillon à la place d'une photo. */
function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="relative h-full overflow-hidden rounded-xl bg-card p-8 shadow-md transition-all duration-300 hover:shadow-lg">
      <Quote
        className="absolute -right-2 -top-2 h-20 w-20 text-gold/20"
        aria-hidden="true"
        strokeWidth={1.5}
      />
      <p className="relative text-base leading-relaxed text-foreground">« {t.quote} »</p>
      <div className="relative mt-6 flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
          {initials(t.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-semibold text-primary">{t.name}</span>
          <span className="block truncate text-sm text-muted-foreground">{t.child}</span>
        </span>
      </div>
    </article>
  );
}

/** Carousel automatique (5 s) avec flèches et pastilles de navigation. */
export function TestimonialCarousel({
  items = TESTIMONIALS.slice(0, 5),
}: {
  items?: Testimonial[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((t) => (
            <div key={t.name} className="w-full shrink-0 px-1">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Témoignage précédent"
        onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
        className="absolute -left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-colors hover:bg-gold hover:text-gold-foreground sm:-left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Témoignage suivant"
        onClick={() => setIndex((i) => (i + 1) % items.length)}
        className="absolute -right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-colors hover:bg-gold hover:text-gold-foreground sm:-right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`Aller au témoignage ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              i === index ? "w-8 bg-gold" : "w-2.5 bg-border",
            )}
          />
        ))}
      </div>
    </div>
  );
}
