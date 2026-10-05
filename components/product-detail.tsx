import { PlaceholderMedia } from '@/components/placeholder-media';
import { ProductCommerce } from '@/components/product-commerce';
import type { Product } from '@/data/products';

export function ProductDetail({ item }: { item: Product }) {
  return <main className="detail-page product-detail">
    <div className="detail-gallery">{item.galleryImages.map((asset, index) => <figure key={asset.placeholderAsset ?? asset.image}><PlaceholderMedia asset={asset} eager={index === 0} /></figure>)}</div>
    <aside className="product-summary"><p className="eyebrow">Eshu product</p><h1>{item.title}</h1><p className="product-short-description">{item.shortDescription}</p><p className="detail-price">{item.price}</p><ProductCommerce availableSizes={item.availableSizes} inventory={item.inventory} sizeChartId={item.sizeChartId} /></aside>
  </main>;
}
