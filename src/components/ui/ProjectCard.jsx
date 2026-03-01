import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export function ProjectCard({ project, index }) {
    return (
        <motion.article
            className="group flex flex-col h-full rounded-xl border border-neutral-800 bg-neutral-900/50 p-7 transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-700 hover:-translate-y-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="flex-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-neutral-100 tracking-tight">
                        {project.title}
                    </h3>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-neutral-200 transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                        >
                            <Github size={18} />
                        </a>
                    )}
                </div>

                {/* Tech Stack */}
                <p className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-6">
                    {project.tech.join(' · ')}
                </p>

                {/* Divider */}
                <div className="border-t border-neutral-800 my-6" />

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                </p>

                {project.features && (
                    <ul className="space-y-2 mb-8">
                        {project.features.slice(0, 2).map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs text-neutral-500">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-700 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
                    {project.type || 'Project'}
                </div>
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-indigo-400 transition-colors"
                    >
                        Live Demo
                        <ExternalLink size={12} />
                    </a>
                )}
            </div>
        </motion.article>
    )
}
