import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project, index, featured = false }) {
  return (
    <Link href="/work" className={`group relative flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl ${featured ? "min-h-[24rem] bg-forest p-6 text-paper sm:p-8" : "min-h-36 border border-line bg-[#ecebe2] p-5 text-ink even:bg-[#e4e9df]"}`}>
      <div className={`flex items-center justify-between gap-4 text-[10px] tracking-[0.12em] ${featured ? "text-paper/75" : "text-muted-ink"}`}><span>{featured ? "SPOTLIGHT ASSIGNMENT" : project.period}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
      {featured ? <><span aria-hidden="true" className="pointer-events-none absolute right-3 top-16 font-serif text-[8rem] leading-none tracking-[-0.08em] text-white/5">{String(index + 1).padStart(2, "0")}</span><div className="relative my-auto max-w-[65ch] py-8"><span className="text-sm leading-6 text-[#e0ad91]">{project.partner}</span><h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-paper sm:text-4xl">{project.title}</h3><p className="mt-3 text-pretty text-[15px] leading-7 text-paper/85">{project.text}</p></div><span className="relative flex items-center justify-between border-t border-paper/30 pt-4 text-sm font-semibold">Explore selected work <ArrowUpRight size={17} /></span></> : <><h3 className="mt-3 max-w-sm pr-6 font-serif text-xl leading-tight text-forest">{project.title}</h3><span className="mt-1 text-xs leading-5 text-clay">{project.partner}</span><p className="mt-2 text-pretty text-sm leading-6 text-muted-ink">{project.text}</p><ArrowUpRight className="absolute right-4 top-4 text-clay" size={17} aria-hidden="true" /></>}
    </Link>
  )
}
