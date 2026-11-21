import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import SectionLabel from "../site/SectionLabel"

export default function FounderPanel() {
  return (
    <section className="grid gap-7 bg-forest px-6 py-12 text-paper sm:px-10 md:grid-cols-[10rem_1fr_1fr] md:items-center md:gap-9 md:py-16 lg:px-24">
      <div aria-hidden="true" className="grid aspect-[4/5] max-w-36 place-items-center border border-paper/40 font-serif text-4xl text-[#d49a7a]">AQ</div>
      <div><SectionLabel light>FOUNDER &amp; DEVELOPMENT PROFESSIONAL</SectionLabel><h2 className="mt-4 font-serif text-4xl leading-tight">Abul Hasan<br /><em className="font-normal text-[#d49a7a]">Qureshi</em></h2><p className="mt-3 text-sm leading-6 text-paper/75">M.Sc. Botany (Ecology) · 30 years in the development sector</p></div>
      <div className="flex flex-col gap-4 border-t border-paper/25 pt-5 text-sm text-paper/80 md:border-l md:border-t-0 md:pl-7 md:pt-0"><span className="flex justify-between gap-5">1996 — 2006 <b className="font-medium text-paper">NCHSE</b></span><span className="flex justify-between gap-5">2006 — present <b className="font-medium text-paper">CARD, Dhar</b></span><Link className="mt-2 inline-flex items-center gap-2 text-[#d49a7a]" href="/contact">Connect with Abul <ArrowUpRight size={16} /></Link></div>
    </section>
  )
}
