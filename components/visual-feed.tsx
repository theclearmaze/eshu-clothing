import { homeFeed, type FeedItem } from '@/data/homeFeed';

function FeedMedia({ item }: { item: FeedItem }) {
  const media = item.placeholderAsset
    ? <div className="editorial-placeholder" role="img" aria-label={item.alt} style={{ aspectRatio: item.placeholderRatio }}><span>Image placeholder</span><strong>{item.placeholderAsset}</strong></div>
    : <img src={item.image} alt={item.alt} width={item.width} height={item.height} decoding="async" />;
  const typeLabel = item.type === 'product' ? 'Product' : item.type === 'journal' ? 'Journal →' : item.type === 'archive' ? 'Archive →' : '';
  const primary = item.type === 'product' ? `${item.title} — ${item.price}` : item.title ? `${item.title}${item.year ? `, ${item.year}` : ''}` : item.caption;
  const frame = <><div className="feed-image">{media}<span className={`feed-reveal reveal-${item.type}`}><span>{primary}</span>{typeLabel && <small>{typeLabel}</small>}</span></div>{item.type !== 'editorial' && <div className="mobile-feed-caption"><span>{primary}</span><small>{typeLabel.replace(' →', '')}</small></div>}</>;
  const classes = `feed-item feed-item-${item.id} type-${item.type}`;
  const accessibleLabel = typeLabel ? `${primary}, ${typeLabel.replace(' →', '')}` : primary ?? item.alt;
  return item.href ? <a className={classes} href={item.href} aria-label={accessibleLabel}>{frame}</a> : <figure className={classes}>{frame}</figure>;
}

export function VisualFeed() {
  const leftColumn = homeFeed.filter((_, index) => index % 2 === 0);
  const rightColumn = homeFeed.filter((_, index) => index % 2 === 1);
  return <section className="visual-feed" aria-label="Eshu visual journal">
    <div className="feed-desktop-columns">
      <div className="feed-column feed-column-left">{leftColumn.map((item) => <FeedMedia item={item} key={item.id} />)}</div>
      <div className="feed-column feed-column-right">{rightColumn.map((item) => <FeedMedia item={item} key={item.id} />)}</div>
    </div>
    <div className="feed-mobile-column">{homeFeed.map((item) => <FeedMedia item={item} key={item.id} />)}</div>
  </section>;
}
