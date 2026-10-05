import { contactLinks } from '@/data/site';

export function ContactPage() {
  return <main className="contact-page">
    <div><p className="eyebrow">Atlanta, Georgia</p><h1>Contact</h1></div>
    <div className="contact-links">
      <a href={`mailto:${contactLinks.email}`}>{contactLinks.email}</a>
      <a href={contactLinks.instagram} target="_blank" rel="noreferrer">Instagram</a>
    </div>
  </main>;
}
