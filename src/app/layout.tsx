import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz'],
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MyMerchantAI — El POS inteligente para Latinoamérica',
  description: 'Vende más rápido y controla tu negocio en tiempo real. El punto de venta con inteligencia artificial para comercios de Latinoamérica.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${bricolage.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
