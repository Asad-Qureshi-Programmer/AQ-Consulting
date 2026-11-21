import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '../site/SectionLabel'

export default function ClosingCTA() {
  return (
    <section className="relative isolate flex flex-col justify-between gap-7 overflow-hidden bg-[#dfe3d5] px-6 py-14 sm:flex-row sm:items-center sm:px-10 md:px-16">
      <div
        aria-hidden="true"
        className="text-forest/5 absolute right-[-3rem] -bottom-24 -z-10 font-serif text-[12rem] leading-none"
      >
        ✳
      </div>
      <div>
        <SectionLabel>START A CONVERSATION</SectionLabel>
        <h2 className="text-forest mt-4 font-serif text-4xl leading-tight">
          Have a programme
          <br />
          in mind? <em className="text-clay font-normal">Let&apos;s talk.</em>
        </h2>
      </div>
      <Link
        className="bg-forest hover:bg-forest-soft inline-flex w-fit items-center gap-4 px-5 py-3 text-sm text-white transition-colors"
        href="/contact"
      >
        Tell us what you&apos;re working on <ArrowUpRight size={16} />
      </Link>
    </section>
  )
}
