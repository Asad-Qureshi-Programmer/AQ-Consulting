import ButtonLink from "../site/ButtonLink"
import ContactPanel from "./ContactPanel"
import ContentSections from "./ContentSections"
import FounderPanel from "./FounderPanel"
import PageHero from "./PageHero"

export default function InteriorPage({ page }) {
  return (
    <>
      <PageHero slug={page.slug} kicker={page.kicker} titleLead={page.titleLead} titleEmphasis={page.titleEmphasis} intro={page.intro} />
      <ContentSections sections={page.sections} kicker={page.kicker} />
      {page.slug === "contact" && <ContactPanel />}
      {page.slug === "about" && <FounderPanel />}
      {page.slug !== "contact" && <section className="flex flex-col justify-between gap-5 bg-[#e9e9dd] px-6 py-10 sm:flex-row sm:items-center sm:px-10 lg:px-24"><p className="font-serif text-2xl text-forest">Let’s make your next programme stronger.</p><ButtonLink href="/contact">Start a conversation</ButtonLink></section>}
    </>
  )
}
