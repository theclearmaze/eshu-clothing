export const navigation = [
  { label: 'Home', href: '/' }, { label: 'Journal', href: '/journal' },
  { label: 'Shop', href: '/shop' }, { label: 'Archive', href: '/archive' }, { label: 'About', href: '/story' },
];

export const heroSlides = [{
  image: '/images/hero-placeholder.png', alt: 'Eshu editorial lifestyle photograph in an Atlanta streetscape',
  cta: { label: 'Shop', href: '/shop' },
}];

export const aboutContent = {
  image: '/images/eshu-assets/04%20EDITORIAL-LIFESTYLE/editorial-vintage-american-flag-01.JPG', alt: 'Eshu community member holding an illustrated tee in the Atlanta shop',
  eyebrow: 'About Eshu', title: ['Built in Atlanta.', 'For Real People.'],
  body: 'Eshu is a clothing house shaped by Atlanta—its neighborhoods, its makers, and the people who give the city its rhythm. We make honest, lasting pieces for daily life, grounded in culture and designed to be worn your own way.',
};

export const storyContent = {
  image: '/images/eshu-assets/04%20EDITORIAL-LIFESTYLE/Eshu-Memory-Cart-01.JPG',
  alt: 'Eshu memory cart installation surrounded by photographs, records, books, and found objects',
  eyebrow: 'Our Story',
  title: ['Culture carried', 'forward.'],
};

export const contactLinks = {
  email: 'hello@eshu.clothing',
  instagram: 'https://www.instagram.com/',
};

export const internalPages = {
  shop: { title: 'Shop', eyebrow: 'Current Collection', body: 'The full Eshu collection will live here. New pieces, lasting staples, and objects made with purpose.' },
  archive: { title: 'The Archive', eyebrow: 'Atlanta, Georgia', body: 'A living record of the people, places, and pieces that shaped Eshu—from Atlanta to everywhere.' },
  story: { title: 'Our Story', eyebrow: 'Good Clothes For Real People', body: 'Eshu is rooted in culture, community, and the belief that the things we wear should mean something and last.' },
  journal: { title: 'Journal', eyebrow: 'Notes From Eshu', body: 'Coming soon.' },
  contact: { title: 'Contact', eyebrow: 'Atlanta, Georgia', body: 'For general inquiries, wholesale, press, and collaborations, write to hello@eshu.clothing.' },
} as const;
