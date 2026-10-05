import { storyContent } from '@/data/site';

export function StoryPage() {
  return <main className="story-page">
    <div className="story-page-image"><img src={storyContent.image} alt={storyContent.alt} /></div>
    <article className="story-page-copy"><p className="eyebrow">{storyContent.eyebrow}</p><h1>{storyContent.title.map((line) => <span key={line}>{line}</span>)}</h1><p>Eshu is rooted in Atlanta, shaped by community, memory, and the everyday objects that carry culture forward.</p></article>
  </main>;
}
