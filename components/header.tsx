import { Search, ShoppingBag, UserRound } from 'lucide-react';
import { navigation } from '@/data/site';

export function Header() {
  return <header className="site-header">
    <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label.toUpperCase()}</a>)}</nav>
    <details className="mobile-menu"><summary>MENU</summary><nav className="mobile-drawer" aria-label="Mobile navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="/contact">Contact</a></nav></details>
    <div className="header-tools"><a href="#search" aria-label="Search"><Search aria-hidden="true" /></a><a href="/contact" aria-label="Account"><UserRound aria-hidden="true" /></a><a href="#bag" aria-label="Shopping bag, 0 items"><ShoppingBag aria-hidden="true" /></a></div>
  </header>;
}
