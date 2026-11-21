import { ArrowUpRight } from 'lucide-react'
import ButtonLink from '../site/ButtonLink'
import SectionLabel from '../site/SectionLabel'

export default function ContactPanel() {
  return (
    <section className="bg-forest text-paper grid gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 md:items-center md:gap-16 md:py-20 lg:px-24">
      <div>
        <SectionLabel light>START HERE</SectionLabel>
        <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
          Tell us a little
          <br />
          about your <em className="font-normal text-[#d49a7a]">work.</em>
        </h2>
        <p className="text-paper/80 mt-4 max-w-lg text-base leading-7">
          Email is the best place to begin. Share a few lines about your organisation, programme and
          the support you are looking for.
        </p>
        <div className="mt-6">
          <ButtonLink href="mailto:abulcard@gmail.com?subject=Consulting%20enquiry" light>
            Write an email
          </ButtonLink>
        </div>
      </div>
      <div className="border-paper/25 flex flex-col gap-5 border-t pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-9">
        <a
          className="border-paper/25 flex items-center justify-between gap-3 border-b pb-4 font-serif text-lg sm:text-xl"
          href="mailto:abulcard@gmail.com"
        >
          abulcard@gmail.com <ArrowUpRight size={17} />
        </a>
        <a
          className="border-paper/25 flex items-center justify-between gap-3 border-b pb-4 font-serif text-lg sm:text-xl"
          href="tel:+919993392185"
        >
          +91 99933 92185 <ArrowUpRight size={17} />
        </a>
        <span className="text-paper/75 text-sm leading-6">
          Typically available Monday–Friday
          <br />
          9:30 AM – 5:30 PM IST
        </span>
      </div>
    </section>
  )
}
