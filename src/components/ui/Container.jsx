/**
 * Container — max-w-6xl content wrapper.
 * Matches the Navbar inner content constraint exactly.
 * Use the `as` prop to render a different semantic element.
 */
export function Container({ children, className = '', as: Tag = 'div' }) {
    return (
        <Tag className={`w-full max-w-5xl mx-auto px-6 md:px-8 ${className}`}>
            {children}
        </Tag>
    )
}
