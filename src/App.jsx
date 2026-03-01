import { lazy, Suspense } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Layout } from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))

export default function App() {
  return (
    <div className="noise-overlay">
      <Navbar />
      <Layout>
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      </Layout>
      <Footer />
    </div>
  )
}
