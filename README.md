# QuickServeIT - Professional Service Management Platform

A modern, full-stack web application designed for efficient service management and delivery. Built by a dedicated team of developers passionate about creating seamless user experiences.

## 🎯 About QuickServeIT

QuickServeIT is a comprehensive platform developed to streamline service operations, improve customer engagement, and provide real-time insights into service delivery. Whether you're managing a service business or looking for reliable service providers, QuickServeIT bridges the gap with an intuitive interface and robust backend architecture.

**Live Application:** [https://www.quickserveit.online/](https://www.quickserveit.online/)

## 🛠️ Tech Stack

We chose a modern, proven tech stack to ensure scalability, performance, and maintainability:

- **Frontend:**
  - React 18.3 - Modern UI framework for building interactive interfaces
  - TypeScript - Type-safe JavaScript for better code reliability
  - Vite - Lightning-fast build tool and dev server
  - Tailwind CSS - Utility-first CSS framework for rapid UI development
  - shadcn-ui - High-quality, accessible React components built on Radix UI
  - TanStack React Query - Advanced server state management
  - React Router - Client-side routing

- **Development:**
  - ESLint - Code quality and consistency
  - PostCSS - CSS transformations and optimizations
  - Bun - Fast all-in-one JavaScript runtime (package management)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher) and npm installed on your system
- Basic familiarity with JavaScript/TypeScript and React
- Git for cloning the repository

### Installation & Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/caspermorgan/quickserveit.git
   cd quickserveit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Building for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 📝 Development Workflow

### Working with the Codebase

We follow standard Git workflow practices:

1. **Create a feature branch** from `main`
2. **Make your changes** and test thoroughly locally
3. **Commit with descriptive messages** explaining the "why" and "what"
4. **Push and create a Pull Request** with clear descriptions
5. **Code review** before merging to main

### Project Structure

```
src/
├── components/    # Reusable React components
├── pages/         # Page components and routes
├── context/       # React context for state management
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and helpers
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🔧 Editing Code

### Option 1: Local Development (Recommended)

Clone the repository and work locally with your preferred IDE:

```bash
git clone https://github.com/caspermorgan/quickserveit.git
cd quickserveit
npm install
npm run dev
```

After making changes, push them to the repository:

```bash
git add .
git commit -m "Feature: Brief description of changes"
git push origin your-branch-name
```

### Option 2: GitHub Web Editor

For quick fixes or documentation updates:
1. Navigate to the desired file in GitHub
2. Click the pencil icon (✏️) to edit
3. Make your changes
4. Commit with a descriptive message

### Option 3: GitHub Codespaces

Develop directly in the cloud:
1. Go to the repository main page
2. Click "Code" → "Codespaces" tab
3. Create a new Codespace
4. Work in the cloud IDE and push changes when ready

## 🚀 Deployment

QuickServeIT is deployed and live at **[www.quickserveit.online](https://www.quickserveit.online/)**

### Current Deployment
- **Platform:** Vercel
- **Status:** Production
- **Auto-deployment:** Enabled on main branch pushes

### Deployment Process

Once code is merged to the `main` branch:
1. Vercel automatically detects changes
2. Builds the project
3. Runs tests and checks
4. Deploys to production if all checks pass

## 🌐 Custom Domain

The application is accessible via our custom domain. To configure a custom domain:
1. Go to your hosting provider's domain management
2. Update DNS records to point to our deployment
3. Configure SSL/TLS certificates

## 👥 Contributing

We welcome contributions from the community! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Write clear, self-documenting code
- Follow TypeScript best practices
- Add comments for complex logic
- Ensure ESLint passes: `npm run lint`
- Test your changes locally before submitting

## 📚 Documentation

- React: [react.dev](https://react.dev)
- TypeScript: [typescriptlang.org](https://www.typescriptlang.org)
- Vite: [vitejs.dev](https://vitejs.dev)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)
- TanStack Query: [tanstack.com/query](https://tanstack.com/query)

## 🐛 Bug Reports & Feedback

Found a bug or have a suggestion? We'd love to hear from you!
- Open an issue on GitHub with a clear description
- Include steps to reproduce for bugs
- Provide context and expected behavior

## 📄 License

This project is part of QuickServe IT's product suite. Please refer to the LICENSE file for usage terms.

## 🤝 Team

QuickServeIT is developed by a passionate team of developers, designers, and product specialists working together to deliver excellence.

---

**Last Updated:** December 2025  
**Repository:** [github.com/caspermorgan/quickserveit](https://github.com/caspermorgan/quickserveit)
