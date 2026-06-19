# Rapport Complet - 2iE BioMap

## 1. Vue d'ensemble du Projet

**2iE BioMap** est une application web collaborative dédiée à la documentation et l'exploration de la biodiversité du campus de l'école 2iE (Institut International d'Ingénierie de l'Eau et de l'Énergie) à Ouagadougou, Burkina Faso.

L'application permet à la communauté de 2iE de :
- Explorer et découvrir les espèces présentes sur le campus
- Contribuer à la base de données en partageant des observations et des photos
- Consulter des statistiques sur la biodiversité
- Consulter des détails détaillés sur chaque espèce
- Participer à un effort collaboratif de conservation et sensibilisation

## 2. Objectifs du Projet

1. **Documenter** la biodiversité du campus de 2iE
2. **Engager** la communauté académique dans la conservation
3. **Éduquer** sur l'importance de la biodiversité locale
4. **Créer** une base de données collaborative de ressources naturelles
5. **Sensibiliser** aux espèces végétales et animales présentes

## 3. Stack Technologique

### Frontend
- **Framework**: Angular 21 (Standalone Components)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS v3
- **State Management**: Angular Signals
- **Routing**: Angular Router
- **Build Tool**: Angular CLI

### Backend/Infrastructure
- **Containerization**: Docker (Multi-stage build)
- **Serving**: Nginx Alpine
- **Deployment**: Render (Platform as a Service)
- **Runtime**: Node.js 22 Alpine

### Développement
- **Package Manager**: npm
- **Build**: Production-optimized Angular build
- **Compression**: Gzip

## 4. Architecture Générale

### Structure de l'Application

```
biomap-app/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── accueil/              (Page d'accueil)
│   │   │   ├── explorer/             (Galerie des espèces)
│   │   │   ├── contribution/         (Formulaire de contribution)
│   │   │   ├── stats/                (Statistiques)
│   │   │   ├── a-propos/             (À propos du projet)
│   │   │   └── details-espece/       (Détails d'une espèce)
│   │   ├── app.routes.ts             (Configuration du routage)
│   │   ├── app.component.ts          (Composant racine)
│   │   └── app.config.ts             (Configuration Angular)
│   ├── assets/                       (Images et ressources)
│   ├── styles/                       (Styles globaux)
│   ├── main.ts                       (Point d'entrée)
│   └── index.html                    (HTML principal)
├── Dockerfile                        (Configuration Docker)
├── nginx.conf                        (Configuration serveur web)
├── .dockerignore                     (Fichiers à ignorer lors du build Docker)
├── render.yaml                       (Configuration Render)
├── package.json                      (Dépendances)
├── tsconfig.json                     (Configuration TypeScript)
├── angular.json                      (Configuration Angular)
└── tailwind.config.ts               (Configuration Tailwind CSS)
```

## 5. Pages et Fonctionnalités

### 5.1 Page Accueil (`/accueil`)
**Rôle**: Point d'entrée principal de l'application

**Composants**:
- **Navbar Fixed**: Navigation persistante avec transition d'opacité au scroll
- **Hero Section**: Image du Flamboyant avec appel à l'action
- **CTA Buttons**: 
  - "Explorer la galerie" → `/explorer`
  - "+ Ajouter une observation" → `/contribution`
- **Filter Bar**: Filtres flottants (Tout, Arbres, Animaux)
- **Marquee Carousel**: Défilement automatique des espèces (2 lignes)
- **Stats Section**: Affichage des statistiques clés (247 Espèces, 1043 Photos, 89 Contributeurs, 38 Arbres +50 ans)
- **Recent Observations**: Affichage des 3 dernières observations avec badges
- **Footer**: Liens de navigation et informations

**Design**:
- Utilise le signal `scrolled` pour détecter le scroll et modifier le style de la navbar
- Animations smooth sur les cartes
- Palettes de couleurs cohérentes avec le design system

### 5.2 Page Explorer (`/explorer`)
**Rôle**: Galerie interactive pour explorer toutes les espèces

**Fonctionnalités**:
- Affichage en grille des espèces
- Filtrage par catégorie (Tous, Arbres, Animaux, Plantes)
- Recherche par nom scientifique ou commun
- Cartes avec informations de base
- Clic pour voir les détails

**Composants**:
- Navbar scrollable
- Barre de recherche et filtres
- Grille responsive
- Cartes d'espèces avec hover effects

### 5.3 Page Contribution (`/contribution`)
**Rôle**: Formulaire pour ajouter de nouvelles observations

**Fonctionnalités**:
- Formulaire structuré pour nouvelle observation
- Upload d'image
- Sélection d'espèce existante ou création nouvelle
- Localisation GPS (optionnel)
- Notes et observations

**Champs du formulaire**:
- Espèce (dropdown ou création)
- Catégorie (Arbre, Animal, Plante)
- Date d'observation
- Localisation
- Photo
- Commentaires

### 5.4 Page Statistiques (`/stats`)
**Rôle**: Visualisation des données de biodiversité

**Visualisations**:
- **Donut Chart**: Distribution des espèces par catégorie
  - Espèces: 247
  - Arbres, Animaux, Plantes
- **Bar Chart**: Activité par mois
- **Stat Cards**: Nombre total de contributeurs, photos, observations
- **Trends**: Évolution temporelle

**Technologie**:
- SVG natif pour les graphiques
- Calculs des pourcentages côté frontend
- Animations CSS pour l'apparition

### 5.5 Page À Propos (`/a-propos`)
**Rôle**: Informations sur le projet et la mission

**Sections**:
- Mission du projet
- Objectifs
- Historique de l'écosystème du campus
- Impacts et résultats
- Appel à l'action pour contribuer

**Design**:
- Image de campus en arrière-plan
- Même structure que la page Accueil
- Scroll animations
- Navbar scrollable

### 5.6 Page Détails Espèce (`/details-espece/:id`)
**Rôle**: Vue détaillée d'une espèce

**Contenu**:
- Nom commun et scientifique
- Galerie d'images
- Description détaillée
- Habitat et distribution
- Caractéristiques
- Observations récentes
- Contributeurs

## 6. Système de Design

### 6.1 Palette de Couleurs (Material Design 3)

**Couleurs Primaires**:
- Primary Container: `#B3E5FC` (Bleu clair)
- Primary Fixed: `#004E87` (Bleu foncé)
- Primary Fixed Dim: `#003F5F`

**Couleurs Secondaires**:
- Secondary Container: `#FFD280`
- Secondary Fixed: `#FF9800` (Orange)

**Couleurs Tertiaires**:
- Tertiary Container: `#A5D6A7` (Vert clair)
- Tertiary Fixed: `#2E7D32` (Vert foncé)

**Surfaces**:
- Surface: `#FAFAFA`
- Surface Container: `#F0F0F0`
- On Surface: `#1A1A1A` (Noir)
- On Primary: `#FFFFFF` (Blanc)

### 6.2 Typographie

**Títulos**:
- Hero Title: `clamp(2.5rem, 8vw, 4rem)` - 56px bold
- Section Title: `clamp(1.75rem, 5vw, 2.5rem)` - 40px bold
- Card Title: `clamp(1rem, 3vw, 1.125rem)` - 18px bold

**Body Text**:
- Body: `clamp(0.875rem, 2vw, 1rem)` - 16px
- Caption: `0.75rem` - 12px

### 6.3 Espacement (Design Tokens)

- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 32px
- `xl`: 48px

### 6.4 Éléments de Design

**Glass Panel**: Backdrop blur avec transparency
```css
backdrop-filter: blur(8px);
background-color: rgba(255, 255, 255, 0.2);
border: 1px solid rgba(255, 255, 255, 0.3);
```

**Card Hover**: Scale et shadow effects
```css
transition: all 0.3s ease;
transform: scale(1.05);
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
```

**Ambient Shadow**: Ombre douce sur les cartes
```css
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
```

## 7. Logique et Fonctionnement

### 7.1 Routing Angular

**Configuration des routes** (`app.routes.ts`):
```typescript
{
  path: 'accueil',
  component: Accueil
},
{
  path: 'explorer',
  component: Explorer
},
{
  path: 'contribution',
  component: Contribution
},
{
  path: 'stats',
  component: Stats
},
{
  path: 'a-propos',
  component: APropos
},
{
  path: 'details-espece/:id',
  component: DetailsEspece
},
{
  path: '',
  redirectTo: 'accueil',
  pathMatch: 'full'
}
```

### 7.2 State Management avec Signals

**Exemple: Scroll Detection** (Accueil et À Propos)

```typescript
export class Accueil {
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 50);
  }
}
```

Cette logique permet une transition fluide de la navbar :
- Transparent quand scroll = 0
- Semi-opaque avec backdrop blur quand scrollY > 50px

### 7.3 Composants Standalone

Tous les composants utilisent `standalone: true`:
```typescript
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterLink, ...],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss'
})
export class Accueil { }
```

Avantages:
- Pas de NgModule nécessaire
- Meilleur tree-shaking
- Imports explicites

### 7.4 Animations

**Marquee Scroll** (Galerie Accueil):
```css
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

@keyframes scroll-right {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}
```

**Hover Pause**: 
```css
group-hover:[animation-play-state:paused]
```

## 8. Configuration Docker

### 8.1 Multi-Stage Build

**Avantages**:
- Stage 1 (Build): Compile l'app Angular avec Node.js
- Stage 2 (Runtime): Serveur Nginx léger, sans Node.js
- Réduit la taille de l'image finale (~50% de réduction)

**Dockerfile**:
```dockerfile
# Stage 1: Build
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/biomap-app/browser /usr/share/nginx/html
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
```

### 8.2 Configuration Nginx

**Optimisations**:
- Compression Gzip pour texte, CSS, JS, JSON
- Cache long-term pour assets (1 an)
- Cache short-term pour index.html (no-cache)
- SPA routing avec `try_files`
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Health check endpoint `/health`

**SPA Routing**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
  add_header Cache-Control "no-cache, no-store, must-revalidate" always;
}
```

Cela garantit que toutes les routes inconnues redirigent vers index.html pour que Angular router prenne en charge.

## 9. Déploiement

### 9.1 Deployment sur Render

**Plateforme**: Render.com (PaaS gratuit avec limitations)

**Processus**:
1. Connexion GitHub à Render
2. Render détecte `Dockerfile` et `render.yaml`
3. Build: `docker build -t biomap-app .`
4. Push: Image envoyée au registre Render
5. Deploy: Conteneur lancé sur serveur Render
6. Health Check: Endpoint `/health` vérifié toutes les 30s

**Configuration** (`render.yaml`):
```yaml
services:
  - type: web
    name: biomap-app
    runtime: docker
    plan: free
    healthCheckPath: /health
    envVars:
      - key: NODE_ENV
        value: production
