import Link from 'next/link';
import { storyContent } from '@/data/site';
export function StoryFeature() {
  return <section className="story" aria-labelledby="story-title"><img src={storyContent.image} alt={storyContent.alt} /><div className="story-copy"><p className="eyebrow">{storyContent.eyebrow}</p><h2 id="story-title">{storyContent.title.map((line) => <span key={line}>{line}</span>)}</h2><Link className="editorial-link" href="/story">Our story <span>→</span></Link></div></section>;
}
