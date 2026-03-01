# Vishal Kumar — Software Engineer Portfolio

Live: [vishalkumar-portfolio-nine.vercel.app](https://vishalkumar-portfolio-nine.vercel.app/)

A performance-focused portfolio built with intentional architecture decisions, optimized bundling, and handcrafted UI components. The goal of this project was not just presentation, but to apply production-level thinking to frontend engineering.

---

## 🎯 Architecture Approach

This portfolio is designed with performance and structure in mind.

- **Code Splitting**: Heavy sections are lazily loaded using `React.lazy` and `Suspense`.
- **Optimized Bundling**: Large dependencies (e.g., `framer-motion`, `lucide-react`) are split using Vite `manualChunks`.
- **Named Icon Imports**: Avoided wildcard imports to prevent unnecessary bundle growth.
- **Stable Layout**: Section containers use consistent spacing (`py-28`) and structural dividers to avoid layout shifts.
- **Environment Security**: EmailJS keys managed via Vite environment variables and configured securely in Vercel.

The result is a clean bundle structure and controlled asset loading strategy.

---

## 🚀 Featured Project — ResumeIQ

**AI-powered ATS-style resume analyzer (Full-stack SaaS)**

ResumeIQ demonstrates applied backend and SaaS architecture concepts:

- **PDF parsing pipeline**: AI analysis → structured report persistence.
- **Multi-tenant data isolation**: Using Supabase Row Level Security (RLS).
- **Strict JSON response validation**: Before database persistence.
- **Authentication**: With session handling and password recovery.

This project reflects secure data design, not just frontend presentation.

---

## ✨ Core Features

- **Dynamic problem-solving section**: 600+ DSA problems solved.
- **Structured algorithm topic breakdown**: Graphs, DP, Trees, Sliding Window.
- **Custom reusable UI components**: Button, Container, Badge.
- **Accessible contact form**: Powered by EmailJS.
- **Responsive layout**: With consistent vertical rhythm.

---

## 🛠️ Tech Stack

### Frontend:
- **React (Vite 6)**
- **Tailwind CSS 4**
- **Framer Motion** (subtle animations)

### Backend Concepts Demonstrated:
- **Supabase** (RLS policies)
- **REST API design**
- **Authentication flows**
- **Input validation patterns**

### Deployment:
- **Vercel** (CI/CD from GitHub)
- **Environment variable management**

---

## 🔒 Engineering Decisions

- Avoided UI libraries to maintain full control over layout and styling.
- Focused on bundle discipline and minimal unnecessary animation.
- Used structural layout consistency instead of heavy visual effects.
- Designed content hierarchy to reflect clarity over decoration.

---

## 📁 Project Structure

```text
portfolio/
├── src/
│   ├── components/        # Reusable UI elements
│   ├── sections/          # Feature-specific sections
│   ├── data/              # Centralized content
│   ├── hooks/             # Custom optimization hooks
│   └── App.jsx            # Entry with Suspense boundaries
├── public/                # Static assets & PDF
├── .env                   # Secure credentials
└── vite.config.js         # Build & Splitting config
```

---

## 📄 License
MIT © Vishal Kumar
