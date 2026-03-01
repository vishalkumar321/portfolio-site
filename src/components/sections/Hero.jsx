import { motion } from 'framer-motion'
import {
    Github,
    Linkedin,
    Download,
    Mail,
    ExternalLink,
    Code2,
    Trophy,
    GraduationCap,
    Terminal,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { personal } from '../../data/personal'

/* ─── Smooth Scroll Helper ───────────────────────────────────── */
const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ─── Stat Card ──────────────────────────────────────────────── */
function StatCard({ icon: Icon, value, label, href }) {
    const content = (
        <div className="flex flex-col gap-1 group cursor-pointer">
            <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold text-neutral-100 tabular-nums group-hover:text-neutral-300 transition-colors">
                    {value}
                </p>
                <Icon size={14} className="text-neutral-500 group-hover:text-neutral-300 transition-colors" />
            </div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-medium group-hover:text-neutral-400 transition-colors">
                {label}
            </p>
        </div>
    )

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        )
    }

    return content
}

/* ─── Hero ───────────────────────────────────────────────────── */
export function Hero() {
    return (
        <section id="hero" className="relative flex items-center min-h-[85vh] py-28 border-b border-neutral-900">
            <Container className="relative">
                {/* Vertical Accent Line */}
                <div className="absolute -left-4 top-0 h-full w-[1px] bg-neutral-800/50 hidden md:block" />

                <motion.div
                    className="max-w-4xl space-y-12"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {/* Status Badge */}
                    <div className="flex items-center gap-4">
                        {personal.available && (
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Available
                            </div>
                        )}
                        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em]">
                            {personal.university} · {personal.batch}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <motion.h1
                            className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-100 leading-[1.1]"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Design enthusiast <br />
                            <span className="text-neutral-500">& product engineer.</span>
                        </motion.h1>

                        <motion.p
                            className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {personal.tagline}
                        </motion.p>
                    </div>

                    {/* Stats */}
                    <motion.div
                        className="flex flex-wrap gap-12 pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <StatCard
                            icon={Trophy}
                            value={personal.leetcode.rating}
                            label="Rating"
                            href={personal.leetcode.url}
                        />
                        <StatCard
                            icon={Code2}
                            value={personal.leetcode.solved}
                            label="Solved"
                            href={personal.leetcode.url}
                        />
                        <StatCard
                            icon={GraduationCap}
                            value={personal.cgpa}
                            label="CGPA"
                        />
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-wrap items-center gap-4 pt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button
                            variant="primary"
                            onClick={() => scrollTo('projects')}
                        >
                            Explore Projects
                        </Button>
                        <Button
                            href={personal.links.resume}
                            variant="secondary"
                            download
                        >
                            Download Resume
                        </Button>

                        <div className="flex items-center gap-6 pl-4 border-l border-neutral-800 ml-2">
                            <a href={personal.links.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-200 transition-colors" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-200 transition-colors" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href={personal.links.codolio} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-200 transition-colors" aria-label="Codolio">
                                <Terminal size={18} />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    )
}
