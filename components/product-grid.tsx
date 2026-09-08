import Link from 'next/link';
import { products } from '@/data/products';
export function ProductGrid() {
  return <section className="collection" aria-labelledby="collection-title"><div className="section-heading"><div><p className="eyebrow">Current Collection</p><h2 id="collection-title">Fall / Winter 2026</h2></div><Link className="editorial-link" href="/shop">View all <span>→</span></Link></div>
    <div className="product-grid">{products.map((product) => <Link className="product" href="/shop" key={product.id}><div className="product-media"><img src={product.image} alt={product.alt} /></div><div className="product-info"><strong className="product-name">{product.name}</strong><span>{product.price}</span></div></Link>)}</div>
  </section>;
}
