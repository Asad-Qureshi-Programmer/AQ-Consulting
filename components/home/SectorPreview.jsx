import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { sectors } from "../../data/home"
import SectionLabel from "../site/SectionLabel"

export default function SectorPreview() {
  return (
    <section className="bg-paper px-6 py-16 sm:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end"><div><SectionLabel>WHERE WE WORK</SectionLabel><h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-forest md:text-5xl">Rooted in rural realities.<br /><em className="font-normal text-clay">Connected to the bigger picture.</em></h2></div><Link className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-clay" href="/sectors">Explore our sectors <ArrowRight size={16} /></Link></div>
        <div className="grid gap-7 md:grid-cols-2 md:gap-10">
          <div className="relative min-h-64 overflow-hidden sm:min-h-80"><Image src="/rural-landscape.png" alt="Rural fields and community landscape in Madhya Pradesh" fill className="object-cover object-center" /><div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" /><span className="absolute bottom-5 left-5 text-[10px] tracking-[0.15em] text-white">FIELD-LED. COMMUNITY-CENTRED.</span></div>
          <div className="divide-y divide-line border-y border-line">{sectors.map((sector, index) => <Link className="grid min-h-12 grid-cols-[2rem_1fr_auto] items-center gap-3 py-2 font-serif text-base text-forest transition-colors hover:text-clay sm:text-lg" href="/sectors" key={sector}><span className="font-sans text-[10px] text-muted-ink">{String(index + 1).padStart(2, "0")}</span>{sector}<ArrowUpRight className="text-clay" size={16} /></Link>)}</div>
        </div>
      </div>
    </section>
  )
}
