import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import SectionLabel from "../site/SectionLabel"

export default function ClosingCTA() {
  return <section className="relative isolate flex flex-col justify-between gap-7 overflow-hidden bg-[#dfe3d5] px-6 py-14 sm:flex-row sm:items-center sm:px-10 md:px-16"><div aria-hidden="true" className="absolute -bottom-24 right-[-3rem] -z-10 font-serif text-[12rem] leading-none text-forest/5">✳</div><div><SectionLabel>START A CONVERSATION</SectionLabel><h2 className="mt-4 font-serif text-4xl leading-tight text-forest">Have a programme<br />in mind? <em className="font-normal text-clay">Let&apos;s talk.</em></h2></div><Link className="inline-flex w-fit items-center gap-4 bg-forest px-5 py-3 text-sm text-white transition-colors hover:bg-forest-soft" href="/contact">Tell us what you&apos;re working on <ArrowUpRight size={16} /></Link></section>
}
