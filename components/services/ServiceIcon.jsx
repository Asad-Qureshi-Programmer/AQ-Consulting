import { BookOpen, ChartNoAxesCombined, Compass, FileText, Leaf, UsersRound } from 'lucide-react'

const icons = {
  compass: Compass,
  file: FileText,
  chart: ChartNoAxesCombined,
  book: BookOpen,
  people: UsersRound,
  leaf: Leaf,
}

export default function ServiceIcon({ name }) {
  const Icon = icons[name] || Compass
  return <Icon aria-hidden="true" strokeWidth={1.5} />
}
