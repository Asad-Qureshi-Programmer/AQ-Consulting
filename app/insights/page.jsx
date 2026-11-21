import InteriorPage from '../../components/pages/InteriorPage'
import SiteShell from '../../components/site/SiteShell'
import { pageContent } from '../../data/pages'

export default function InsightsPage() {
  return (
    <SiteShell>
      <InteriorPage page={pageContent.insights} />
    </SiteShell>
  )
}
