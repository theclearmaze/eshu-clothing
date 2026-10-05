import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EditorialDetail } from '@/components/editorial-detail';
import { findFeedItem, homeFeed } from '@/data/homeFeed';

export function generateStaticParams() {
  return homeFeed.filter((item) => item.type === 'editorial').map((item) => ({ slug: item.slug ?? item.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = findFeedItem('editorial', slug);
  return item ? { title: item.title ?? item.caption ?? 'Eshu Editorial', description: item.caption } : {};
}

export default async function EditorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = findFeedItem('editorial', slug);
  if (!item) notFound();
  return <EditorialDetail item={item} />;
}
