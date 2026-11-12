import './globals.css'
import '../components/EnvelopeOverlay.css'
import '../components/ButterflyFlight.css'

export const metadata = {
  title: 'Amal & Sachini',
  description: 'You are warmly invited to celebrate with Amal & Sachini on December 11, 2026.',
  metadataBase: new URL('https://amal-and-sachini.vercel.app'),
  icons: {
    icon: [
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Amal & Sachini',
    description: 'You are warmly invited to celebrate with Amal & Sachini on December 11, 2026.',
    url: 'https://amal-and-sachini.vercel.app',
    images: [{ url: '/assets/logo.png', width: 1254, height: 1254, alt: 'Amal & Sachini' }],
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="si">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;600;700&family=Noto+Sans+Sinhala:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body><div id="root">{children}</div></body>
    </html>
  )
}
