export const navigation = [
  { label: 'Shop', href: '/shop' }, { label: 'Archive', href: '/archive' },
  { label: 'Story', href: '/story' }, { label: 'Journal', href: '/journal' },
];

export const heroSlides = [{
  image: '/images/hero-placeholder.png', alt: 'Eshu editorial lifestyle image placeholder in an Atlanta streetscape',
  lines: ['Clothing', 'Culture', 'Atlanta', 'Always'], established: 'Est. 1998', note: ['Different People,', 'Same Spirit.'],
}];

export const storyContent = {
  image: '/images/textile-detail-placeholder.png', alt: 'Close-up placeholder of a woven label and garment textile',
  eyebrow: 'More Than Clothes', title: ['Rooted in culture.', 'Built to last.'],
};

export const internalPages = {
  shop: { title: 'Shop', eyebrow: 'Current Collection', body: 'The full Eshu collection will live here. New pieces, lasting staples, and objects made with purpose.' },
  archive: { title: 'The Archive', eyebrow: 'Atlanta, Georgia', body: 'A living record of the people, places, and pieces that shaped Eshu—from Atlanta to everywhere.' },
  story: { title: 'Our Story', eyebrow: 'Good Clothes For Real People', body: 'Eshu is rooted in culture, community, and the belief that the things we wear should mean something and last.' },
  journal: { title: 'Journal', eyebrow: 'Notes From Eshu', body: 'Conversations, field notes, photographs, and stories from the Eshu community.' },
  contact: { title: 'Contact', eyebrow: 'Atlanta, Georgia', body: 'For general inquiries, wholesale, press, and collaborations, write to hello@eshu.clothing.' },
} as const;
