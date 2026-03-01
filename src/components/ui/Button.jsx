import { motion } from 'framer-motion'

export function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    ...props
}) {
    const variants = {
        primary: 'bg-neutral-100 text-black hover:bg-neutral-200',
        secondary: 'bg-transparent text-neutral-100 border border-neutral-800 hover:border-neutral-600',
    }

    const Tag = href ? motion.a : motion.button

    return (
        <Tag
            href={href}
            onClick={onClick}
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 cursor-pointer ${variants[variant]} ${className}`}
            whileTap={{ scale: 0.98 }}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...props}
        >
            {children}
        </Tag>
    )
}
