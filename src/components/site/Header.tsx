import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Download } from "lucide-react";

import logo from "@/assets/angello-logo.png.asset.json";
import { NAV_LINKS, SITE, waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

/** En-tête sticky avec navigation desktop et menu hamburger mobile. */
export function Header() {
  const [open, setOpen] = useState(false);

  const brochure = waLink(
    "Bonjour ANGELLO School, je souhaite recevoir la brochure de présentation de l'école. Merci.",
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="Logo du Groupe Scolaire Bilingue ANGELLO"
            width={48}
            height={48}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold leading-tight text-primary">
              ANGELLO School
            </span>
            <span className="block truncate text-[11px] uppercase tracking-wider text-muted-foreground">
              Groupe Scolaire Bilingue
            </span>
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-primary font-semibold" }}
              inactiveProps={{ className: "text-foreground/80" }}
              className="text-sm transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outlineBrand" size="sm">
            <a href={brochure} target="_blank" rel="noopener noreferrer">
              <Download /> Brochure
            </a>
          </Button>
          <Button asChild variant="hero" size="sm">
            <Link to="/preinscription">Préinscrire mon enfant</Link>
          </Button>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-primary xl:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary font-semibold" }}
                className="border-b border-border/60 py-3 text-sm transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pb-2">
              <Button asChild variant="hero">
                <Link to="/preinscription" onClick={() => setOpen(false)}>
                  Préinscrire mon enfant
                </Link>
              </Button>
              <Button asChild variant="outlineBrand">
                <a href={brochure} target="_blank" rel="noopener noreferrer">
                  Télécharger la brochure
                </a>
              </Button>
              <p className="pt-2 text-center text-xs text-muted-foreground">{SITE.phoneDisplay}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
