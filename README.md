# Angello School Brilliance

Crée un site web premium et professionnel pour "ANGELLO School" (Groupe Scolaire Bilingue Angello), un établissement scolaire privé situé à Japoma, Douala, Cameroun.

## CONTEXTE
- École bilingue (Français/Anglais) créée en 2023
- Niveaux: Crèche, Garderie, Maternelle, Primaire
- 500+ élèves, 25 enseignants qualifiés
- 100% de réussite au CEP depuis 3 ans
- 95% de satisfaction parentale
- 3 bus de transport haut standing
- Activités périscolaires: sports (football, handball, natation), arts (musique, danse, dessin, théâtre), robotique/coding, clubs de lecture, jardinage, élevage

## DESIGN SYSTEM

### Palette de couleurs
- Primaire: Bleu marine profond #1e3a8a
- Secondaire: Or/Doré #fbbf24
- Fond: Blanc pur #ffffff
- Fond alternatif: Gris très clair #f8fafc
- Texte principal: Gris foncé #1f2937
- Texte secondaire: Gris moyen #6b7280

### Typographie
- Titres (H1, H2, H3): Playfair Display (serif élégant)
- Corps de texte: Inter ou Poppins (sans-serif moderne)
- Accents: Utiliser le gras pour les chiffres clés

### Style visuel
- Design épuré avec beaucoup d'espace blanc
- Cards avec ombres subtiles (shadow-md, hover:shadow-lg)
- Bordures arrondies (rounded-lg, rounded-xl)
- Animations fluides au scroll (fade-in, slide-up)
- Transitions douces (transition-all duration-300)

## STRUCTURE DU SITE

### 1. HEADER (Navigation)
- Logo ANGELLO School à gauche
- Menu: Accueil | À Propos | Nos Niveaux | Vie Scolaire | Transport | Galerie | Témoignages | Contact
- Bouton CTA principal: "Préinscrire mon enfant" (fond bleu, texte blanc, hover: fond or)
- Bouton secondaire: "Télécharger la brochure" (outline bleu)
- Menu hamburger pour mobile

### 2. HERO SECTION (Page d'accueil)
- Grande photo immersive de l'école (placeholder haute qualité: enfants africains souriants en uniforme dans une cour d'école moderne)
- Overlay semi-transparent bleu marine
- Phrase d'accroche: "À Angello, vos enfants apprennent deux langues. Mais surtout, ils apprennent à grandir."
- Sous-titre: "École bilingue d'excellence à Douala - 100% de réussite au CEP depuis 3 ans"
- Deux boutons CTA:
  * "Préinscrire mon enfant" (primaire, bleu)
  * "Découvrir notre école" (secondaire, outline blanc)
- Badge flottant: "Depuis 2023 | 500+ élèves | 100% réussite"

### 3. SECTION CHIFFRES CLÉS (Animations)
- 4 cards avec icônes et animations de comptage au scroll:
  * 🎓 500+ élèves épanouis
  *  100% de réussite au CEP (3 ans)
  * 👨‍ 25 enseignants qualifiés
  *  3 bus de transport
- Fond bleu marine, texte blanc, icônes dorées
- Animation: les chiffres comptent de 0 à la valeur finale

### 4. SECTION "POURQUOI ANGELLO?"
- Titre: "Ce qui nous distingue"
- 6 cards en grille (3x2 sur desktop, 2x3 sur tablet, 1x6 sur mobile):
  * Excellence académique (100% réussite)
  * Bilinguisme réel (Français + Anglais)
  * Activités périscolaires variées (5+)
  * Transport sécurisé (3 bus haut standing)
  * Équipe passionnée (25 enseignants)
  * Environnement bienveillant
- Chaque card: icône dorée, titre, description courte
- Animation: apparition au scroll avec délai progressif

### 5. SECTION NOS NIVEAUX
- Titre: "Un parcours éducatif complet"
- 4 cards horizontales (image à gauche, texte à droite):
  * Crèche (0-3 ans): "Un environnement sécurisé et stimulant"
  * Garderie (3-5 ans): "Éveil et socialisation"
  * Maternelle (5-6 ans): "Apprentissage par le jeu"
  * Primaire (6-12 ans): "Excellence académique et bilinguisme"
