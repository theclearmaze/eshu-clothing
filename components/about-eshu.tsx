import { aboutContent } from '@/data/site';

export function AboutEshu() {
  return <section className="about-eshu" aria-labelledby="about-title"><div className="about-image"><img src={aboutContent.image} alt={aboutContent.alt} loading="lazy" /></div><div className="about-copy"><p className="eyebrow">{aboutContent.eyebrow}</p><h2 id="about-title">{aboutContent.title.map((line) => <span key={line}>{line}</span>)}</h2><p>{aboutContent.body}</p><div className="about-meta"><span>Atlanta, Georgia</span><span>Since 1998</span></div><a className="editorial-link" href="/story">Our story <span>→</span></a></div></section>;
}
