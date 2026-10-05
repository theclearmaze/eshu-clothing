import type { ProductImage } from '@/data/products';

export function PlaceholderMedia({ asset, eager = false }: { asset: ProductImage; eager?: boolean }) {
  if (asset.image) return <img src={asset.image} alt={asset.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
  return <div className="detail-placeholder" role="img" aria-label={asset.alt} style={{ aspectRatio: asset.ratio }}><span>Image placeholder</span><strong>{asset.placeholderAsset}</strong></div>;
}
