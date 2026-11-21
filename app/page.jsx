import AboutPreview from '../components/home/AboutPreview'
import ClosingCTA from '../components/home/ClosingCTA'
import HeroSection from '../components/home/HeroSection'
import InsightsPreview from '../components/home/InsightsPreview'
import QuoteBand from '../components/home/QuoteBand'
import SectorPreview from '../components/home/SectorPreview'
import ServicesPreview from '../components/home/ServicesPreview'
import TrustStrip from '../components/home/TrustStrip'
import WorkPreview from '../components/home/WorkPreview'
import SiteShell from '../components/site/SiteShell'

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
      <QuoteBand />
      <SectorPreview />
      <WorkPreview />
      <InsightsPreview />
      <ClosingCTA />
    </SiteShell>
  )
}
