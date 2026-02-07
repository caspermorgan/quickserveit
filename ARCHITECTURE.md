# QuickServe IT - Architecture & Development Rules

**Version:** 1.0  
**Last Updated:** February 7, 2026  
**Status:** Production Ready

---

## 🏗️ Project Architecture

QuickServe IT is a **multi-world platform** serving three distinct audiences:
1. **Institutional World** - Schools, colleges, and educational institutions
2. **Creator World** - Content creators, YouTubers, and digital artists
3. **Portfolio World** - Showcase of our work and founder's vision

---

## 📋 STRICT DEVELOPMENT RULES

### ⚠️ Rule 1: Component Organization - NEVER Mix Business Logic with UI Primitives

**DO NOT** put business components in `src/components/` (root).

**✅ CORRECT:**
```
src/components/ui/          ← ONLY Shadcn UI primitives (button, card, dialog, etc.)
src/modules/institutional/  ← Institutional business logic
src/modules/creator/        ← Creator business logic
src/modules/core/           ← Shared components (Navbar, Footer, etc.)
```

**❌ WRONG:**
```
src/components/PricingCard.tsx     ← NO! This is business logic
src/components/ServiceCard.tsx     ← NO! This is business logic
src/components/Navbar.tsx          ← NO! This should be in core
```

---

### 🏫 Rule 2: Institutional World - Schools & Education

**Location:** `src/modules/institutional/`

**Structure:**
```
institutional/
├── pages/          ← Home, Services, Pricing, About, Contact
├── components/     ← Institutional-specific components
└── data/           ← Pricing data, services data (JSON/TS)
```

**When to use:**
- School documentation services
- Educational institution pricing
- Institutional contact forms
- Academic service offerings

---

### 🎬 Rule 3: Creator World - Video & Content Creation

**Location:** `src/modules/creator/`

**Structure:**
```
creator/
├── pages/          ← Creator-specific pages (About, etc.)
├── components/     ← Creator-specific components
└── data/           ← Creator pricing, services (JSON/TS)
```

**When to use:**
- Video editing services
- Content creation pricing
- Creator-specific features
- YouTube/social media services

**Note:** Creator pages often **share components** with institutional (e.g., Services.tsx, Pricing.tsx) but render different content based on `mode` context.

---

### 🔧 Rule 4: Core/Shared Logic - Universal Components

**Location:** `src/modules/core/`

**Structure:**
```
core/
├── components/     ← FloatingNavbar, Footer, CursorLight, FilmGrain
├── layouts/        ← PageWrapper, PageHeader
└── utils/          ← Shared utilities
```

**What goes here:**
- Navigation (FloatingNavbar, MobileNav)
- Footer
- Visual effects (CursorLight, FilmGrain, ParticleCanvas)
- Layout wrappers
- Authentication components (future)
- Analytics utilities

**DO NOT** put mode-specific business logic here.

---

### 📊 Rule 5: Data-Driven Content - EDIT DATA, NOT COMPONENTS

**CRITICAL:** To update pricing or services, **EDIT THE DATA FILES**, not the React components.

**✅ CORRECT Workflow:**

1. **Update Pricing:**
   ```
   Edit: src/modules/institutional/data/pricing.ts
   Edit: src/modules/creator/data/pricing.ts
   ```

2. **Update Services:**
   ```
   Edit: src/modules/institutional/data/services.ts
   Edit: src/modules/creator/data/services.ts
   ```

3. **Component automatically reflects changes** (no code changes needed)

**❌ WRONG:**
```typescript
// DON'T hardcode data in components!
const PricingCard = () => {
  return <div>₹5,000</div>; // ❌ NO!
};
```

**✅ RIGHT:**
```typescript
// Data comes from factory functions
const tabs = getInstitutionalPricingData(t);
const currentTab = tabs[activeTab];
// Component renders data dynamically
```

---

## 🗂️ Directory Structure

```
quickserveit/
├── src/
│   ├── components/ui/          ← Shadcn primitives ONLY
│   ├── modules/
│   │   ├── institutional/      ← School/Education world
│   │   ├── creator/            ← Video/Creator world
│   │   ├── portfolio/          ← Portfolio world
│   │   ├── core/               ← Shared components
│   │   └── landing/            ← Landing page
│   ├── pages/                  ← Shared legal pages (Terms, Privacy)
│   ├── context/                ← Global context (Mode, Language)
│   ├── hooks/                  ← Custom hooks
│   └── utils/                  ← Utilities
├── public/                     ← Static assets
└── ARCHITECTURE.md             ← This file
```

---

## 🎨 Mode System

The platform uses a **mode context** to switch between worlds:

```typescript
type Mode = 'institutional' | 'creator' | 'portfolio';
```

**How it works:**
1. User selects mode on landing page
2. `ModeContext` stores the current mode
3. Components render mode-specific content:
   ```typescript
   const data = mode === 'institutional' 
     ? getInstitutionalData(t)
     : getCreatorData(t);
   ```

**Routing:**
- Institutional: `/institutional/*`
- Creator: `/creator/*`
- Portfolio: `/portfolio`

---

## 🌐 Translation System

**Location:** `src/locales/`

**Languages:** English (en), Hindi (hi)

**How to add translations:**
1. Add key to `en.json`
2. Add Hindi translation to `hi.json`
3. Use in components: `const { t } = useTranslation(); t('yourKey')`

---

## 🚀 Deployment Checklist

Before deploying:
1. ✅ Run `npm run build` - Must pass with zero errors
2. ✅ Run `npm run lint` - Fix critical errors
3. ✅ Test all routes in both modes
4. ✅ Verify translations (EN + Hindi)
5. ✅ Check mobile responsiveness
6. ✅ Clear browser cache

---

## 🔒 What NOT to Do

1. ❌ **DO NOT** put business components in `src/components/`
2. ❌ **DO NOT** hardcode pricing/services in components
3. ❌ **DO NOT** mix institutional and creator logic in the same file
4. ❌ **DO NOT** edit Shadcn UI components directly (use Tailwind classes)
5. ❌ **DO NOT** skip the mode context when building new features

---

## 📝 Adding New Features

### Adding a New Institutional Service:
1. Edit `src/modules/institutional/data/services.ts`
2. Add service object with icon, title, description, features
3. Component auto-renders it

### Adding a New Pricing Plan:
1. Edit `src/modules/institutional/data/pricing.ts` or `creator/data/pricing.ts`
2. Add plan to the appropriate tab
3. Component auto-renders it

### Adding a New Page:
1. Create in appropriate module: `modules/institutional/pages/NewPage.tsx`
2. Add route in `App.tsx`: `<Route path="/institutional/newpage" element={...} />`
3. Add link in `FloatingNavbar.tsx` and `MobileNav.tsx`

---

## 🎯 Key Principles

1. **Separation of Concerns** - Business logic stays in modules
2. **Data-Driven** - Content comes from data files, not hardcoded
3. **Mode-Aware** - Components adapt to institutional/creator context
4. **Reusable** - Shared components in core, specific ones in modules
5. **Maintainable** - Clear structure makes updates easy

---

## 📞 Support

For questions about this architecture:
- Review this document first
- Check existing patterns in the codebase
- Follow the established module structure

**Remember:** When in doubt, follow the existing patterns. Consistency is key.

---

**Status:** ✅ Production Ready  
**Last Major Refactor:** February 7, 2026  
**Architecture Version:** 1.0
