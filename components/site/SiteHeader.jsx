import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"
import Brand from "./Brand"

const links = [
  ["About", "/about"], ["Services", "/services"], ["Sectors", "/sectors"],
  ["Our work", "/work"], ["Insights", "/insights"],
]
const mobileLinks = [...links.slice(0, 4), ["Our process", "/process"], ["Training", "/training"], ["Resources", "/resources"], ...links.slice(4), ["Contact", "/contact"]]

export default function SiteHeader() {
  return (
    <header className="relative z-20 bg-paper">
      <div className="flex min-h-8 items-center justify-center bg-forest px-4 text-center text-[10px] tracking-[0.08em] text-paper sm:justify-between sm:px-6 md:px-16">
        <span>Grounded in communities. Focused on lasting change.</span>
        <span className="hidden sm:block">Based in Madhya Pradesh, India <span className="mx-2 text-sage">●</span> Working across India</span>
      </div>
      <nav aria-label="Main navigation" className="mx-auto flex h-[68px] max-w-7xl items-center gap-3 border-b border-line px-4 sm:px-6 md:h-[82px] md:justify-between lg:px-16">
        <Brand />
        <div className="hidden items-center gap-5 text-[13px] text-ink/80 lg:flex xl:gap-8">
          {mobileLinks.map(([label, href]) => <Link className="transition-colors hover:text-clay" href={href} key={href}>{label}</Link>)}
        </div>
        <Link href="/contact" className="ml-auto lg:ml-0 inline-flex shrink-0 items-center gap-2 bg-forest px-3 py-2.5 text-xs text-white transition-colors hover:bg-forest-soft sm:px-4">
          Let&apos;s talk <ArrowUpRight size={15} />
        </Link>
        <details className="group relative lg:hidden">
          <summary aria-label="Open navigation menu" className="grid size-9 cursor-pointer list-none place-items-center rounded-sm text-forest hover:bg-forest/5 [&::-webkit-details-marker]:hidden"><Menu size={21} /></summary>
          <div className="absolute right-0 top-11 z-50 hidden w-[min(13rem,calc(100vw-2rem))] flex-col border border-line bg-paper p-2 shadow-xl group-open:flex">
            {mobileLinks.map(([label, href]) => <Link className="border-b border-line px-3 py-2.5 text-sm last:border-0 hover:bg-cream" href={href} key={href}>{label}</Link>)}
          </div>
        </details>
      </nav>
    </header>
  )
}
