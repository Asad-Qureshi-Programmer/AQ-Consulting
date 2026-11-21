import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { sectors } from '../../data/home'
import SectionLabel from '../site/SectionLabel'

export default function SectorPreview() {
  return (
    <section className="bg-paper px-6 py-16 sm:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <SectionLabel>WHERE WE WORK</SectionLabel>
            <h2 className="text-forest mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Rooted in rural realities.
              <br />
              <em className="text-clay font-normal">Connected to the bigger picture.</em>
            </h2>
          </div>
          <Link
            className="text-forest hover:text-clay inline-flex items-center gap-2 text-sm font-semibold"
            href="/sectors"
          >
            Explore our sectors <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2 md:gap-10">
          <div className="relative min-h-64 overflow-hidden sm:min-h-80">
            <Image
              src="/rural-landscape.png"
              alt="Rural fields and community landscape in Madhya Pradesh"
              fill
              className="object-cover object-center"
            />
            <div className="from-forest/60 absolute inset-0 bg-gradient-to-t to-transparent" />
            <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.15em] text-white">
              FIELD-LED. COMMUNITY-CENTRED.
            </span>
          </div>
          <div className="divide-line border-line divide-y border-y">
            {sectors.map((sector, index) => (
              <Link
                className="text-forest hover:text-clay grid min-h-12 grid-cols-[2rem_1fr_auto] items-center gap-3 py-2 font-serif text-base transition-colors sm:text-lg"
                href="/sectors"
                key={sector}
              >
                <span className="text-muted-ink font-sans text-[10px]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {sector}
                <ArrowUpRight className="text-clay" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
