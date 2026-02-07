# QuickServe IT Platform

> **Professional digital services platform for educational institutions and content creators**

A modern, full-stack web application serving two distinct domains: **Institutional Support** (schools, colleges) and **Creator Support** (YouTubers, content creators), with a shared **Portfolio** section showcasing the founder's work.

**Live Application:** [https://www.quickserveit.online/](https://www.quickserveit.online/)

---

## 🎯 About QuickServe IT

QuickServe IT is a dual-mode service platform designed to:

1. **Institutional Mode** - Provide digital support services to educational institutions (exam documentation, UDISE+ management, scholarship processing, daily tech support)
2. **Creator Mode** - Offer premium production services to content creators (video editing, motion graphics, thumbnails, shorts/reels)
3. **Portfolio** - Showcase the founder's work, philosophy, and service approach

The platform features a clean, mode-aware architecture with separate routing, data, and components for each domain while sharing core infrastructure.

---

## 🏗️ Architecture Overview

### Three Logical Domains

```
QuickServe IT Platform
├── Institutional Support (Schools, Colleges)
├── Creator Support (YouTubers, Content Creators)
└── Portfolio (Founder, About, Vision)
```

### Module Structure

```
src/
├── modules/
│   ├── core/              # Shared components & layouts
│   │   ├── components/    # FloatingNavbar, Footer, CursorLight, etc.
│   │   └── layouts/       # PageWrapper, PageHeader
│   ├── institutional/     # Institutional domain
│   │   ├── pages/         # Home, Services, Pricing, About
│   │   ├── components/    # Institutional-specific components
│   │   └── data/          # pricing.ts, services.ts (typed data)
│   ├── creator/           # Creator domain
│   │   ├── pages/         # Home, Services, Pricing, About
│   │   ├── components/    # Creator-specific components
│   │   └── data/          # pricing.ts, services.ts (typed data)
│   └── landing/           # Landing page & mode selection
│       └── components/    # Landing-specific components
├── context/               # ModeContext (institutional/creator state)
├── hooks/                 # useTranslation, custom hooks
├── lib/                   # translations.ts, utilities
├── App.tsx                # Main routing logic
└── main.tsx               # Application entry point
```

### Routing Structure

```
/                          → Landing (mode selection)
/institutional/*           → Institutional routes
  ├── /home                → Institutional home
  ├── /services            → Institutional services
  ├── /pricing             → Institutional pricing
  ├── /about               → About page (institutional context)
  └── /founder             → Founder page (institutional context)
/creator/*                 → Creator routes
  ├── /home                → Creator home
  ├── /services            → Creator services
  ├── /pricing             → Creator pricing
  ├── /about               → About page (creator context)
  └── /founder             → Founder page (creator context)
/founder                   → Shared founder page
```

---

## 🛠️ Tech Stack

**Frontend:**
- React 18.3 + TypeScript - Type-safe UI framework
- Vite - Lightning-fast build tool
- Tailwind CSS - Utility-first styling
- shadcn-ui - Accessible React components (Radix UI)
- Framer Motion - Smooth animations
- React Router - Client-side routing with nested routes

**State Management:**
- React Context API - Mode switching (institutional/creator)
- TanStack React Query - Server state management

**Internationalization:**
- Custom i18n system - English/Hindi translations
- Translation keys organized by domain

**Development:**
- ESLint - Code quality
- TypeScript - Type safety
- PostCSS - CSS transformations

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/caspermorgan/quickserveit.git
cd quickserveit

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Create optimized production build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint to check code quality
npm run dev:clean    # Kill existing processes and start fresh dev server
```

---

## 📂 Key Directories Explained

### `/modules/core/`
Shared components and layouts used across both institutional and creator modes:
- `FloatingNavbar` - Mode-aware navigation
- `Footer` - Mode-aware footer
- `CursorLight` - Custom cursor effect
- `FilmGrain` - Visual texture overlay
- `PageWrapper`, `PageHeader` - Layout components

### `/modules/institutional/` & `/modules/creator/`
Mode-specific pages, components, and **typed data files**:
- `pages/` - Full page components (Home, Services, Pricing, About)
- `components/` - Mode-specific UI components
- `data/` - **Detached data files** (pricing.ts, services.ts) with TypeScript interfaces

### `/context/ModeContext.tsx`
Global state management for mode switching:
- Tracks current mode (institutional/creator)
- Provides mode-aware utilities
- Persists mode selection

### `/lib/translations.ts`
Centralized translation system:
- English (en) and Hindi (hi) translations
- Organized by feature (pricing, services, navigation, etc.)
- Type-safe translation keys

---

## 🔧 Development Workflow

### Working with Data

**Pricing and Services data are now detached from components:**

```typescript
// Example: institutional/data/pricing.ts
export const getInstitutionalPricingData = (t: (key: string) => string) => [
  {
    id: 0,
    icon: FileText,
    label: t('pricingInstTab1Label'),
    // ... more data
  }
];
```

**To update pricing/services:**
1. Edit the data file (e.g., `institutional/data/pricing.ts`)
2. Update TypeScript interfaces if structure changes
3. Add corresponding translation keys to `lib/translations.ts`

### Adding Translations

```typescript
// lib/translations.ts
export const translations = {
  en: {
    myNewKey: 'English text',
    // ...
  },
  hi: {
    myNewKey: 'हिंदी पाठ',
    // ...
  }
};
```

### Mode-Aware Components

Components automatically adapt based on the current mode:

```tsx
import { useMode } from '@/context/ModeContext';

function MyComponent() {
  const { mode } = useMode(); // 'institutional' | 'creator'
  
  return (
    <div className={mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'}>
      {/* Mode-aware content */}
    </div>
  );
}
```

---

## 🚀 Deployment

**Platform:** Vercel  
**Status:** Production  
**URL:** [www.quickserveit.online](https://www.quickserveit.online/)

### Deployment Process
1. Push changes to `main` branch
2. Vercel automatically detects changes
3. Builds and runs checks
4. Deploys to production if all checks pass

---

## 📝 Code Standards

- **TypeScript:** Use strict typing, avoid `any`
- **Components:** Functional components with hooks
- **Styling:** Tailwind CSS utility classes
- **Naming:** PascalCase for components, camelCase for functions/variables
- **Imports:** Use absolute imports with `@/` alias
- **Data:** Keep data separate from components (use `/data` folders)

---

## 🐛 Bug Reports & Feedback

Found a bug or have a suggestion?
- Open an issue on GitHub with a clear description
- Include steps to reproduce for bugs
- Provide context and expected behavior

---

## 📄 License

This project is part of QuickServe IT's product suite. Please refer to the LICENSE file for usage terms.

---

## 🤝 Team

QuickServe IT is developed by a passionate team of developers, designers, and product specialists working together to deliver excellence.

---

**Last Updated:** February 2026  
**Repository:** [github.com/caspermorgan/quickserveit](https://github.com/caspermorgan/quickserveit)  
**Architecture Version:** 2.0 (Post-Refactor)
