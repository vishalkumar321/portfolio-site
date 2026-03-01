export function Badge({ children, className = '', variant = 'primary' }) {
    const variants = {
        primary: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
        outline: 'bg-transparent text-neutral-400 border-neutral-800',
    }

    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase border ${variants[variant]} ${className}`}
        >
            {children}
        </span>
    )
}
