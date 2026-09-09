import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuideArticle } from '@/components/site/GuideArticle';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import { getGuide, guidePages, guidePath } from '@/lib/guides';
import { absoluteUrl, siteConfig } from '@/lib/site-config';

type GuideRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return guidePages.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: GuideRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {
      title: 'Guide Not Found',
    };
  }

  const url = absoluteUrl(guidePath(guide.slug));

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url,
      siteName: siteConfig.name,
      type: 'article',
      publishedTime: siteConfig.lastUpdatedIso,
      modifiedTime: siteConfig.lastUpdatedIso,
    },
    twitter: {
      card: 'summary',
      title: guide.title,
      description: guide.metaDescription,
    },
  };
}

export default async function GuideRoute({ params }: GuideRouteProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <GuideArticle guide={guide} />
      <SiteFooter />
    </>
  );
}
