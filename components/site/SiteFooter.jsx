import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Brand from "./Brand"

export default function SiteFooter() {
  return (
    <footer className="bg-forest px-5 pt-12 text-paper sm:px-8 md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 pb-10 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
        <div><Brand /><p className="mt-3 font-serif text-lg leading-relaxed text-paper/80">Practical expertise for more<br />resilient rural communities.</p></div>
        <div className="flex flex-col gap-3 border-t border-paper/20 pt-5 text-sm text-paper/80 md:border-0 md:pt-0"><small className="mb-1 text-[10px] tracking-[0.15em] text-clay">EXPLORE</small><Link href="/about">About us</Link><Link href="/services">Our services</Link><Link href="/sectors">Sectors</Link><Link href="/work">Selected work</Link></div>
        <div className="flex flex-col gap-3 border-t border-paper/20 pt-5 text-sm text-paper/80 md:border-0 md:pt-0"><small className="mb-1 text-[10px] tracking-[0.15em] text-clay">GET IN TOUCH</small><Link href="mailto:abulcard@gmail.com">abulcard@gmail.com</Link><Link href="tel:+919993392185">+91 99933 92185</Link><span>Dhar, Madhya Pradesh, India</span></div>
        <div className="border-t border-paper/20 pt-5 font-serif text-xl leading-relaxed md:border-0 md:pt-0">Good work begins with<br /><em className="text-[#d49a7a]">a thoughtful conversation.</em><Link className="mt-4 flex items-center gap-2 font-sans text-sm text-paper" href="/contact">Start a conversation <ArrowRight size={15} /></Link></div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] gap-2 border-t border-paper/20 py-4 text-[11px] tracking-wide text-paper/70 sm:grid-cols-3">
        <span>© 2026 AQ Consulting</span><span className="col-span-2 sm:col-span-1 sm:text-center">Built on experience. Designed for impact.</span><Link className="text-right" href="/privacy">Privacy</Link>
      </div>
    </footer>
  )
}
