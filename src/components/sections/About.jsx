import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { personal } from '../../data/personal'

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function About() {
    return (
        <section id="about" className="py-28 border-b border-neutral-950" aria-label="About Me">
            <Container>
                <SectionHeading
                    label="About"
                    title="Crafting experiences that matter"
                    subtitle="A brief overview of my background, focus, and what drives me as an engineer."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Bio */}
                    <motion.div
                        className="lg:col-span-7 space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1, duration: 0.6 } },
                        }}
                    >
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl leading-relaxed text-neutral-400"
                        >
                            {personal.bio}
                        </motion.p>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg leading-relaxed text-neutral-400"
                        >
                            When I'm not writing code, I'm exploring new design patterns, competing on
                            LeetCode, or studying the intersection of performance and aesthetics in
                            modern web development.
                        </motion.p>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg leading-relaxed text-neutral-400"
                        >
                            I believe great software is invisible — it just works, feels natural, and
                            gets out of the way.
                        </motion.p>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        className="lg:col-span-5 space-y-6 bg-neutral-900/30 p-8 rounded-2xl border border-neutral-800"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: 10 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                        }}
                    >
                        {[
                            { label: 'Location', value: personal.location },
                            { label: 'University', value: `${personal.university} (${personal.batch})` },
                            { label: 'Focus', value: 'Full Stack & Scalable Systems' },
                            {
                                label: 'Availability',
                                value: personal.available ? 'Open to opportunities' : 'Full-time only',
                            },
                        ].map(({ label, value }) => (
                            <div
                                key={label}
                                className="flex flex-col gap-1 pb-4 border-b border-neutral-800 last:border-0 last:pb-0"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                                    {label}
                                </span>
                                <span className="text-sm font-medium text-neutral-100">
                                    {value}
                                </span>
                            </div>
                        ))}

                        <div className="flex flex-wrap gap-2 pt-4">
                            {['React', 'Node.js', 'PostgreSQL', 'TypeScript'].map((tech) => (
                                <Badge key={tech} variant="outline" className="border-neutral-800 text-neutral-500">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
