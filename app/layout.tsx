import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const din = localFont({
  src: [
    {
      path: '../public/fonts/D-DIN.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/D-DIN-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-din',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Buscador de sucursales | Starken',
  description:
    'Encuentra la sucursal Starken más conveniente para enviar o retirar tus paquetes. Busca por comuna y visualiza toda la cobertura en el mapa.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${nunito.variable} ${din.variable} bg-background font-sans`}>
      <body className="font-sans antialiased text-[#2b2b2b]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
