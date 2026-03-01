import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail, MessageSquare, Terminal, Trophy } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { personal } from '../../data/personal'

const socialItems = [
    {
        Icon: Github,
        label: 'GitHub',
        href: personal.links.github,
        handle: 'vishalkumar321',
        description: 'Explore my projects and contributions.'
    },
    {
        Icon: Linkedin,
        label: 'LinkedIn',
        href: personal.links.linkedin,
        handle: 'vishal4518',
        description: 'Connect with me for professional opportunities.'
    },
    {
        Icon: Trophy,
        label: 'LeetCode',
        href: personal.leetcode.url,
        handle: 'vishal_kumar_123',
        description: 'Check out my problem-solving progress and rating.'
    },
    {
        Icon: Terminal,
        label: 'Codolio',
        href: personal.links.codolio,
        handle: 'vishal4518',
        description: 'View my consolidated competitive programming profile.'
    },
    {
        Icon: Mail,
        label: 'Email',
        href: `mailto:${personal.email}`,
        handle: personal.email,
        description: 'Send me a direct message for inquiries.'
    },
]

export function Contact() {
    const form = useRef()
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE,
            import.meta.env.VITE_EMAIL_TEMPLATE,
            form.current,
            import.meta.env.VITE_EMAIL_PUBLIC
        )
            .then(() => {
                setSubmitted(true)
                setLoading(false)
                setFormData({ name: '', email: '', message: '' })
                form.current.reset()
            })
            .catch((err) => {
                console.error('Failed to send email:', err)
                setLoading(false)
                alert('Failed to send message. Please try again or contact me directly via email.')
            })
    }

    return (
        <section id="contact" className="py-28" aria-label="Contact Section">
            <Container>
                <SectionHeading
                    label="Contact"
                    title="Let's build something remarkable"
                    subtitle="Whether you have a specific inquiry or just want to connect, I'm always open to discussing new projects and opportunities."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left: Contact Info & Socials */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-xl font-semibold text-neutral-100 mb-8 tracking-tight">
                                Contact Channels
                            </h3>
                            <div className="space-y-4">
                                {socialItems.map(({ Icon, label, href, handle, description }, i) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        className="flex items-center gap-5 group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
                                    >
                                        <div className="p-3 rounded-xl bg-neutral-800 text-neutral-400 group-hover:text-indigo-400 border border-neutral-700/50 transition-colors">
                                            <Icon size={22} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-neutral-100 mb-1">{label}</p>
                                            <p className="text-xs text-neutral-500 font-mono tracking-tight">{handle}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <div className="p-10 rounded-2xl border border-neutral-800 bg-neutral-900/30">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500">Available for projects</p>
                            </div>
                            <p className="text-sm leading-relaxed text-neutral-400">
                                Currently focusing on full-stack development and scalable system design. Feel free to reach out for collaborations.
                            </p>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-neutral-900/50 border border-neutral-800 p-10 md:p-12 rounded-2xl h-full"
                        >
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20">
                                        <Send size={28} className="text-emerald-500" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-neutral-100 mb-3 tracking-tight">
                                        Message Sent
                                    </h3>
                                    <p className="text-neutral-400 max-w-sm mx-auto leading-relaxed">
                                        Thank you for reaching out. I'll get back to you as soon as possible.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-10 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4 decoration-indigo-400/30"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                                className="w-full px-5 py-4 rounded-md bg-neutral-950 border border-neutral-800 outline-none focus:border-neutral-600 focus:ring-2 focus:ring-neutral-500/10 transition-all duration-300 text-sm text-neutral-100 placeholder:text-neutral-600"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your Email"
                                                className="w-full px-5 py-4 rounded-md bg-neutral-950 border border-neutral-800 outline-none focus:border-neutral-600 focus:ring-2 focus:ring-neutral-500/10 transition-all duration-300 text-sm text-neutral-100 placeholder:text-neutral-600"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can I help you?"
                                            className="w-full px-5 py-4 rounded-md bg-neutral-950 border border-neutral-800 outline-none focus:border-neutral-600 focus:ring-2 focus:ring-neutral-500/10 transition-all duration-300 text-sm text-neutral-100 placeholder:text-neutral-600 resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="w-full py-4 text-base"
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                        {!loading && <Send size={16} />}
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