```

**URL de production**:
- `https://biomap-app.onrender.com`

### 9.2 Optimisations Production

- Angular build avec `--configuration production`
- Bundle size: ~350 KB (compressé ~85 KB)
- Tree-shaking automatique
- Minification + Uglification du JavaScript
- Compression des CSS

## 10. Données et Espèces

### 10.1 Espèces Documentées

**Total**: 247 espèces

**Catégories**:
- **Arbres**: Baobab (Adansonia digitata), Flamboyant, etc.
- **Animaux**: Oiseaux (Weaver, Martin-pêcheur), Reptiles (Chameleon, Agama), etc.
- **Plantes**: Bougainvillea, Cassia, Hibiscus, etc.

**Informations par espèce**:
- Nom commun (français)
- Nom scientifique (latin)
- Catégorie
- Images
- Description
- Habitat
- Nombre d'observations
- Contributeurs

### 10.2 Structure de Données

```json
{
  "id": "string",
  "commonName": "string",
  "scientificName": "string",
  "category": "Arbre|Animal|Plante",
  "images": ["url"],
  "description": "string",
  "habitat": "string",
  "observations": number,
  "contributors": ["name"],
  "discoveryDate": "date"
}
```

## 11. Statistiques

### Métriques Clés
- **247 Espèces** documentées
- **1043 Photos** partagées
- **89 Contributeurs** actifs
- **38 Arbres +50 ans** identifiés
- **Campus**: 2iE, Ouagadougou

