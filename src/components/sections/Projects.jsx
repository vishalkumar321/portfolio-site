import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../../data/projects'

/* ─── Projects Section ───────────────────────────────────────── */
export function Projects() {
    return (
        <section id="projects" className="py-28 border-b border-neutral-800">
            <Container>
                <SectionHeading
                    label="Work"
                    title="Selected Projects"
                    subtitle="A collection of technical projects focused on automation, scalability, and user experience."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
