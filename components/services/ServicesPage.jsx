import Link from "next/link"
import { ArrowDownRight, ArrowRight } from "lucide-react"
import { services } from "../../data/services"
import ButtonLink from "../site/ButtonLink"
import SectionLabel from "../site/SectionLabel"
import ServiceCard from "./ServiceCard"

const steps = ["Listen", "Shape", "Strengthen", "Learn"]

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate grid min-h-[35rem] grid-cols-1 items-center gap-8 overflow-hidden bg-forest px-6 py-12 text-paper sm:px-10 sm:py-16 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-10 lg:px-24">
        <div aria-hidden="true" className="absolute -right-40 -top-44 -z-10 size-[34rem] rounded-full border border-white/10 shadow-[0_0_0_3rem_rgba(255,255,255,0.04),0_0_0_6rem_rgba(255,255,255,0.025)]" />
        <div><SectionLabel light>WAYS TO WORK TOGETHER</SectionLabel><h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl md:text-7xl">Good work needs<br /><em className="font-normal text-[#d49a7a]">the right kind of help.</em></h1><p className="mt-5 max-w-xl text-base leading-7 text-paper/85 sm:text-lg sm:leading-8">Choose a focused piece of support, or bring us in as a thinking partner across the life of your programme.</p><div className="mt-7"><ButtonLink href="/contact" light>Tell us what you need</ButtonLink></div></div>
        <div className="flex w-full items-center gap-5 md:block">
          <div className="relative grid size-32 shrink-0 place-items-center rounded-full border border-paper/40 sm:size-56"><span className="absolute inset-3 rounded-full border border-paper/20 sm:inset-6" /><span className="absolute inset-6 rounded-full border border-paper/20 sm:inset-12" /><span className="relative text-center font-serif text-xs leading-tight sm:text-base">FIELD<br />REALITY</span><span className="absolute right-5 top-5 size-2 rounded-full bg-[#d49a7a] sm:right-10 sm:top-10" /><span className="absolute bottom-5 left-5 text-sm text-[#d49a7a] sm:bottom-10 sm:left-10">+</span><small className="absolute bottom-5 right-2 text-[7px] tracking-widest text-paper/75 sm:bottom-12 sm:right-[-1.5rem] sm:text-[9px]">STRATEGY</small></div>
          <p className="font-serif text-base leading-6 text-paper/85 sm:ml-3 sm:mt-5 sm:text-xl">Grounded advice.<br />Useful tools.<br /><em className="text-[#d49a7a]">Better outcomes.</em></p>
        </div>
        <Link className="absolute bottom-5 left-6 inline-flex items-center gap-2 text-[10px] tracking-[0.13em] text-paper/75 sm:left-10 lg:left-24" href="#service-menu">SCROLL TO EXPLORE <ArrowDownRight size={15} /></Link>
        <span className="absolute bottom-5 right-6 hidden text-[9px] tracking-[0.13em] text-paper/60 sm:block lg:right-24">01 — 06 / OUR SERVICES</span>
      </section>
      <section className="bg-cream px-6 py-14 sm:px-10 md:py-20 lg:px-16" id="service-menu">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end"><div><SectionLabel>OUR CAPABILITIES</SectionLabel><h2 className="mt-4 font-serif text-4xl leading-tight text-forest md:text-5xl">Find your <em className="font-normal text-clay">starting point.</em></h2></div><p className="max-w-md text-base leading-7 text-muted-ink">Every engagement is shaped around your context, capacity and goals. Here are the ways we can help move the work forward.</p></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <ServiceCard service={service} featured={index === 0} key={service.number} />)}</div>
        </div>
      </section>
      <section className="grid gap-8 bg-[#e8e9df] px-6 py-14 sm:px-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 md:py-20 lg:px-16"><div><SectionLabel>ONE CONTINUOUS PARTNERSHIP</SectionLabel><h2 className="mt-4 font-serif text-4xl leading-tight text-forest">Not a hand-off.<br /><em className="font-normal text-clay">A shared process.</em></h2><p className="mt-4 max-w-md text-base leading-7 text-muted-ink">Our role adapts to your needs—from early thinking to implementation support and learning.</p></div><div className="grid grid-cols-1 border-t border-forest/20 sm:grid-cols-2">{steps.map((step, index) => <div className="grid min-h-16 grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-forest/20 sm:even:ml-4 sm:odd:mr-4" key={step}><span className="text-xs text-clay">0{index + 1}</span><strong className="font-serif text-xl font-normal text-forest">{step}</strong><ArrowRight className="text-clay" size={16} /></div>)}</div></section>
      <section className="flex flex-col justify-between gap-6 bg-[#d9e0d2] px-6 py-12 sm:flex-row sm:items-center sm:px-10 lg:px-24"><div><SectionLabel>HAVE SOMETHING SPECIFIC IN MIND?</SectionLabel><h2 className="mt-4 font-serif text-4xl leading-tight text-forest">Let’s shape the right<br /><em className="font-normal text-clay">support together.</em></h2></div><ButtonLink href="/contact">Start a conversation</ButtonLink></section>
    </>
  )
}
