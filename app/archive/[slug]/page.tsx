import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EditorialDetail } from '@/components/editorial-detail';
import { findFeedItem, homeFeed } from '@/data/homeFeed';

export function generateStaticParams() { return homeFeed.filter((item) => item.type === 'archive').map((item) => ({ slug: item.slug ?? item.id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = findFeedItem('archive', slug); return item ? { title: item.title, description: item.description?.[0] } : {}; }
export default async function ArchivePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = findFeedItem('archive', slug); if (!item) notFound(); return <EditorialDetail item={item} />; }
