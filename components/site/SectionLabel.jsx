export default function SectionLabel({ children, light = false }) {
  return (
    <div className={`flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.16em] ${light ? "text-paper/75" : "text-forest/70"}`}>
      <span aria-hidden="true" className="h-px w-6 bg-clay" />{children}
    </div>
  )
}
