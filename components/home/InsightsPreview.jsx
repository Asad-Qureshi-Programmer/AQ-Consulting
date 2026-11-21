import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { articles } from "../../data/home"
import SectionLabel from "../site/SectionLabel"

const categories = ["PROGRAMME DESIGN", "MEAL", "WATERSHED & NRM"]

export default function InsightsPreview() {
  return (
    <section className="bg-paper px-6 py-16 sm:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end"><div><SectionLabel>FIELD NOTES</SectionLabel><h2 className="mt-4 font-serif text-4xl leading-tight text-forest md:text-5xl">Ideas for <em className="font-normal text-clay">better practice.</em></h2></div><Link className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-clay" href="/insights">All insights <ArrowRight size={16} /></Link></div>
        <div className="grid gap-3 md:grid-cols-3">{articles.map((article, index) => <Link className="group flex min-h-52 flex-col bg-[#eeede4] p-5 transition-colors hover:bg-[#e5e8dc] sm:p-6" href="/insights" key={article}><div className="flex items-center justify-between text-[10px] tracking-[0.12em] text-clay"><span>{categories[index]}</span><span className="font-serif text-lg text-muted-ink">0{index + 1}</span></div><h3 className="my-auto py-8 font-serif text-2xl leading-snug text-forest">{article}</h3><span className="inline-flex items-center gap-2 text-sm font-semibold text-forest">Read the note <ArrowRight className="transition-transform group-hover:translate-x-1" size={15} /></span></Link>)}</div>
      </div>
    </section>
  )
}
