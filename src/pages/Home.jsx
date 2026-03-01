import { lazy, Suspense } from 'react'
import { Hero } from '../components/sections/Hero'

const About = lazy(() =>
    import('../components/sections/About').then((m) => ({ default: m.About }))
)
const Skills = lazy(() =>
    import('../components/sections/Skills').then((m) => ({ default: m.Skills }))
)
const ProblemSolving = lazy(() =>
    import('../components/sections/ProblemSolving').then((m) => ({ default: m.ProblemSolving }))
)
const Projects = lazy(() =>

    import('../components/sections/Projects').then((m) => ({ default: m.Projects }))
)
const Education = lazy(() =>
    import('../components/sections/Education').then((m) => ({ default: m.Education }))
)
const Contact = lazy(() =>
    import('../components/sections/Contact').then((m) => ({ default: m.Contact }))
)

function SectionFallback() {
    return (
        <div className="flex items-center justify-center py-20 bg-neutral-950">
            <div className="w-6 h-6 rounded-full border-2 border-neutral-800 border-t-neutral-500 animate-spin" />
        </div>
    )
}

export function Home() {
    return (
        <main id="main-content">
            <Hero />
            <div className="border-t border-neutral-900" />
            <Suspense fallback={<SectionFallback />}>
                <About />
            </Suspense>
            <div className="border-t border-neutral-900" />
            <Suspense fallback={<SectionFallback />}>
                <Skills />
            </Suspense>
            <div className="border-t border-neutral-900" />
            <Suspense fallback={<SectionFallback />}>
                <ProblemSolving />
            </Suspense>
            <div className="border-t border-neutral-900" />
            <Suspense fallback={<SectionFallback />}>
                <Projects />
            </Suspense>
            <div className="border-t border-neutral-900" />
            <Suspense fallback={<SectionFallback />}>
                <Education />
            </Suspense>
            <div className="border-t border-neutral-900" />
            <Suspense fallback={<SectionFallback />}>
                <Contact />
            </Suspense>
        </main>
    )
}
