import { heroSlides } from '@/data/site';
export function Hero() {
  const slide = heroSlides[0];
  return <section className="hero" aria-label="Eshu Clothing introduction">
    <div className="hero-logo-stack" aria-label="Eshu">
      <img className="hero-logo hero-logo-black" src="/images/eshu-assets/05%20BRAND-LOGOS/eshu-logo-black.png" alt="" aria-hidden="true" />
      <img className="hero-logo hero-logo-green" src="/images/eshu-assets/05%20BRAND-LOGOS/eshu-logo-green.png" alt="" aria-hidden="true" />
      <img className="hero-logo hero-logo-red" src="/images/eshu-assets/05%20BRAND-LOGOS/eshu-logo-red.png" alt="" aria-hidden="true" />
    </div>
    <a className="hero-cta" href={slide.cta.href}>{slide.cta.label} <span>→</span></a>
  </section>;
}
