import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'AQ Consulting | Rural Development & NGO Consulting India',
  description:
    'Practical development consulting for NGOs, CSR foundations and rural development organisations. Programme design, proposals, MEAL, capacity building and technical advisory, led by Abul Hasan Qureshi with 30 years of experience.',
  generator: 'AQ Consulting',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#f6f3eb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
