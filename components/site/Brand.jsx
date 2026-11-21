import Link from 'next/link'

export default function Brand() {
  return (
    <Link
      href="/"
      aria-label="AQ Consulting home"
      className="text-forest flex shrink-0 items-center gap-2.5 font-serif text-[17px] tracking-wide"
    >
      <span aria-hidden="true" className="flex h-7 -skew-y-12 items-end gap-0.5">
        <span className="bg-clay h-4 w-1.5" />
        <span className="bg-forest h-6 w-1.5" />
        <span className="bg-sage h-3 w-1.5" />
      </span>
      <span className="whitespace-nowrap">
        AQ{' '}
        <span className="font-sans text-[8px] leading-tight font-semibold tracking-[0.14em]">
          CONSULTING
        </span>
      </span>
    </Link>
  )
}
