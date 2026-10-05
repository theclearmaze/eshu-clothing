import { findProduct, type ProductImage } from '@/data/products';

export type FeedType = 'product' | 'journal' | 'archive' | 'editorial';
export type GalleryAsset = ProductImage;

export type FeedItem = {
  id: string;
  type: FeedType;
  slug?: string;
  image?: string;
  width?: number;
  height?: number;
  placeholderAsset?: string;
  placeholderRatio?: string;
  alt: string;
  title?: string;
  price?: string;
  href?: string;
  productSlug?: string;
  year?: string;
  date?: string;
  source?: string;
  caption?: string;
  gallery?: GalleryAsset[];
  description?: string[];
  contextHeading?: string;
};

const asset = (...segments: string[]) => `/images/eshu-assets/${segments.map(encodeURIComponent).join('/')}`;

function productFeed(slug: string): FeedItem {
  const product = findProduct(slug);
  if (!product) throw new Error(`Unknown product: ${slug}`);
  return {
    id: `product-${slug}`, type: 'product', slug: product.slug, image: product.feedImage.image,
    width: product.feedImage.width, height: product.feedImage.height,
    placeholderAsset: product.feedImage.placeholderAsset, placeholderRatio: product.feedImage.ratio,
    alt: product.feedImage.alt, title: product.title, price: product.price,
    href: product.href, productSlug: product.slug,
  };
}

const archiveGraffiti: FeedItem = {
  id: 'graffiti-pop-up', type: 'archive', slug: 'graffiti-pop-up', image: asset('03 ARCHIVE', 'archive-eshu-pop-up-graffiti-booth-01.JPG'),
  width: 1440, height: 1800,
  alt: 'Eshu graffiti pop-up booth', title: 'Graffiti Pop-Up', href: '/archive/graffiti-pop-up',
  gallery: [{ image: asset('03 ARCHIVE', 'archive-eshu-pop-up-graffiti-booth-01.JPG'), alt: 'Eshu graffiti pop-up booth' }],
};
const archiveRetail: FeedItem = {
  id: 'retail-rack', type: 'archive', slug: 'retail-rack', image: asset('03 ARCHIVE', 'archive-eshu-retail-rack-01.JPG'),
  width: 1320, height: 2346,
  alt: 'Eshu retail rack in Atlanta', title: 'Eshu Retail Archive', href: '/archive/retail-rack',
  gallery: [{ image: asset('03 ARCHIVE', 'archive-eshu-retail-rack-01.JPG'), alt: 'Eshu retail rack in Atlanta' }],
};
const archiveCollection: FeedItem = {
  id: 'vintage-tee-collection', type: 'archive', slug: 'vintage-tee-collection', image: asset('03 ARCHIVE', 'editorial-vintage-tee-collection-01.JPEG'),
  width: 2400, height: 1800,
  alt: 'Eshu vintage graphic tee collection', title: 'Vintage Tee Collection', href: '/archive/vintage-tee-collection',
  gallery: [{ image: asset('03 ARCHIVE', 'editorial-vintage-tee-collection-01.JPEG'), alt: 'Eshu vintage graphic tee collection' }],
};

function editorialEntry(id: string, folder: '04 EDITORIAL-LIFESTYLE' | '08 COMMUNITY', file: string, alt: string, caption?: string): FeedItem {
  const image = asset(folder, file);
  const [width, height] = file === 'community-grace-jones-tee-01.JPEG' ? [1980, 3520]
    : file === 'community-golliwog-tee-01.JPG' || file === 'community-skinfolk-tee-01.JPG' ? [1320, 2346]
      : file === 'portrait-patch-denim-lifestyle-model-01.jpg.JPG' ? [1167, 1511]
        : file === 'portrait-patch-denim-lifestyle-skatepark-02.jpg.JPG' ? [4608, 3456] : [1320, 2346];
  return { id, type: 'editorial', slug: id, image, width, height, alt, caption, href: `/editorial/${id}`, gallery: [{ image, alt }] };
}

const communityGrace = editorialEntry('community-grace-jones', '08 COMMUNITY', 'community-grace-jones-tee-01.JPEG', 'Eshu community member holding a Grace Jones tee', 'Eshu Community');
const communityGolliwog = editorialEntry('community-golliwog', '08 COMMUNITY', 'community-golliwog-tee-01.JPG', 'Eshu community member holding a graphic tee', 'Eshu Community');
const communitySkinfolk = editorialEntry('community-skinfolk', '08 COMMUNITY', 'community-skinfolk-tee-01.JPG', 'Eshu community member holding a Skinfolk tee', 'Eshu Community');
const editorialModel = editorialEntry('editorial-patch-denim-model', '04 EDITORIAL-LIFESTYLE', 'portrait-patch-denim-lifestyle-model-01.jpg.JPG', 'Model wearing Eshu portrait patch denim', 'Portrait Patch Denim');
const editorialSkatepark = editorialEntry('editorial-patch-denim-skatepark', '04 EDITORIAL-LIFESTYLE', 'portrait-patch-denim-lifestyle-skatepark-02.jpg.JPG', 'Eshu portrait patch denim at an Atlanta skatepark', 'Atlanta, Georgia');
const editorialMarket = editorialEntry('editorial-vintage-market', '04 EDITORIAL-LIFESTYLE', 'editorial-vintage-market-display-01.JPG', 'Vintage market display in Atlanta', 'Found Objects');

export const homeFeed: FeedItem[] = [
  productFeed('bootsy-rubberbands-tee'),
  productFeed('do-the-right-thing-tee'),
  archiveGraffiti,
  productFeed('drexler-graphic-tee'),
  communityGrace,
  productFeed('eshu-black-sonic-graphic-tee'),
  editorialModel,
  productFeed('eshu-cowboy-jeans'),
  productFeed('eshu-folk-figure-jeans'),
  archiveCollection,
  productFeed('eshu-garvey-conditional-graphic-tee'),
  productFeed('eshu-illustrated-denim-shirt'),
  productFeed('eshu-portrait-archive-jeans'),
  communityGolliwog,
  productFeed('eshu-seated-figure-jeans'),
  editorialSkatepark,
  productFeed('eves-bayou-tee'),
  productFeed('eshu-western-figure-jeans'),
  archiveRetail,
  communitySkinfolk,
  productFeed('havana-to-harlem-tee'),
  productFeed('irvin-88-jersey'),
  editorialMarket,
  productFeed('jill-scott-graphic-tee'),
  productFeed('jordan-graphic-tee'),
  productFeed('luther-live-tee'),
  productFeed('miles-davis-tee'),
  productFeed('mlk-dream-tee'),
  productFeed('mos-def-logo-tee'),
  productFeed('one-in-a-million-tee'),
  productFeed('pippen-graphic-tee'),
  productFeed('prince-billboards-tee'),
  productFeed('shaolin-tee'),
  productFeed('spelman-circle-graphic-tee'),
  productFeed('super-bowl-graphic-tee'),
  productFeed('yeech-brown-tee'),
  productFeed('yellow-graphic-tee'),
];

export const findFeedItem = (type: FeedType, slug: string) => homeFeed.find((item) => item.type === type && (item.slug ?? item.id) === slug);