### Graphiques
1. **Distribution par catégorie** (Donut chart)
2. **Activité mensuelle** (Bar chart)
3. **Contributeurs top** (Ranking)

## 12. Guide Développement

### Installation Locale

```bash
# Cloner le repo
git clone <repo-url>
cd biomap-app

# Installer les dépendances
npm install

# Lancer le serveur développement
npm start

# L'app est accessible à http://localhost:4200
```

### Build Production

```bash
# Build Angular
npm run build

# Build Docker
docker build -t biomap-app .

# Lancer le conteneur
docker run -p 3000:3000 biomap-app
```

### Structure des Fichiers

Chaque page suit cette structure:
```
pages/accueil/
├── accueil.ts          (Composant TypeScript)
├── accueil.html        (Template)
├── accueil.scss        (Styles spécifiques)
└── accueil.spec.ts     (Tests)
```

## 13. Sécurité

### Headers Sécurité (Nginx)
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

### Bonnes Pratiques
- Pas de données sensibles en frontend
- Routes statiques uniquement
- Validation côté frontend + backend
- HTTPS sur Render

## 14. Évolutivité Future

### Améliorations Possibles
1. **Backend API**: Ajouter Node.js/Express pour données dynamiques
2. **Base de données**: PostgreSQL pour stocker observations
3. **Authentification**: Login pour contributeurs
4. **Maps**: Intégrer Leaflet/Mapbox pour localiser espèces
5. **PWA**: Progressive Web App pour offline access
6. **Export**: PDF/Excel des données
7. **Notifications**: Email pour nouvelles observations

## 15. Conclusion

2iE BioMap est une application web moderne et responsive dédiée à la documentation collaborative de la biodiversité. Elle utilise les dernières technologies Angular pour une UX fluide, avec un design system cohérent basé sur Material Design 3. Son déploiement Docker garantit une portabilité et scalabilité optimales.

Le projet démontre les capacités du développement frontend moderne avec une architecture cleanet maintenable.

---

**Version**: 1.0  
**Dernière mise à jour**: 2026-06-19  
**Auteur**: 2iE BioMap Team  
**Localisation**: Ouagadougou, Burkina Faso
