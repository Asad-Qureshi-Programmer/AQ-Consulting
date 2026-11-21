import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '../../data/home'
import ProjectCard from './ProjectCard'
import SectionLabel from '../site/SectionLabel'

export default function WorkPreview() {
  const [featuredProject, ...otherProjects] = projects
  return (
    <section className="bg-cream px-6 py-16 sm:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <SectionLabel>SELECTED EXPERIENCE</SectionLabel>
            <h2 className="text-forest mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Work shaped by <em className="text-clay font-normal">the long view.</em>
            </h2>
          </div>
          <Link
            className="text-forest hover:text-clay inline-flex items-center gap-2 text-sm font-semibold"
            href="/work"
          >
            Explore our work <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid items-stretch gap-3 lg:grid-cols-[1.05fr_0.95fr]">
          <ProjectCard project={featuredProject} index={0} featured />
          <div className="grid content-start gap-3">
            {otherProjects.map((project, index) => (
              <ProjectCard project={project} index={index + 1} key={project.title} />
            ))}
            <aside className="flex min-h-24 items-center gap-4 bg-[#dfe6d9] px-5 py-4">
              <strong className="text-clay font-serif text-5xl leading-none">30</strong>
              <p className="text-forest max-w-48 font-serif text-sm leading-5">
                years of practical experience, grounded in rural communities.
              </p>
              <span className="text-muted-ink ml-auto hidden text-right text-[9px] tracking-[0.1em] sm:block">
                FIELD EXPERIENCE
                <br />
                <span className="text-clay">×</span> PRACTICAL THINKING
              </span>
            </aside>
          </div>
        </div>
        <p className="text-muted-ink mt-4 text-xs leading-5">
          Project descriptions reflect professional experience. Client references are shared with
          permission.
        </p>
      </div>
    </section>
  )
}
