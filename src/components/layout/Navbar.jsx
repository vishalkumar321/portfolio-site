import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollspy } from '../../hooks/useScrollspy'
import { useNavScroll } from '../../hooks/useNavScroll'
import { personal } from '../../data/personal'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Problem Solving', href: '#problem-solving' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

const sectionIds = ['about', 'skills', 'problem-solving', 'projects', 'contact']

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const scrolled = useNavScroll(20)
    const activeId = useScrollspy(sectionIds, 120)

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    const handleNavClick = (href) => {
        setMenuOpen(false)
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <>
            <header
                className="sticky top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800 transition-all duration-300"
                role="banner"
            >
                <Container className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="font-semibold text-base tracking-tight text-neutral-100 transition-opacity duration-200 hover:opacity-70"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        aria-label="Vishal Kumar Portfolio - Back to top"
                    >
                        {personal.name}
                        <span className="text-neutral-500">.</span>
                    </a>

                    {/* Desktop nav links */}
                    <nav className="hidden md:block" aria-label="Main Navigation">
                        <ul className="flex items-center gap-2">
                            {navItems.map((item) => {
                                const id = item.href.replace('#', '')
                                const isActive = activeId === id
                                return (
                                    <li key={item.label} className="relative">
                                        <button
                                            onClick={() => handleNavClick(item.href)}
                                            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${isActive ? 'text-neutral-100' : 'text-neutral-500 hover:text-neutral-200'
                                                }`}
                                            aria-current={isActive ? 'page' : undefined}
                                        >
                                            <span className="relative z-10">{item.label}</span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="navbar-underline"
                                                    className="absolute bottom-0 left-4 right-4 h-[1px] bg-neutral-100"
                                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    {/* Desktop actions */}
                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href={personal.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-neutral-500 hover:text-neutral-200 transition-colors duration-200"
                            aria-label="View GitHub Profile"
                        >
                            GitHub
                        </a>
                        <Button
                            variant="primary"
                            onClick={() => handleNavClick('#contact')}
                            className="h-9 px-4 text-xs tracking-wide"
                        >
                            Hire me
                        </Button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 text-neutral-500 hover:text-neutral-200 transition-colors duration-200 cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </Container>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        id="mobile-menu"
                        className="fixed inset-0 z-40 md:hidden flex flex-col bg-neutral-950 px-6 pt-24"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile Navigation Menu"
                    >
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item, i) => (
                                <motion.button
                                    key={item.label}
                                    onClick={() => handleNavClick(item.href)}
                                    className="text-left py-4 text-3xl font-semibold border-b border-neutral-900 cursor-pointer transition-colors duration-150 hover:text-neutral-400 focus-visible:outline-none text-neutral-100 tracking-tight"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.4 }}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <motion.div
                                className="mt-12 flex flex-col gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Button
                                    variant="primary"
                                    onClick={() => handleNavClick('#contact')}
                                    className="w-full py-4 text-sm"
                                >
                                    Get in touch
                                </Button>
                                <a
                                    href={personal.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center py-4 rounded-md text-xs font-bold uppercase tracking-[0.2em] border border-neutral-800 text-neutral-500 hover:text-neutral-200 transition-colors"
                                    aria-label="View GitHub Profile (opens in new tab)"
                                >
                                    GitHub Profile
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
