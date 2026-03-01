import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { problemSolvingData } from '../../data/problemSolving'
import * as LucideIcons from 'lucide-react'

function AnimatedCounter({ value, suffix }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    const count = useSpring(0, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const rounded = useTransform(count, (latest) => Math.floor(latest))
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (inView) {
            count.set(value)
        }
    }, [inView, value, count])

    useEffect(() => {
        return rounded.on("change", (latest) => setDisplayValue(latest))
    }, [rounded])

    return (
        <span ref={ref} className="tabular-nums">
            {displayValue}{suffix}
        </span>
    )
}

function StatCard({ stat, index }) {
    const Icon = LucideIcons[stat.icon] || LucideIcons.Terminal

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl transition-all duration-300 hover:bg-neutral-900"
        >
            <div className="flex items-start justify-between mb-8">
                <div className="p-3 rounded-xl bg-neutral-800 text-indigo-400 border border-neutral-700/50 group-hover:bg-indigo-500/10 transition-colors">
                    <Icon size={24} strokeWidth={1.5} />
                </div>
            </div>

            <div className="mb-4">
                <h4 className="text-4xl font-semibold tracking-tight text-neutral-100 tabular-nums">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h4>
            </div>

            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-4">
                {stat.label}
            </p>

            <p className="text-sm leading-relaxed text-neutral-400">
                {stat.description}
            </p>
        </motion.div>
    )
}

export function ProblemSolving() {
    return (
        <section id="problem-solving" className="py-28 border-b border-neutral-900">
            <Container>
                <SectionHeading
                    label="Algorithmic Expertise"
                    title="Problem Solving"
                    subtitle="Engineering high-performance solutions through rigorous data structure optimization and algorithmic complexity analysis."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {problemSolvingData.stats.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-neutral-900/50 border border-neutral-800 p-12 rounded-2xl"
                >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-8">
                                Technical Specializations
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {problemSolvingData.topics.map((topic) => (
                                    <Badge key={topic} variant="outline" className="text-xs py-1.5 px-4 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200 transition-colors">
                                        {topic}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-auto flex-shrink-0">
                            <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 relative group overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500/50" />
                                <p className="text-[10px] uppercase tracking-[0.2em] mb-3 text-neutral-600 font-bold"> Competitive Mindset </p>
                                <p className="text-xl font-medium italic leading-tight text-neutral-100">
                                    "Striving for O(log N) in <br /> an O(N) world."
                                </p>
                                <p className="text-xs mt-4 text-neutral-600 font-mono">
                                    // Optimization First
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

