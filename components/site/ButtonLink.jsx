import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function ButtonLink({ href, children, light = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex w-fit items-center gap-4 px-5 py-3 text-sm transition-colors ${light ? 'bg-paper text-forest hover:bg-white' : 'bg-forest hover:bg-forest-soft text-white'}`}
    >
      {children}
      <ArrowUpRight size={16} />
    </Link>
  )
}
