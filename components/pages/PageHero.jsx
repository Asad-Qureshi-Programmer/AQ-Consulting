import { CircleDot } from "lucide-react"
import SectionLabel from "../site/SectionLabel"

const motifs = {
  about: ["FIELD", "EXPERIENCE"], sectors: ["PEOPLE", "+ PLACE"], process: ["LISTEN", "LEARN"],
  training: ["LEARN", "+ GROW"], resources: ["PRACTICE", "TOOLS"], work: ["FIELD", "IMPACT"],
  insights: ["IDEAS", "ACTION"], contact: ["START", "TOGETHER"], privacy: ["TRUST", "CARE"],
}
const surfaces = {
  about: "bg-forest text-paper", work: "bg-forest text-paper", insights: "bg-forest text-paper", process: "bg-forest text-paper",
  contact: "bg-clay text-white", resources: "bg-[#e1e8dc] text-forest", training: "bg-[#f0e8dd] text-forest", sectors: "bg-[#eee8dc] text-forest",
}
const darkPages = ["about", "work", "insights", "process"]

export default function PageHero({ slug, kicker, titleLead, titleEmphasis, intro }) {
  const [motifLead, motifDetail] = motifs[slug] || ["PEOPLE", "+ PLACE"]
  const isDark = darkPages.includes(slug)
  const surface = surfaces[slug] || "bg-cream text-forest"

  return (
    <section className={`relative isolate grid min-h-[27rem] grid-cols-1 items-center gap-7 overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[27rem] lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-12 lg:px-24 ${surface}`}>
      <div aria-hidden="true" className={`absolute -right-48 -top-48 -z-10 size-[30rem] rounded-full border shadow-[0_0_0_2rem_rgba(255,255,255,0.04),0_0_0_4rem_rgba(255,255,255,0.025)] ${isDark ? "border-white/10" : "border-forest/10"}`} />
      <div className="relative z-10">
        <SectionLabel light={isDark || slug === "contact"}>{kicker}</SectionLabel>
        <h1 className={`mt-5 max-w-4xl font-serif text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl ${isDark || slug === "contact" ? "text-paper" : "text-forest"}`}>{titleLead}<br /><em className={`font-normal ${isDark || slug === "contact" ? "text-[#d49a7a]" : "text-clay"}`}>{titleEmphasis}</em></h1>
        <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${isDark || slug === "contact" ? "text-paper/85" : "text-muted-ink"}`}>{intro}</p>
      </div>
      <aside aria-label={`${motifLead} ${motifDetail}`} className="relative z-10 flex w-full max-w-[16rem] items-end">
        <div className={`relative grid size-32 shrink-0 place-items-center rounded-full border sm:size-52 ${isDark || slug === "contact" ? "border-white/50" : "border-forest/35"}`}>
          <span className={`absolute inset-3 rounded-full border ${isDark || slug === "contact" ? "border-white/30" : "border-forest/25"}`} />
          <span className={`absolute inset-6 rounded-full border ${isDark || slug === "contact" ? "border-white/20" : "border-forest/20"}`} />
          <span className={`relative text-center font-serif text-xs leading-tight sm:text-lg ${isDark || slug === "contact" ? "text-paper" : "text-forest"}`}>{motifLead}<br /><b className={`font-normal ${isDark || slug === "contact" ? "text-paper" : "text-forest"}`}>{motifDetail}</b></span>
          <span className="absolute right-5 top-5 size-2 rounded-full bg-clay" /><CircleDot className="absolute size-4 text-sage" />
        </div>
        <div className="relative z-20 -ml-3 mb-1 flex shrink-0 items-center gap-2 bg-paper px-2 py-1.5 text-forest sm:px-3 sm:py-2"><span className="font-serif text-sm text-clay sm:text-lg">30 YEARS</span><span className="text-[7px] leading-3 tracking-[0.06em]">OF FIELD-LED<br />DEVELOPMENT</span></div>
      </aside>
      <div className={`absolute bottom-4 right-6 text-[9px] tracking-[0.12em] sm:bottom-6 sm:right-10 lg:right-16 ${isDark || slug === "contact" ? "text-paper/70" : "text-muted-ink"}`}>AQC <span className="px-2 text-clay">/</span>{kicker}</div>
    </section>
  )
}
