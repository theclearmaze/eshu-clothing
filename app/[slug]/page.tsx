import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { internalPages } from '@/data/site';
type Slug = keyof typeof internalPages;
export function generateStaticParams() { return Object.keys(internalPages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = internalPages[slug as Slug]; return page ? { title: page.title, description: page.body } : {}; }
export default async function InteriorPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = internalPages[slug as Slug]; if (!page) notFound(); return <main className="interior"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.body}</p></main>; }
