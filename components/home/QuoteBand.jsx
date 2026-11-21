export default function QuoteBand() {
  return (
    <section className="bg-forest text-paper px-6 py-16 text-center sm:px-10 md:py-20">
      <div aria-hidden="true" className="h-12 font-serif text-6xl leading-none text-[#c17d5f]">
        “
      </div>
      <blockquote className="mx-auto my-4 max-w-3xl font-serif text-2xl leading-relaxed sm:text-3xl">
        We bring the perspective of the field into every plan, proposal and partnership.
      </blockquote>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
        <span aria-hidden="true" className="bg-clay h-px w-5" />
        Abul Hasan Qureshi
        <span className="text-paper/70 w-full text-[10px] tracking-[0.12em]">
          FOUNDER &amp; DEVELOPMENT PROFESSIONAL
        </span>
      </div>
    </section>
  )
}
