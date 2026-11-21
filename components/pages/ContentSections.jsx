import { ArrowUpRight, Check } from "lucide-react"
import SectionLabel from "../site/SectionLabel"

const cardSurfaces = ["bg-[#f1f0e8]", "bg-[#e7ebdf]", "bg-[#f0e8dd]", "bg-[#e9ece8]"]

export default function ContentSections({ sections, kicker }) {
  return (
    <section className="bg-paper px-6 py-14 sm:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between"><SectionLabel>{kicker} / AT A GLANCE</SectionLabel><p className="font-serif text-lg leading-7 text-forest">Practical expertise.<br />Grounded in experience.</p></div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {sections.map((section, index) => (
            <article className={`relative isolate flex min-h-56 flex-col overflow-hidden border border-black/5 p-5 sm:p-7 ${cardSurfaces[index % cardSurfaces.length]}`} key={section.title}>
              <div aria-hidden="true" className="absolute -right-12 -top-16 -z-10 size-40 rounded-full bg-forest/5" />
              <div className="mb-5 flex items-center justify-between"><span className="font-serif text-lg text-clay">{String(index + 1).padStart(2, "0")}</span><span className="grid size-9 place-items-center rounded-full border border-forest/20 text-forest"><ArrowUpRight size={16} /></span></div>
              <h2 className="font-serif text-2xl leading-tight tracking-tight text-forest">{section.title}</h2>
              <p className="mt-3 text-pretty text-base leading-7 text-ink/80">{section.text}</p>
              {section.items && <ul className="mt-5 flex flex-col gap-3 border-t border-forest/15 pt-4">{section.items.map((item) => <li className="flex items-start gap-2.5 text-sm leading-6 text-ink/80" key={item}><Check aria-hidden="true" className="mt-1 shrink-0 text-clay" size={15} />{item}</li>)}</ul>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
