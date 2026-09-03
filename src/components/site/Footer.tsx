import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

import logo from "@/assets/angello-logo.png.asset.json";
import { SITE, waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const QUICK_LINKS = [
  { label: "À Propos", to: "/a-propos" },
  { label: "Nos Niveaux", to: "/nos-niveaux" },
  { label: "Vie Scolaire", to: "/vie-scolaire" },
  { label: "Transport", to: "/transport" },
  { label: "Contact", to: "/contact" },
] as const;

/** Pied de page à 4 colonnes + barre légale. */
export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logo ANGELLO School"
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 rounded-lg bg-background p-1"
            />
            <span className="font-display text-lg font-bold">ANGELLO School</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            Groupe Scolaire Bilingue à Japoma, Douala. De la crèche au primaire, nous formons des
            enfants curieux, bilingues et confiants.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook ANGELLO School"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn ANGELLO School"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={waLink("Bonjour ANGELLO School, je souhaite obtenir des informations. Merci.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ANGELLO School"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Liens rapides</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {SITE.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:+${SITE.whatsapp}`} className="hover:text-gold">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Newsletter</h3>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Recevez les actualités et les dates clés de l'école.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
                toast.error("Veuillez saisir une adresse email valide.");
                return;
              }
              toast.success("Merci ! Votre inscription a bien été prise en compte.");
              setEmail("");
            }}
          >
            <Input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              aria-label="Votre adresse email"
              className="border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button type="submit" variant="gold" size="icon" aria-label="S'abonner">
              <Send />
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ANGELLO School. Tous droits réservés.</p>
          <p className="flex gap-4">
            <Link to="/contact" className="hover:text-gold">
              Mentions légales
            </Link>
            <Link to="/contact" className="hover:text-gold">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
