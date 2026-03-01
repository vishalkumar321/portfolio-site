import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
import { Container } from '../ui/Container'
import { personal } from '../../data/personal'

const socialLinks = [
    { Icon: Github, href: personal.links.github, label: 'GitHub' },
    { Icon: Linkedin, href: personal.links.linkedin, label: 'LinkedIn' },
    { Icon: Twitter, href: personal.links.twitter, label: 'Twitter' },
    { Icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
]

const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="py-20 border-t border-neutral-900 bg-neutral-950">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div className="space-y-4">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToTop()
                            }}
                            className="font-semibold text-xl tracking-tight text-neutral-100 transition-opacity hover:opacity-70"
                        >
                            {personal.name}
                            <span className="text-neutral-500">.</span>
                        </a>
                        <p className="text-sm max-w-sm text-neutral-400 leading-relaxed">
                            A senior engineering perspective on <br /> crafting high-performance digital products.
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-x-10 gap-y-4">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    const id = link.href.replace('#', '')
                                    const el = document.getElementById(id)
                                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="text-sm font-medium text-neutral-500 transition-colors duration-200 hover:text-neutral-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View my ${label} profile (opens in new tab)`}
                                className="p-3 rounded-xl border border-neutral-800 text-neutral-500 transition-all duration-300 hover:text-neutral-100 hover:border-neutral-700 hover:bg-neutral-900"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-16 pt-8 border-t border-neutral-900">
                    <p className="text-xs font-medium text-neutral-500 tracking-wide">
                        © {new Date().getFullYear()} {personal.name}. Built with architectural integrity.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-200 hover:text-neutral-200 cursor-pointer group"
                        aria-label="Back to top"
                    >
                        Back to top
                        <span className="p-1 px-1.5 rounded-md border border-neutral-800 bg-neutral-900 group-hover:bg-neutral-800 transition-colors">
                            <ArrowUp size={10} />
                        </span>
                    </button>
                </div>
            </Container>
        </footer>
    )
}
