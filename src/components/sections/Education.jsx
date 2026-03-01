import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { educationData } from '../../data/education'
import { GraduationCap, Award, Calendar, School } from 'lucide-react'

function TimelineItem({ item, index, isLast }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-12 last:pb-0"
        >
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[11px] top-[24px] bottom-0 w-[1px] bg-neutral-800" />
            )}

            {/* Timeline Dot */}
            <div className="absolute left-0 top-[6px] w-[23px] h-[23px] rounded-full flex items-center justify-center bg-neutral-950 border border-neutral-800 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl transition-all duration-300 hover:bg-neutral-900 group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div>
                        <h3 className="text-xl font-semibold text-neutral-100 mb-2 tracking-tight">
                            {item.degree}
                        </h3>
                        <p className="text-sm font-medium flex items-center gap-2 text-neutral-400">
                            <School size={15} className="text-indigo-400" />
                            {item.institution}
                        </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em]">
                        <span>{item.period}</span>
                        {item.status && (
                            <span className="text-emerald-500">
                                {item.status}
                            </span>
                        )}
                    </div>
                </div>

                <p className="text-base leading-relaxed text-neutral-400 mb-8 max-w-2xl">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-8 pt-6 border-t border-neutral-800/50">
                    {item.metrics.map((metric) => (
                        <div key={metric.label} className="space-y-1">
                            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500">{metric.label}</p>
                            <p className="text-xl font-semibold text-neutral-100 tabular-nums">{metric.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

function CertificationCard({ cert, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl transition-all duration-300 hover:bg-neutral-900 group"
        >
            <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-neutral-800 text-indigo-400 border border-neutral-700/50 group-hover:bg-indigo-500/10 transition-colors">
                    <Award size={22} />
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-neutral-100 mb-2 tracking-tight">
                        {cert.title}
                    </h4>
                    <p className="text-sm font-medium text-neutral-400 mb-4">
                        {cert.issuer} {cert.level && <span className="text-neutral-600 ml-1">• {cert.level}</span>}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-500 max-w-md">
                        {cert.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export function Education() {
    return (
        <section id="education" className="py-28 border-b border-neutral-900">
            <Container>
                <SectionHeading
                    label="Academic"
                    title="Education & Certifications"
                    subtitle="A chronicle of my academic journey and professional skill acquisition."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Education Timeline */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="p-2.5 rounded-xl bg-neutral-900 text-indigo-400 border border-neutral-800">
                                <GraduationCap size={22} />
                            </div>
                            <h3 className="text-2xl font-semibold tracking-tight text-neutral-100">Academic Background</h3>
                        </div>

                        <div className="relative">
                            {educationData.education.map((item, index) => (
                                <TimelineItem
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    isLast={index === educationData.education.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="p-2.5 rounded-xl bg-neutral-900 text-indigo-400 border border-neutral-800">
                                <Award size={22} />
                            </div>
                            <h3 className="text-2xl font-semibold tracking-tight text-neutral-100">Certifications</h3>
                        </div>

                        <div className="space-y-6">
                            {educationData.certifications.map((cert, index) => (
                                <CertificationCard key={cert.id} cert={cert} index={index} />
                            ))}
                        </div>

                        {/* Professional Note */}
                        <div className="mt-12 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30">
                            <p className="text-sm italic leading-relaxed text-neutral-500">
                                Continuous learning is at the core of my professional development. I actively pursue certifications that bridge theoretical knowledge with industry-standard practices.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
