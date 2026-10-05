import Link from 'next/link';
import { products } from '@/data/products';
export function ProductGrid() {
  return <section className="collection" aria-labelledby="collection-title"><div className="section-heading"><div><p className="eyebrow">Current Collection</p><h2 id="collection-title">Fall / Winter 2026</h2></div><Link className="editorial-link" href="/shop">View all <span>→</span></Link></div>
    <div className="product-grid">{products.map((product) => <Link className="product" href={product.href} key={product.id}><div className="product-media">{product.feedImage.image ? <img src={product.feedImage.image} alt={product.feedImage.alt} /> : <div className="editorial-placeholder" role="img" aria-label={product.feedImage.alt} style={{ aspectRatio: product.feedImage.ratio }}><span>Image needed</span><strong>{product.feedImage.placeholderAsset}</strong></div>}</div><div className="product-info"><strong className="product-name">{product.title}</strong><span>{product.price}</span></div></Link>)}</div>
  </section>;
}
