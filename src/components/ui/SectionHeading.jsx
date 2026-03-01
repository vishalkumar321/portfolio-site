import { motion } from 'framer-motion'

export function SectionHeading({ label, title, subtitle, className = '' }) {
    return (
        <div className={`mb-20 text-left ${className}`}>
            {label && (
                <motion.span
                    className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {label}
                </motion.span>
            )}

            <motion.h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    className="text-neutral-400 leading-relaxed max-w-2xl text-base"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    )
}
