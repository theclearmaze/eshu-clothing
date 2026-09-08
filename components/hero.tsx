import { heroSlides } from '@/data/site';
export function Hero() {
  const slide = heroSlides[0];
  return <section className="hero" aria-label="Eshu Clothing introduction"><img src={slide.image} alt={slide.alt} />
    <div className="hero-copy"><h1 className="hero-title">{slide.lines.map((line) => <span key={line}>{line}</span>)}</h1><div className="hero-est">{slide.established.toUpperCase()}</div></div>
    <p className="hero-note">{slide.note.map((line) => <span key={line}>{line}</span>)}</p><div className="hero-progress"><span>01 / 04</span><i aria-hidden="true" /></div>
    <div className="hero-controls" aria-label="Hero slides"><button type="button" aria-label="Previous slide">←</button><button type="button" aria-label="Next slide">→</button></div>
  </section>;
}
