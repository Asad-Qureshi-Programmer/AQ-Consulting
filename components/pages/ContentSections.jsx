import { ArrowUpRight, Check } from 'lucide-react'
import SectionLabel from '../site/SectionLabel'

const cardSurfaces = ['bg-[#f1f0e8]', 'bg-[#e7ebdf]', 'bg-[#f0e8dd]', 'bg-[#e9ece8]']

export default function ContentSections({ sections, kicker }) {
  return (
    <section className="bg-paper px-6 py-14 sm:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionLabel>{kicker} / AT A GLANCE</SectionLabel>
          <p className="text-forest font-serif text-lg leading-7">
            Practical expertise.
            <br />
            Grounded in experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {sections.map((section, index) => (
            <article
              className={`relative isolate flex min-h-56 flex-col overflow-hidden border border-black/5 p-5 sm:p-7 ${cardSurfaces[index % cardSurfaces.length]}`}
              key={section.title}
            >
              <div
                aria-hidden="true"
                className="bg-forest/5 absolute -top-16 -right-12 -z-10 size-40 rounded-full"
              />
              <div className="mb-5 flex items-center justify-between">
                <span className="text-clay font-serif text-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="border-forest/20 text-forest grid size-9 place-items-center rounded-full border">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <h2 className="text-forest font-serif text-2xl leading-tight tracking-tight">
                {section.title}
              </h2>
              <p className="text-ink/80 mt-3 text-base leading-7 text-pretty">{section.text}</p>
              {section.items && (
                <ul className="border-forest/15 mt-5 flex flex-col gap-3 border-t pt-4">
                  {section.items.map((item) => (
                    <li
                      className="text-ink/80 flex items-start gap-2.5 text-sm leading-6"
                      key={item}
                    >
                      <Check aria-hidden="true" className="text-clay mt-1 shrink-0" size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
