import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/product-detail';
import { findProduct, products } from '@/data/products';

export function generateStaticParams() { return products.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = findProduct(slug); return item ? { title: item.title, description: item.shortDescription } : {}; }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = findProduct(slug); if (!item) notFound(); return <ProductDetail item={item} />; }
