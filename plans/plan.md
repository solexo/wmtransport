# Website Plan for WM Transport

## Overview
Create a professional, responsive website for WM Transport, a logistics company in Casablanca, Morocco. The site will be built using React, TypeScript, Vite, and Tailwind CSS. Content in French.

## Dependencies to Add
- react-router-dom: for client-side routing
- react-helmet-async: for SEO meta tags

## Project Structure
```
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   └── QuoteForm.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Quote.tsx
│   └── Contact.tsx
├── App.tsx (updated with router)
├── main.tsx
└── index.css (updated with custom styles)
```

## Pages Details

### Home Page
- Hero section with slogan: "Transport et Logistique à Casablanca - Fiabilité et Rapidité"
- Overview of services (brief)
- Advantages: Fiabilité, Ponctualité, Sécurité
- CTA: "Demandez un devis"

### About Page
- Company presentation
- Values: Fiabilité, Ponctualité, Sécurité
- Experience in Casablanca
- Vision for Moroccan market

### Services Page
- List of services with icons:
  - Transport national et international de marchandises
  - Messagerie et livraison express
  - Manutention, chargement et déchargement
  - Solutions de transit import/export
  - Services de commissionnaire de transport
- Each with description and benefits

### Why Choose Us Page
- Fleet presentation
- Professional team
- National coverage
- Tracking technology

### Quote Page
- Form with fields: Nom, Email, Téléphone, Type de transport, Description du projet

### Contact Page
- Address: Casablanca, Maroc
- Phone: [placeholder]
- Email: [placeholder]
- Hours: [placeholder]

## Design
- Colors: Dark blue (#1e3a8a) and white
- Typography: Readable fonts (Inter or similar)
- Responsive: Mobile-first with Tailwind

## SEO
- URLs: /accueil, /a-propos, /services, /pourquoi-nous, /devis, /contact
- Meta titles and descriptions with keywords: "transport national Maroc", "logistique Casablanca", "fret international"
- H1, H2 tags appropriately

## Implementation Steps
1. Install dependencies
2. Set up routing in App.tsx
3. Create Header and Footer components
4. Implement each page
5. Add responsive styles
6. Add SEO tags
7. Test and refine