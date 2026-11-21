import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionLabel from "../site/SectionLabel"

export default function AboutPreview() {
  return (
    <section className="bg-paper px-6 py-16 sm:px-10 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.7fr_2.3fr_1fr] md:gap-10">
        <div className="flex items-center justify-between md:block"><SectionLabel>WHO WE ARE</SectionLabel><span className="text-[9px] tracking-[0.14em] text-muted-ink md:mt-12 md:block md:[writing-mode:vertical-rl] md:rotate-180">A PRACTICE ROOTED IN PEOPLE</span></div>
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-forest md:text-5xl">Development work is strongest when <em className="font-normal text-clay">good thinking meets field reality.</em></h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-ink">AQ Consulting works alongside NGOs, CSR foundations and development organisations to design better programmes, strengthen implementation and make results visible.</p>
          <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-clay" href="/about">Meet Abul Hasan Qureshi <ArrowRight size={16} /></Link>
        </div>
        <div className="flex items-center gap-3 border-t border-line pt-5 md:block md:border-l md:border-t-0 md:pt-0 md:pl-6">
          <span className="font-serif text-5xl text-clay">30</span><span className="text-[9px] leading-4 tracking-[0.13em] text-forest">YEARS OF<br />EXPERIENCE</span>
          <p className="max-w-[18rem] text-sm leading-6 text-muted-ink md:mt-3">Across rural development, livelihoods and natural resource management.</p>
        </div>
      </div>
    </section>
  )
}
