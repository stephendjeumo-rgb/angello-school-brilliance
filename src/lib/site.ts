/**
 * Données et constantes du site ANGELLO School.
 * Centralisées ici pour être réutilisées par toutes les pages.
 */

export const SITE = {
  name: "ANGELLO School",
  fullName: "Groupe Scolaire Bilingue ANGELLO",
  tagline: "École bilingue d'excellence à Douala",
  address: "Japoma, Douala — Cameroun",
  phoneDisplay: "+237 693 688 528",
  /** Format international sans espaces ni "+" pour les liens wa.me */
  whatsapp: "237693688528",
  email: "contact@angello-school.com",
  hours: "Lundi – Vendredi : 7h00 – 17h30 | Samedi : 8h00 – 12h00",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
};

/** Construit un lien WhatsApp avec message pré-rempli. */
export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Accueil", to: "/" },
  { label: "À Propos", to: "/a-propos" },
  { label: "Nos Niveaux", to: "/nos-niveaux" },
  { label: "Vie Scolaire", to: "/vie-scolaire" },
  { label: "Transport", to: "/transport" },
  { label: "Galerie", to: "/galerie" },
  { label: "Témoignages", to: "/temoignages" },
  { label: "Contact", to: "/contact" },
] as const;

export const LEVELS = [
  {
    slug: "creche",
    name: "Crèche",
    age: "0 – 3 ans",
    short: "Un environnement sécurisé et stimulant",
    objectives:
      "Accueil des tout-petits dans un cadre chaleureux, sécurisé et adapté à leur rythme, avec un encadrement individualisé.",
    program: [
      "Éveil sensoriel et motricité libre",
      "Comptines bilingues français / anglais",
      "Sieste, repas et hygiène encadrés",
      "Suivi quotidien communiqué aux parents",
    ],
    schedule: "7h00 – 17h00",
    size: "12 enfants par encadrante",
  },
  {
    slug: "garderie",
    name: "Garderie",
    age: "3 – 5 ans",
    short: "Éveil et socialisation",
    objectives:
      "Apprendre à vivre ensemble, développer l'autonomie et découvrir les premières notions par le jeu.",
    program: [
      "Jeux collectifs et coins d'activités",
      "Initiation à l'anglais oral",
      "Graphisme, chants et danses",
      "Ateliers de motricité globale",
    ],
    schedule: "7h00 – 16h30",
    size: "18 enfants par classe",
  },
  {
    slug: "maternelle",
    name: "Maternelle",
    age: "5 – 6 ans",
    short: "Apprentissage par le jeu",
    objectives:
      "Préparer sereinement l'entrée au primaire : lecture, écriture, nombres et confiance en soi.",
    program: [
      "Pré-lecture et pré-écriture bilingues",
      "Découverte des nombres et des formes",
      "Arts plastiques, musique et théâtre",
      "Initiation au numérique éducatif",
    ],
    schedule: "7h30 – 16h00",
    size: "22 élèves par classe",
  },
  {
    slug: "primaire",
    name: "Primaire",
    age: "6 – 12 ans",
    short: "Excellence académique et bilinguisme",
    objectives:
      "Maîtriser les fondamentaux dans les deux langues et développer l'esprit critique jusqu'au CEP.",
    program: [
      "Programme officiel francophone et anglophone",
      "Mathématiques, sciences et TIC",
      "Robotique et coding hebdomadaires",
      "Préparation intensive au CEP / FSLC",
    ],
    schedule: "7h30 – 15h30",
    size: "25 élèves par classe",
  },
] as const;

export const CLASSES_BY_LEVEL: Record<string, string[]> = {
  Crèche: ["Crèche petits", "Crèche grands"],
  Garderie: ["Garderie 1", "Garderie 2"],
  Maternelle: ["Petite section", "Moyenne section", "Grande section"],
  Primaire: ["SIL / Class 1", "CP", "CE1", "CE2", "CM1", "CM2"],
};

export const TESTIMONIALS = [
  {
    name: "Mireille Ngo Bassong",
    child: "Enfant : Emma, Grande section",
    quote:
      "Depuis qu'Emma est à Angello, elle s'épanouit et excelle. L'équipe pédagogique est exceptionnelle et vraiment à l'écoute.",
  },
  {
    name: "Serge Kamdem",
    child: "Enfant : Junior, CM2",
    quote:
      "Mon fils est passé du français seul à un vrai bilinguisme en deux ans. Le suivi personnalisé fait toute la différence.",
  },
  {
    name: "Anne-Marie Tchoumi",
    child: "Enfants : Léa et Noah, Maternelle & CE1",
    quote:
      "Le transport est ponctuel et sécurisé, un vrai soulagement pour nous. Les enfants adorent leurs journées à l'école.",
  },
  {
    name: "Patrick Essomba",
    child: "Enfant : Divine, CP",
    quote:
      "Les activités périscolaires, surtout la robotique, ont révélé une curiosité que je ne soupçonnais pas chez ma fille.",
  },
  {
    name: "Clarisse Mbala",
    child: "Enfant : Ryan, Crèche",
    quote:
      "Confier un tout-petit n'est jamais simple. À Angello, la bienveillance des encadrantes m'a immédiatement rassurée.",
  },
  {
    name: "Georges Fotso",
    child: "Enfant : Sarah, CM1",
    quote:
      "100% de réussite au CEP, ce n'est pas un slogan : c'est le fruit d'un travail rigoureux et régulier.",
  },
  {
    name: "Nadège Ekwalla",
    child: "Enfant : Yann, CE2",
    quote:
      "Les enseignants communiquent chaque semaine sur les progrès. On se sent vraiment partenaires de l'école.",
  },
  {
    name: "Hervé Njoya",
    child: "Enfants : Ines et Kevin, Garderie & SIL",
    quote:
      "Un cadre propre, moderne et coloré où les enfants ont envie d'aller chaque matin. Nous recommandons sans hésiter.",
  },
];

export const ACTIVITIES = [
  {
    emoji: "⚽",
    title: "Sports",
    desc: "Football, handball et natation encadrés par des moniteurs diplômés.",
  },
  {
    emoji: "🎨",
    title: "Arts",
    desc: "Musique, danse, dessin et théâtre pour libérer la créativité.",
  },
  {
    emoji: "🤖",
    title: "Robotique & Coding",
    desc: "Initiation à la logique, au montage et à la programmation.",
  },
  {
    emoji: "📚",
    title: "Clubs de lecture",
    desc: "Lecture plaisir en français et en anglais, concours d'éloquence.",
  },
  {
    emoji: "🌱",
    title: "Jardinage",
    desc: "Potager pédagogique : semer, entretenir, récolter, comprendre.",
  },
  {
    emoji: "🐄",
    title: "Élevage",
    desc: "Mini-ferme scolaire pour apprendre le soin et la responsabilité.",
  },
  {
    emoji: "🌍",
    title: "Langues supplémentaires",
    desc: "Ateliers d'ouverture à d'autres langues et cultures.",
  },
];
