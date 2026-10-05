import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArchiveIndex } from '@/components/archive-index';
import { ContactPage } from '@/components/contact-page';
import { ShopIndex } from '@/components/shop-index';
import { StoryPage } from '@/components/story-page';
import { internalPages } from '@/data/site';
type Slug = keyof typeof internalPages;
export function generateStaticParams() { return Object.keys(internalPages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = internalPages[slug as Slug]; return page ? { title: page.title, description: page.body } : {}; }
export default async function InteriorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = internalPages[slug as Slug];
  if (!page) notFound();
  if (slug === 'shop') return <ShopIndex />;
  if (slug === 'archive') return <ArchiveIndex />;
  if (slug === 'story') return <StoryPage />;
  if (slug === 'contact') return <ContactPage />;
  return <main className="interior coming-soon"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.body}</p></main>;
}
