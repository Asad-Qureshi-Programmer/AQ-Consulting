import Link from "next/link"

export default function Brand() {
  return (
    <Link href="/" aria-label="AQ Consulting home" className="flex shrink-0 items-center gap-2.5 font-serif text-[17px] tracking-wide text-forest">
      <span aria-hidden="true" className="flex h-7 items-end gap-0.5 -skew-y-12">
        <span className="h-4 w-1.5 bg-clay" />
        <span className="h-6 w-1.5 bg-forest" />
        <span className="h-3 w-1.5 bg-sage" />
      </span>
      <span className="whitespace-nowrap">AQ <span className="font-sans text-[8px] font-semibold leading-tight tracking-[0.14em]">CONSULTING</span></span>
    </Link>
  )
}
