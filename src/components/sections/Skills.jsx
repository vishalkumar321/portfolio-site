import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { skillGroups } from '../../data/skills'
import { Code2, Layout, Server, Database, Cpu } from 'lucide-react'

const iconMap = {
    Code2,
    Layout,
    Server,
    Database,
    Cpu
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}

export function Skills() {
    return (
        <section id="skills" className="py-28 bg-neutral-950 border-b border-neutral-900">
            <Container>
                <SectionHeading
                    label="Expertise"
                    title="Tools & Technologies"
                    subtitle="A comprehensive overview of my technical stack and core competencies."
                />

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {skillGroups.map((group) => {
                        const Icon = iconMap[group.icon] || Code2
                        return (
                            <motion.div
                                key={group.category}
                                className="group flex flex-col p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-700"
                                variants={itemVariants}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-2.5 rounded-xl bg-neutral-800 text-indigo-400 border border-neutral-700/50 group-hover:bg-indigo-500/10 transition-colors duration-300">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">
                                        {group.category}
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {group.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="flex items-center gap-3 text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-indigo-500/50 transition-colors" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </Container>
        </section>
    )
}

