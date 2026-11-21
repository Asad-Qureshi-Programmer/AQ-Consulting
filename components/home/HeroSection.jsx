import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ButtonLink from "../site/ButtonLink"
import SectionLabel from "../site/SectionLabel"

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[34rem] items-center overflow-hidden bg-forest text-paper sm:min-h-[38rem]">
      <Image src="/rural-landscape.png" alt="A farmer walking through green fields in rural Madhya Pradesh" fill priority className="absolute inset-0 -z-20 size-full object-cover object-[58%_center] saturate-[0.75]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/95 via-forest/70 to-forest/10" />
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-24">
        <SectionLabel light>DEVELOPMENT CONSULTING · INDIA</SectionLabel>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl md:text-7xl">Better programmes.<br /><em className="font-normal text-[#d49a7a]">Lasting change.</em></h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-paper/90 sm:text-lg">Practical expertise for the people and organisations shaping a more resilient rural India.</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <ButtonLink href="/contact" light>Let&apos;s work together</ButtonLink>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#f0c4a7]" href="/services">Explore our services <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-16 flex items-center gap-4 text-[10px] tracking-[0.12em] text-paper/85 sm:mt-20">
          <span>01 / 05</span><span>Field experience, thoughtfully applied</span><span aria-hidden="true" className="h-px w-12 bg-paper/70" />
        </div>
      </div>
      <div className="absolute bottom-12 right-6 hidden items-center gap-3 border-l border-paper/60 pl-4 sm:flex lg:right-16"><span className="font-serif text-5xl">30</span><span className="text-[10px] leading-4 tracking-[0.13em]">YEARS IN<br />DEVELOPMENT</span></div>
    </section>
  )
}
