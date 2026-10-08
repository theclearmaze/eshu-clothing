import { PlaceholderMedia } from '@/components/placeholder-media';
import type { FeedItem } from '@/data/homeFeed';

export function EditorialDetail({ item }: { item: FeedItem }) {
  const isCommunity = item.id.startsWith('community-');
  const heading = item.title ?? item.caption;
  return <main className={`detail-page ${item.type}-detail`}>
    <header className="entry-heading"><p className="eyebrow">{isCommunity ? 'Community' : item.type === 'journal' ? 'Sartorial' : item.type}</p>{heading && <h1>{heading}</h1>}<div className="entry-meta">{item.year && <span>{item.year}</span>}{item.date && <span>{item.date}</span>}{item.source && <span>{item.source}</span>}</div></header>
    {item.gallery?.[0] && <div className="entry-hero"><PlaceholderMedia asset={item.gallery[0]} eager /></div>}
    {item.contextHeading || item.description?.length ? <article className="detail-writing"><p className="eyebrow">Context</p>{item.contextHeading && <h2>{item.contextHeading}</h2>}{item.description?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article> : null}
    {item.gallery && item.gallery.length > 1 && <div className="supporting-gallery">{item.gallery.slice(1).map((asset) => <figure key={asset.placeholderAsset ?? asset.image}><PlaceholderMedia asset={asset} /></figure>)}</div>}
  </main>;
}
