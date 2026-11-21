import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index, featured = false }) {
  return (
    <Link
      href="/work"
      className={`group relative flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl ${featured ? 'bg-forest text-paper min-h-[24rem] p-6 sm:p-8' : 'border-line text-ink min-h-36 border bg-[#ecebe2] p-5 even:bg-[#e4e9df]'}`}
    >
      <div
        className={`flex items-center justify-between gap-4 text-[10px] tracking-[0.12em] ${featured ? 'text-paper/75' : 'text-muted-ink'}`}
      >
        <span>{featured ? 'SPOTLIGHT ASSIGNMENT' : project.period}</span>
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      {featured ? (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-16 right-3 font-serif text-[8rem] leading-none tracking-[-0.08em] text-white/5"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="relative my-auto max-w-[65ch] py-8">
            <span className="text-sm leading-6 text-[#e0ad91]">{project.partner}</span>
            <h3 className="text-paper mt-2 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              {project.title}
            </h3>
            <p className="text-paper/85 mt-3 text-[15px] leading-7 text-pretty">{project.text}</p>
          </div>
          <span className="border-paper/30 relative flex items-center justify-between border-t pt-4 text-sm font-semibold">
            Explore selected work <ArrowUpRight size={17} />
          </span>
        </>
      ) : (
        <>
          <h3 className="text-forest mt-3 max-w-sm pr-6 font-serif text-xl leading-tight">
            {project.title}
          </h3>
          <span className="text-clay mt-1 text-xs leading-5">{project.partner}</span>
          <p className="text-muted-ink mt-2 text-sm leading-6 text-pretty">{project.text}</p>
          <ArrowUpRight className="text-clay absolute top-4 right-4" size={17} aria-hidden="true" />
        </>
      )}
    </Link>
  )
}
