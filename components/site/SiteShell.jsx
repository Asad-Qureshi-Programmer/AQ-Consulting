import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export default function SiteShell({ children }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
