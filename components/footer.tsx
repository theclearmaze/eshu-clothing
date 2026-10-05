import { navigation } from '@/data/site';

export function Footer() {
  return <footer className="site-footer"><div className="footer-top">
    <div className="footer-brand"><strong>ESHU</strong><p>Atlanta, Georgia</p></div>
    <nav className="footer-nav" aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label.toUpperCase()}</a>)}<a href="/contact">CONTACT</a></nav>
    <div className="newsletter"><div className="newsletter-links"><a href="#instagram">IG</a><a href="#newsletter">NEWSLETTER</a></div><span className="newsletter-line" /></div>
  </div><div className="footer-bottom"><span>© 2026 Eshu Clothing. All Rights Reserved.</span><em>Good Clothes For Real People.</em></div></footer>;
}
