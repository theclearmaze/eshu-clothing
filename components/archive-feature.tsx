import Link from 'next/link';
import { archiveContent as archive } from '@/data/archive';
export function ArchiveFeature() {
  return <section className="archive" aria-labelledby="archive-title">
    <div className="archive-main-wrap"><img className="archive-main" src={archive.mainImage} alt={archive.mainAlt} /><div className="vertical-meta"><span>{archive.location.toUpperCase()}</span><span>{archive.years}</span></div><div className="archive-painted">{archive.paintedCopy.map((line) => <span key={line}>{line}</span>)}</div></div>
    <div className="archive-copy"><h2 id="archive-title">{archive.title}</h2><div className="italic">{archive.subtitle}</div><p className="body">{archive.body}</p><Link className="editorial-link" href="/archive">Explore the archive <span>→</span></Link></div>
    <div className="archive-poster-wrap"><div className="archive-poster"><img src={archive.posterImage} alt={archive.posterAlt} /><div className="poster-text"><span>ESHU<br />CLOTHING<br />ATLANTA</span><small>SINCE 1998</small></div></div><p className="archive-note">{archive.note.map((line) => <span key={line}>{line}</span>)}</p></div>
  </section>;
}
