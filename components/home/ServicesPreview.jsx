import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  Compass,
  FileText,
  Leaf,
} from 'lucide-react'
import { homeServices } from '../../data/home'
import SectionLabel from '../site/SectionLabel'

const icons = { compass: Compass, file: FileText, chart: ChartNoAxesCombined, leaf: Leaf }
const tones = [
  'bg-forest text-paper hover:bg-forest-soft',
  'bg-[#e2e9dc] text-forest hover:bg-[#d9e3d1]',
  'bg-[#f0e7dc] text-forest hover:bg-[#eadfcf]',
  'bg-[#e6ece8] text-forest hover:bg-[#dce6e1]',
]

export default function ServicesPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-[#ecebe2] px-6 py-16 sm:px-10 md:py-24 lg:px-16">
      <div
        aria-hidden="true"
        className="border-forest/10 absolute -top-32 -right-48 -z-10 size-[26rem] rounded-full border shadow-[0_0_0_2rem_rgba(23,61,49,0.025),0_0_0_4rem_rgba(23,61,49,0.02)]"
      />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <SectionLabel>HOW WE CAN HELP</SectionLabel>
            <h2 className="text-forest mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              From the first idea
              <br />
              to <em className="text-clay font-normal">lasting outcomes.</em>
            </h2>
          </div>
          <p className="text-muted-ink max-w-sm text-base leading-7">
            Flexible, hands-on support for the real work of delivering development programmes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {homeServices.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <Link
                href="/services"
                className={`group focus-visible:outline-clay relative flex min-h-[19rem] flex-col overflow-hidden border border-black/5 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 ${tones[index]}`}
                key={service.number}
              >
                <div
                  aria-hidden="true"
                  className="absolute top-20 -right-14 size-36 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="relative flex items-center justify-between">
                  <span className="font-serif text-sm tracking-widest opacity-80">
                    {service.number}
                  </span>
                  <span className="text-clay grid size-11 place-items-center rounded-full border border-current/15 bg-white/80">
                    <Icon aria-hidden="true" size={23} />
                  </span>
                  <ArrowUpRight aria-hidden="true" className="text-clay" size={18} />
                </div>
                <h3 className="relative mt-5 max-w-[13rem] font-serif text-2xl leading-tight tracking-tight">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-7 opacity-85">{service.copy}</p>
                <span className="relative mt-auto flex items-center justify-between gap-3 border-t border-current/20 pt-4 text-sm font-semibold">
                  Explore this capability <ArrowRight size={16} />
                </span>
              </Link>
            )
          })}
        </div>
        <div className="text-muted-ink mt-6 flex flex-col justify-between gap-4 text-sm sm:flex-row sm:items-center">
          <span>Tailored support, shaped around your organisation.</span>
          <Link
            className="text-forest hover:text-clay inline-flex items-center gap-2 font-semibold"
            href="/services"
          >
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
