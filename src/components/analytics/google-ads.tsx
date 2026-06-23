import Script from 'next/script'

const GOOGLE_ADS_ID = 'AW-18265929901'

/**
 * Google Ads global site tag (gtag.js).
 * Loaded after hydration so it never blocks the first paint.
 * Fire conversions from here with:
 *   gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/<label>` })
 */
export function GoogleAds() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  )
}
