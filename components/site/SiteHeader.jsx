import Link from 'next/link'
import { ArrowUpRight, Menu } from 'lucide-react'
import Brand from './Brand'

const links = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Sectors', '/sectors'],
  ['Our work', '/work'],
  ['Insights', '/insights'],
]
const mobileLinks = [
  ...links.slice(0, 4),
  ['Our process', '/process'],
  ['Training', '/training'],
  ['Resources', '/resources'],
  ...links.slice(4),
  ['Contact', '/contact'],
]

export default function SiteHeader() {
  return (
    <header className="bg-paper relative z-20">
      <div className="bg-forest text-paper flex min-h-8 items-center justify-center px-4 text-center text-[10px] tracking-[0.08em] sm:justify-between sm:px-6 md:px-16">
        <span>Grounded in communities. Focused on lasting change.</span>
        <span className="hidden sm:block">
          Based in Madhya Pradesh, India <span className="text-sage mx-2">●</span> Working across
          India
        </span>
      </div>
      <nav
        aria-label="Main navigation"
        className="border-line mx-auto flex h-[68px] max-w-7xl items-center gap-3 border-b px-4 sm:px-6 md:h-[82px] md:justify-between lg:px-16"
      >
        <Brand />
        <div className="text-ink/80 hidden items-center gap-5 text-[13px] lg:flex xl:gap-8">
          {mobileLinks.map(([label, href]) => (
            <Link className="hover:text-clay transition-colors" href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="bg-forest hover:bg-forest-soft ml-auto inline-flex shrink-0 items-center gap-2 px-3 py-2.5 text-xs text-white transition-colors sm:px-4 lg:ml-0"
        >
          Let&apos;s talk <ArrowUpRight size={15} />
        </Link>
        <details className="group relative lg:hidden">
          <summary
            aria-label="Open navigation menu"
            className="text-forest hover:bg-forest/5 grid size-9 cursor-pointer list-none place-items-center rounded-sm [&::-webkit-details-marker]:hidden"
          >
            <Menu size={21} />
          </summary>
          <div className="border-line bg-paper absolute top-11 right-0 z-50 hidden w-[min(13rem,calc(100vw-2rem))] flex-col border p-2 shadow-xl group-open:flex">
            {mobileLinks.map(([label, href]) => (
              <Link
                className="border-line hover:bg-cream border-b px-3 py-2.5 text-sm last:border-0"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  )
}
