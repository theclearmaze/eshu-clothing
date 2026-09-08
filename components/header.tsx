import Link from 'next/link';
import { navigation } from '@/data/site';

export function Header() {
  return <header className="site-header">
    <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label.toUpperCase()}</Link>)}</nav>
    <details className="mobile-menu"><summary>MENU</summary><nav className="mobile-drawer" aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/contact">Contact</Link></nav></details>
    <Link className="wordmark" href="/" aria-label="Eshu Clothing home"><strong>ESHU</strong><span>ATLANTA, GEORGIA</span></Link>
    <div className="header-tools"><a href="#search">SEARCH</a><a href="#bag" aria-label="Shopping bag, 0 items">BAG (0)</a></div>
  </header>;
}
