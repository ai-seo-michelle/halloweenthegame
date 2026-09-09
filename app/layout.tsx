import type { Metadata } from 'next';
import { JsonLd } from '@/components/site/JsonLd';
import { absoluteUrl, siteConfig } from '@/lib/site-config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.name,
    template: '%s | Haddonfield Guide',
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: siteConfig.analytics.googleSearchConsoleVerification
    ? { google: siteConfig.analytics.googleSearchConsoleVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId = siteConfig.analytics.googleAnalyticsId;

  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            url: absoluteUrl('/'),
            description: siteConfig.description,
            inLanguage: 'en-US',
            publisher: {
              '@type': 'Organization',
              name: siteConfig.shortName,
            },
          }}
        />
        {googleAnalyticsId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${googleAnalyticsId}');`,
              }}
            />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
