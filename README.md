# Vishal Kumar — Production-Grade Software Engineer Portfolio

[vishalkumar-portfolio-nine.vercel.app](https://vishalkumar-portfolio-nine.vercel.app/)

A secure, high-performance portfolio application that showcases handcrafted UI, production-grade optimizations, and deep algorithmic expertise. This project demonstrates backend-style security thinking in a frontend architecture, functional EmailJS integration, and advanced asset management.

---

## 🎯 Architecture Overview

Unlike generic portfolios, this site is built with a focus on **Performance Budgeting** and **Asset Optimization**:

*   **Granular Code Splitting**: Utilizing Vite's `manualChunks` to isolate large dependencies like `framer-motion` and `lucide-react` into independent vendor chunks.
*   **Tree-shaking Efficiency**: Refactored static asset imports to ensure only required components are bundled, resulting in a **64% reduction** in final JS payload.
*   **Lazy Loading Strategy**: All heavy sections are lazily loaded via `React.lazy` and `Suspense`, ensuring the Hero section achieves a perfect LCP (Largest Contentful Paint).
*   **Security Integration**: Environment variables for EmailJS are strictly enforced server-side (Vercel) and client-side via Vite placeholders, never exposing keys in the source.

---

## 🚀 Featured Project: ResumeIQ
### *Production-Grade AI ATS Resume Optimizer (Full-Stack SaaS)*

This portfolio prominently features **ResumeIQ**, a secure, multi-tenant SaaS application that analyzes resumes using AI, enforces row-level data isolation with Supabase RLS, and provides ATS-style optimization.

**Why This Project Matters:**
*   **ATS Pipeline Simulation**: Extracts PDF text and applies semantic analysis via Groq (Llama 3).
*   **Data Isolation**: Demonstrates production-level security with **Supabase Row Level Security (RLS)**.
*   **Validation**: Returns strict JSON, validated server-side before persistence to prevent malformed data.

---

## ✨ Features
| Layer | Technology |
| :--- | :--- |
| **Hero & Stats** | Dynamic LeetCode/Codolio integration with real-time performance metrics. |
| **Problem Solving** | Hand-curated algorithmic case studies with custom-built animated counters. |
| **Contact System** | Production-ready form submission via @emailjs/browser with loading states. |
| **Typography** | Intentional vertical rhythm (py-28) and structural dividers for premium UX. |

---

## 🛠️ Tech Stack
| Layer | Technology |
| :--- | :--- |
| **Frontend Core** | React 19 (Vite), Tailwind CSS 4 |
| **Animations** | Framer Motion (Optimized for 60fps) |
| **Icons** | Lucide React (Tree-shaked named imports) |
| **Deployment** | Vercel (CI/CD integration) |
| **Infrastructure** | GitHub Actions, Environment Security (.env) |

---

## 🔒 Key Engineering Decisions
*   **Performance First**: Swapped wildcard icon imports for named imports to avoid bundling the entire 900KB Lucide library.
*   **Zero Layout Shift**: Used `min-h` containers and structural placeholders for lazy-loaded sections to prevent CLS.
*   **Handcrafted Aesthetic**: Avoided generic UI kits in favor of custom-built, reusable components (`Button`, `Container`, `Badge`).

---

## 📁 Project Structure
```text
portfolio/
├── src/
│   ├── components/        # UI (reusable) vs Sections (feature-specific)
│   ├── data/              # Centralized content management for easy updates
│   ├── hooks/             # Custom useNavScroll and Scrollspy logic
│   ├── pages/             # Lazy-loaded page containers
│   └── App.jsx            # Main entry with Suspense boundaries
├── public/                # Static assets & Resume.pdf
├── .env                   # Secure EmailJS credentials
└── vite.config.js         # Optimization & manual chunk configuration
```

---

## 🚀 Deployment Verification
*   **Vercel Build**: Passing ✅
*   **Bundle Audit**: Main entry < 150KB gzip ✅
*   **Accessibility**: ARIA labels and semantic HTML verified ✅

---

## 📄 License
MIT © Vishal Kumar
