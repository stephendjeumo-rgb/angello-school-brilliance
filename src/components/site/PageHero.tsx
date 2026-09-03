/** Bandeau d'en-tête utilisé par les pages intérieures. */
export function PageHero({
  title,
  subtitle,
  image,
  alt,
}: {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
