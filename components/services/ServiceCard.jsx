import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import ServiceIcon from "./ServiceIcon"

const tones = {
  moss: "bg-[#e7ebdf] text-forest",
  clay: "bg-[#f0e8dd] text-forest",
  blue: "bg-[#e9ece8] text-forest",
  gold: "bg-[#f2eddf] text-forest",
  rose: "bg-[#f1e7e3] text-forest",
}

export default function ServiceCard({ service, featured = false }) {
  return (
    <article className={`group relative flex h-full flex-col overflow-hidden border border-black/5 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${featured ? "bg-forest text-paper" : tones[service.tone]}`}>
      <div aria-hidden="true" className="absolute -right-14 top-12 -z-0 size-40 rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-110" />
      <div className="relative flex items-center justify-between"><span className="font-serif text-sm tracking-widest opacity-75">{service.number}</span><span className="text-[10px] font-semibold tracking-[0.15em] opacity-65">{service.category}</span></div>
      <div className={`relative mt-6 grid size-12 place-items-center rounded-full border ${featured ? "border-paper/20 bg-paper text-forest" : "border-forest/10 bg-white/75 text-clay"}`}><ServiceIcon name={service.icon} /></div>
      <h2 className="relative mt-4 max-w-sm font-serif text-2xl leading-tight tracking-tight">{service.title}</h2>
      <p className={`relative mt-3 text-pretty text-[15px] leading-7 ${featured ? "text-paper/85" : "text-ink/75"}`}>{service.description}</p>
      <div className="relative mt-6 border-t border-current/15 pt-4"><span className="text-[10px] font-semibold tracking-[0.12em] opacity-65">SUPPORT INCLUDES</span><ul className="mt-3 flex flex-col gap-2.5">{service.deliverables.map((item) => <li className="flex items-start gap-2.5 text-sm leading-6" key={item}><Check aria-hidden="true" className={`mt-1 shrink-0 ${featured ? "text-[#e3a184]" : "text-clay"}`} size={15} />{item}</li>)}</ul></div>
      <Link className="relative mt-auto flex items-center justify-between gap-3 border-t border-current/15 pt-4 text-sm font-semibold" href={`/contact?service=${encodeURIComponent(service.title)}`}>Discuss this service <ArrowUpRight size={16} /></Link>
    </article>
  )
}
