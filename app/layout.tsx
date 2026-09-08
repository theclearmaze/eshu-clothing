import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Eshu Clothing — Atlanta, Georgia', template: '%s — Eshu Clothing' },
  description: 'An editorial fashion archive and clothing house rooted in Atlanta, Georgia.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#content">Skip to content</a><Header /><div id="content">{children}</div><Footer /></body></html>;
}
