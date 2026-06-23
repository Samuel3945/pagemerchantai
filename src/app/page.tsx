import type { Metadata } from 'next'
import {
  AIDifferentiatorSection,
  BentoGridSection,
  FAQSection,
  FinalCTASection,
  HeroSection,
  IndustrySelectorSection,
  PricingTeaserSection,
  ProductTourSection,
  SocialProofStrip,
  TestimonialsSection,
} from '@/components/home'
import { faqs } from '@/lib/faqs'
import {
  APP_URL,
  BRAND,
  SITE_DESCRIPTION,
  SITE_URL,
  SUPPORT_EMAIL,
} from '@/lib/site'

// Title and description are inherited from the root layout's defaults (the home
// title is brand-first, so the `%s — Brand` template must NOT apply here). Only
// the canonical is set explicitly per page.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': BRAND,
    'url': SITE_URL,
    'logo': `${SITE_URL}/logo.svg`,
    'email': SUPPORT_EMAIL,
    'description': SITE_DESCRIPTION,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': BRAND,
    'url': SITE_URL,
    'inLanguage': 'es',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': BRAND,
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Web',
    'url': SITE_URL,
    'description': SITE_DESCRIPTION,
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'COP',
      'url': `${APP_URL}/sign-up`,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a,
      },
    })),
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <SocialProofStrip />
      <IndustrySelectorSection />
      <ProductTourSection />
      <AIDifferentiatorSection />
      <BentoGridSection />
      <TestimonialsSection />
      <PricingTeaserSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
