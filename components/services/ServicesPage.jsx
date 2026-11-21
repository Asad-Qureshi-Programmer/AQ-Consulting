import Link from 'next/link'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import ButtonLink from '../site/ButtonLink'
import SectionLabel from '../site/SectionLabel'
import ServiceCard from './ServiceCard'

const steps = ['Listen', 'Shape', 'Strengthen', 'Learn']

export default function ServicesPage() {
  return (
    <>
      <section className="bg-forest text-paper relative isolate grid min-h-[35rem] grid-cols-1 items-center gap-8 overflow-hidden px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-10 lg:px-24">
        <div
          aria-hidden="true"
          className="absolute -top-44 -right-40 -z-10 size-[34rem] rounded-full border border-white/10 shadow-[0_0_0_3rem_rgba(255,255,255,0.04),0_0_0_6rem_rgba(255,255,255,0.025)]"
        />
        <div>
          <SectionLabel light>WAYS TO WORK TOGETHER</SectionLabel>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl md:text-7xl">
            Good work needs
            <br />
            <em className="font-normal text-[#d49a7a]">the right kind of help.</em>
          </h1>
          <p className="text-paper/85 mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
            Choose a focused piece of support, or bring us in as a thinking partner across the life
            of your programme.
          </p>
          <div className="mt-7">
            <ButtonLink href="/contact" light>
              Tell us what you need
            </ButtonLink>
          </div>
        </div>
        <div className="flex w-full items-center gap-5 md:block">
          <div className="border-paper/40 relative grid size-32 shrink-0 place-items-center rounded-full border sm:size-56">
            <span className="border-paper/20 absolute inset-3 rounded-full border sm:inset-6" />
            <span className="border-paper/20 absolute inset-6 rounded-full border sm:inset-12" />
            <span className="relative text-center font-serif text-xs leading-tight sm:text-base">
              FIELD
              <br />
              REALITY
            </span>
            <span className="absolute top-5 right-5 size-2 rounded-full bg-[#d49a7a] sm:top-10 sm:right-10" />
            <span className="absolute bottom-5 left-5 text-sm text-[#d49a7a] sm:bottom-10 sm:left-10">
              +
            </span>
            <small className="text-paper/75 absolute right-2 bottom-5 text-[7px] tracking-widest sm:right-[-1.5rem] sm:bottom-12 sm:text-[9px]">
              STRATEGY
            </small>
          </div>
          <p className="text-paper/85 font-serif text-base leading-6 sm:mt-5 sm:ml-3 sm:text-xl">
            Grounded advice.
            <br />
            Useful tools.
            <br />
            <em className="text-[#d49a7a]">Better outcomes.</em>
          </p>
        </div>
        <Link
          className="text-paper/75 absolute bottom-5 left-6 inline-flex items-center gap-2 text-[10px] tracking-[0.13em] sm:left-10 lg:left-24"
          href="#service-menu"
        >
          SCROLL TO EXPLORE <ArrowDownRight size={15} />
        </Link>
        <span className="text-paper/60 absolute right-6 bottom-5 hidden text-[9px] tracking-[0.13em] sm:block lg:right-24">
          01 — 06 / OUR SERVICES
        </span>
      </section>
      <section className="bg-cream px-6 py-14 sm:px-10 md:py-20 lg:px-16" id="service-menu">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
            <div>
              <SectionLabel>OUR CAPABILITIES</SectionLabel>
              <h2 className="text-forest mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Find your <em className="text-clay font-normal">starting point.</em>
              </h2>
            </div>
            <p className="text-muted-ink max-w-md text-base leading-7">
              Every engagement is shaped around your context, capacity and goals. Here are the ways
              we can help move the work forward.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard service={service} featured={index === 0} key={service.number} />
            ))}
          </div>
        </div>
      </section>
      <section className="grid gap-8 bg-[#e8e9df] px-6 py-14 sm:px-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 md:py-20 lg:px-16">
        <div>
          <SectionLabel>ONE CONTINUOUS PARTNERSHIP</SectionLabel>
          <h2 className="text-forest mt-4 font-serif text-4xl leading-tight">
            Not a hand-off.
            <br />
            <em className="text-clay font-normal">A shared process.</em>
          </h2>
          <p className="text-muted-ink mt-4 max-w-md text-base leading-7">
            Our role adapts to your needs—from early thinking to implementation support and
            learning.
          </p>
        </div>
        <div className="border-forest/20 grid grid-cols-1 border-t sm:grid-cols-2">
          {steps.map((step, index) => (
            <div
              className="border-forest/20 grid min-h-16 grid-cols-[2rem_1fr_auto] items-center gap-3 border-b sm:odd:mr-4 sm:even:ml-4"
              key={step}
            >
              <span className="text-clay text-xs">0{index + 1}</span>
              <strong className="text-forest font-serif text-xl font-normal">{step}</strong>
              <ArrowRight className="text-clay" size={16} />
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-between gap-6 bg-[#d9e0d2] px-6 py-12 sm:flex-row sm:items-center sm:px-10 lg:px-24">
        <div>
          <SectionLabel>HAVE SOMETHING SPECIFIC IN MIND?</SectionLabel>
          <h2 className="text-forest mt-4 font-serif text-4xl leading-tight">
            Let’s shape the right
            <br />
            <em className="text-clay font-normal">support together.</em>
          </h2>
        </div>
        <ButtonLink href="/contact">Start a conversation</ButtonLink>
      </section>
    </>
  )
}
