import Link from 'next/link';
import { products } from '@/data/products';

export function ShopIndex() {
  return <main className="listing-page">
    <header className="listing-header"><p className="eyebrow">Current Collection</p><h1>Shop</h1></header>
    <div className="catalog-grid product-catalog">
      {products.map((product) => <Link className="catalog-tile" href={product.href} key={product.id}>
        <div className="catalog-media"><img src={product.feedImage.image} alt={product.feedImage.alt} /></div>
        <div className="catalog-meta"><strong>{product.title}</strong><span>{product.price}</span></div>
      </Link>)}
    </div>
  </main>;
}
