import Link from 'next/link';
import { homeFeed } from '@/data/homeFeed';

const archiveItems = homeFeed.filter((item) => item.type === 'archive');

export function ArchiveIndex() {
  return <main className="listing-page">
    <header className="listing-header"><p className="eyebrow">Atlanta, Georgia</p><h1>The Archive</h1></header>
    <div className="catalog-grid archive-catalog">
      {archiveItems.map((item) => <Link className="catalog-tile" href={item.href!} key={item.id}>
        <div className="catalog-media"><img src={item.image} alt={item.alt} /></div>
        <div className="catalog-meta"><strong>{item.title}</strong>{item.year && <span>{item.year}</span>}</div>
      </Link>)}
    </div>
  </main>;
}
