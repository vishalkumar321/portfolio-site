import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'

export default function App() {
  return (
    <div className="noise-overlay">
      <Navbar />
      <Layout>
        <Home />
      </Layout>
      <Footer />
    </div>
  )
}
