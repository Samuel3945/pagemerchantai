import type { Metadata } from 'next'
import { BRAND } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Precios',
  description:
    `Planes de ${BRAND} para cada etapa de tu negocio. Empezá gratis para `
    + 'siempre; los planes pagos incluyen 14 días de prueba sin tarjeta.',
  alternates: { canonical: '/precios' },
}

export default function PreciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