- Chaque card: photo placeholder, titre, description, bouton "En savoir plus"
- Animation: slide-in depuis la gauche/droite alternée

### 6. SECTION ACTIVITÉS PÉRISCOLAIRES
- Titre: "Au-delà des cours"
- Grille de 7 cards (icônes + titre):
  * ⚽ Sports (football, handball, natation)
  * 🎨 Arts (musique, danse, dessin, théâtre)
  * 🤖 Robotique & Coding
  * 📚 Clubs de lecture
  * 🌱 Jardinage & Agriculture
  * 🐄 Élevage
  * 🌍 Langues supplémentaires
- Design: cards colorées avec hover effect

### 7. SECTION TRANSPORT
- Titre: "Transport scolaire sécurisé"
- Layout: image à gauche (bus scolaire moderne), texte à droite
- Points clés:
  * Flotte de 3+ bus haut standing
  * Chauffeurs qualifiés et chevronnés
  * Couverture étendue à Douala
  * Sécurité maximale (ceintures, accompagnement)
- Bouton CTA: "En savoir plus sur le transport" → ouvre modal WhatsApp avec message pré-rempli: "Bonjour ANGELLO School, je souhaite obtenir des informations sur le transport scolaire. Merci."

### 8. SECTION TÉMOIGNAGES (Carousel)
- Titre: "Ils nous font confiance"
- Carousel automatique (change toutes les 5 secondes) + navigation manuelle (flèches + dots)
- 4-5 témoignages de parents:
  * Photo du parent (placeholder)
  * Nom et prénom
  * Parent de [Nom de l'enfant], classe de [Niveau]
  * Citation: "Depuis que notre enfant est à Angello, il s'épanouit et excelle. L'équipe pédagogique est exceptionnelle."
- Design: cards blanches avec ombre, guillemets dorés en arrière-plan

### 9. SECTION GALERIE (Masonry + Lightbox)
- Titre: "La vie à Angello en images"
- Grille masonry (3 colonnes desktop, 2 tablet, 1 mobile)
- 12-15 photos placeholders (enfants en classe, activités sportives, arts, sorties, événements)
- Filtres par catégorie: Tous | Crèche | Maternelle | Primaire | Activités | Événements
- Lightbox: clic sur image → ouverture plein écran avec navigation (flèches + close)
- Animation: fade-in au scroll

### 10. SECTION APPEL À L'ACTION
- Fond: dégradé bleu marine vers bleu plus clair
- Titre: "Prêt à rejoindre la famille Angello?"
- Sous-titre: "Inscrivez votre enfant dès maintenant et offrez-lui un avenir brillant"
- Deux boutons:
  * "Préinscrire mon enfant" (fond or, texte bleu)
  * "Télécharger la brochure" (outline blanc)

### 11. FOOTER
- 4 colonnes:
  * Colonne 1: Logo ANGELLO + description courte + réseaux sociaux (Facebook, LinkedIn, WhatsApp avec icônes)
  * Colonne 2: Liens rapides (À Propos, Nos Niveaux, Vie Scolaire, Transport, Contact)
  * Colonne 3: Contact (Adresse: Japoma, Douala | Téléphone: [+237 XXX XXX XXX] | Email: [contact@angello-school.com])
  * Colonne 4: Newsletter (champ email + bouton "S'abonner")
- Bottom bar: © 2024 ANGELLO School. Tous droits réservés. | Mentions légales | Politique de confidentialité

## PAGES DÉDIÉES

### PAGE "PRÉINSCRIPTION"
- URL: /preinscription
- Formulaire complet avec les champs:
  * Nom complet du parent *
  * Téléphone *
  * Email
  * Nom de l'enfant *
  * Âge de l'enfant *
  * Niveau souhaité (dropdown: Crèche/Garderie/Maternelle/Primaire) *
  * Classe spécifique (dropdown dynamique selon niveau)
  * Nombre d'enfants à inscrire *
  * Transport scolaire nécessaire? (Oui/Non) *
  * Comment avez-vous connu Angello? (dropdown: Réseaux sociaux, Bouche à oreille, Recherche Google, Autre)
  * Message complémentaire (textarea)
- Bouton "Envoyer via WhatsApp" → génère un message pré-formaté et ouvre WhatsApp avec le numéro de l'école
- Message WhatsApp formaté: "Bonjour ANGELLO School, je souhaite préinscrire mon enfant [Nom de l'enfant], âgé de [Âge] ans, en [Niveau/Classe]. Nombre d'enfants: [X]. Transport: [Oui/Non]. Contact: [Téléphone]. Merci de me recontacter pour la suite de la procédure."
- Design: formulaire en 2 colonnes sur desktop, 1 colonne sur mobile
- Sidebar: résumé des avantages Angello + photo de l'école

### PAGE "À PROPOS"
- Section Hero: photo de l'équipe pédagogique
- Section Histoire: "Créée en 2023, ANGELLO School est née de la vision de..."
- Section Mission & Valeurs: 4 cards (Excellence, Bienveillance, Innovation, Ouverture internationale)
- Section Équipe: grille de photos des enseignants (placeholders) avec nom et fonction
- Section Projet pédagogique: texte détaillé sur l'approche bilingue et innovante

### PAGE "NOS NIVEAUX"
- Une section détaillée par niveau (Crèche, Garderie, Maternelle, Primaire)
- Pour chaque niveau:
  * Photo représentative
  * Tranche d'âge
  * Objectifs pédagogiques
  * Programme détaillé (liste à puces)
  * Horaires
  * Effectif par classe
  * Tarif (optionnel, ou "Nous consulter")

### PAGE "VIE SCOLAIRE"
- Section Activités périscolaires (détaillée avec photos)
- Section Événements scolaires (fêtes, sorties, compétitions)
- Section Visites d'entreprises et sorties éducatives
- Galerie d'images

### PAGE "TRANSPORT"
- Hero: photo de bus scolaire moderne
- Section "Notre flotte": 3+ bus haut standing (photos + caractéristiques)
- Section "Sécurité": ceintures, chauffeurs qualifiés, accompagnement
- Section "Zones couvertes": carte ou liste des quartiers desservis
- Section "Horaires": tableau des horaires de ramassage/dépose
- Bouton CTA: "Poser une question sur le transport" → WhatsApp avec message pré-rempli

### PAGE "GALERIE"
- Version étendue de la section galerie de l'accueil
- Plus de photos (20-30)
- Filtres par catégorie
- Lightbox avec navigation

### PAGE "TÉMOIGNAGES"
- Version étendue avec 8-10 témoignages
- Carousel + grille
- Option d'ajouter des vidéos témoignages plus tard

### PAGE "CONTACT"
- Formulaire de contact classique (nom, email, téléphone, sujet, message)
- Informations de contact (adresse, téléphone, email, horaires)
- Google Maps intégrée avec localisation Japoma, Douala
- Bouton WhatsApp flottant

## FONCTIONNALITÉS TECHNIQUES

### Bouton WhatsApp Flottant
- Position: fixed, bottom-right (20px from bottom, 20px from right)
- Icône WhatsApp verte (#25D366) avec animation pulse
- Au clic: ouvre WhatsApp avec message pré-rempli: "Bonjour ANGELLO School, je souhaite obtenir des informations. Merci."
- Numéro: [+237 XXX XXX XXX] (à remplacer)

### Animations
- Fade-in au scroll pour toutes les sections
- Slide-up pour les cards
- Comptage animé pour les chiffres clés
- Hover effects sur les boutons et cards
- Carousel automatique pour les témoignages
- Lightbox pour la galerie

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menu hamburger sur mobile
- Grilles adaptatives
- Images responsive

### SEO
- Balises meta optimisées
- Structure sémantique (header, main, section, footer)
- Alt text sur toutes les images
- URLs propres (/preinscription, /a-propos, etc.)

## PLACEHOLDERS
- Utiliser des images haute qualité d'Unsplash ou Pexels représentant:
  * Enfants africains souriants en uniforme scolaire
  * Salles de classe modernes et lumineuses
  * Activités sportives et artistiques
  * Bus scolaires modernes
  * Enseignants bienveillants
- Format: WebP pour performance
- Dimensions optimisées

## INSTRUCTIONS FINALES
- Code propre et bien commenté
- Composants réutilisables
- Performance optimisée (lazy loading images)
- Accessibilité (contrastes, aria-labels)
- Testé sur tous les navigateurs modernes

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5c2f3dc2-89e8-4ea1-a251-41910362e2b0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
