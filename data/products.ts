export type ProductImage = {
  image?: string;
  placeholderAsset?: string;
  alt: string;
  ratio?: string;
  width?: number;
  height?: number;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  price: string;
  availableSizes: string[];
  sizeChartId: string;
  feedImage: ProductImage;
  galleryImages: ProductImage[];
  inventory?: number;
  href: string;
};

const asset = (...segments: string[]) => `/images/eshu-assets/${segments.map(encodeURIComponent).join('/')}`;

const imageSizes: Record<string, [number, number]> = {
  'Bootsy-Rubberbands-Tee_Front.JPG': [1800, 2400], 'Bootsy-Rubberbands-Tee_Back.JPG': [1800, 2400],
  'Photoroom_20250226_203149.JPG': [1800, 2400], 'Photoroom_20250825_182609.JPG': [1800, 2400],
  'ESHU_MOUSE_F.JPG': [2629, 3504], 'IMG_9143.JPG': [953, 1201], 'Eshu-Folk-Figure-Jeans.jpeg': [1080, 1620],
  'ESHU_GARVEY_CONDITIONAL_GREEN.JPG': [2485, 2505],
  'Eshu-Denim-Shirt-Bleached-Pale-Wash.JPEG': [3000, 3000], 'Eshu-Denim-Shirt-Clean-Light-Wash.JPEG': [3000, 3000],
  'Eshu-Denim-Shirt-Distressed-Light-Wash.JPEG': [3000, 3000], 'Eshu-Denim-Shirt-Medium-Vintage-Wash.JPEG': [3000, 3000],
  'Eshu-Denim-Shirt-Repaired-Medium-Wash.JPEG': [3000, 3000], 'Eshu-Denim-Shirt-Vintage-Light-Wash.JPEG': [3000, 3000],
  'Eshu-Portrait-Archive-Jeans-Front.JPG': [3000, 3000], 'Eshu-Portrait-Archive-Jeans-Back.JPG': [3000, 3000],
  'portrait-patch-denim-lifestyle-model-01.jpg.JPG': [1167, 1511],
  'portrait-patch-denim-lifestyle-skatepark-01.jpg.JPG': [4608, 3456],
  'portrait-patch-denim-lifestyle-skatepark-02.jpg.JPG': [4608, 3456],
  'Eshu-Seated-Figure-Jeans.jpeg': [1121, 1121], 'Eshu-Western-Figure-Jeans.jpeg': [1182, 1182],
  'Photoroom_20250820_161934.JPG': [1800, 2400], 'Photoroom_20250820_161619.JPEG': [1252, 1669],
  '7CE94861-B5B7-48DA-954D-66B6116E838E.JPG': [1320, 2346], 'Photoroom_20250820_161232.JPEG': [1800, 2400],
  'Photoroom_20250820_161728.JPEG': [1800, 2400], 'Photoroom_20250820_161306.JPG': [1800, 2400],
  'Photoroom_20250820_161331.JPG': [1800, 2400], 'Photoroom_20250825_182922.JPG': [1800, 2400],
  'MLK-Dream-Tee-2.jpeg': [2400, 2400], 'MLK-Dream-Tee-1.jpeg': [1800, 2400],
  'Photoroom_20250226_203106.JPG': [1800, 2400], 'Photoroom_20250825_183044.JPG': [1800, 2400],
  'Photoroom_20250820_161805.JPG': [1800, 2400], 'Photoroom_20250910_161454.JPG': [1280, 1280],
  'Photoroom_20250910_161735.JPG': [1280, 1280], 'Photoroom_20250825_174729.JPG': [1800, 2400],
  'Photoroom_20250328_020639.JPEG': [1800, 2400], 'Photoroom_20250825_174808.JPG': [1800, 2400],
  'Photoroom_20250825_174832.JPG': [1800, 2400], 'Photoroom_20250820_160832.JPG': [1800, 2400],
  'Photoroom_20250820_160945.JPEG': [1800, 2400], 'Photoroom_20250825_183210.JPG': [1800, 2400],
};

function product(slug: string, name: string, folder: string, files: string[], primaryFile?: string): Product {
  const gallery = files.map((file) => {
    const [width, height] = imageSizes[file] ?? [];
    return { image: asset('01 PRODUCTS', folder, file), alt: `${name} — ${file}`, width, height };
  });
  const primaryImage = primaryFile
    ? gallery.find((item) => item.image === asset('01 PRODUCTS', folder, primaryFile)) ?? gallery[0]
    : gallery[0];
  const fallback = { placeholderAsset: `product-${slug}-image-needed.jpg`, alt: `${name} image needed`, ratio: '3 / 4' };
  return {
    id: slug,
    slug,
    title: name,
    shortDescription: 'Product details coming soon.',
    price: 'Price TBA',
    availableSizes: ['Size TBA'],
    sizeChartId: 'standard-unisex',
    feedImage: primaryImage ?? fallback,
    galleryImages: gallery.length ? gallery : [fallback],
    href: `/shop/${slug}`,
  };
}

export const products: Product[] = [
  product('bootsy-rubberbands-tee', 'Bootsy Rubberbands Tee', 'Bootsy-Rubberbands-Tee', ['Bootsy-Rubberbands-Tee_Front.JPG', 'Bootsy-Rubberbands-Tee_Back.JPG'], 'Bootsy-Rubberbands-Tee_Front.JPG'),
  product('do-the-right-thing-tee', 'Do The Right Thing Tee', 'Do-The-Right-Thing-Tee', ['Photoroom_20250226_203149.JPG']),
  product('drexler-graphic-tee', 'Drexler Graphic Tee', 'Drexler-Graphic-Tee', ['Photoroom_20250825_182609.JPG']),
  product('eshu-black-sonic-graphic-tee', 'Eshu Black Sonic Graphic Tee', 'Eshu-Black-Sonic-Graphic-Tee', ['ESHU_MOUSE_F.JPG']),
  product('eshu-cowboy-jeans', 'Eshu Cowboy Jeans', 'Eshu-Cowboy-Jeans', ['IMG_9143.JPG']),
  product('eshu-folk-figure-jeans', 'Eshu Folk Figure Jeans', 'Eshu-Folk-Figure-Jeans', ['Eshu-Folk-Figure-Jeans.jpeg']),
  product('eshu-garvey-conditional-graphic-tee', 'Eshu Garvey Conditional Graphic Tee', 'Eshu-Garvey-Conditional-Graphic-Tee', ['ESHU_GARVEY_CONDITIONAL_GREEN.JPG']),
  product('eshu-illustrated-denim-shirt', 'Eshu Illustrated Denim Shirt', 'Eshu-Illustrated-Denim-Shirt', [
    'Eshu-Denim-Shirt-Bleached-Pale-Wash.JPEG', 'Eshu-Denim-Shirt-Clean-Light-Wash.JPEG', 'Eshu-Denim-Shirt-Distressed-Light-Wash.JPEG',
    'Eshu-Denim-Shirt-Medium-Vintage-Wash.JPEG', 'Eshu-Denim-Shirt-Repaired-Medium-Wash.JPEG', 'Eshu-Denim-Shirt-Vintage-Light-Wash.JPEG',
  ], 'Eshu-Denim-Shirt-Distressed-Light-Wash.JPEG'),
  product('eshu-portrait-archive-jeans', 'Eshu Portrait Archive Jeans', 'Eshu-Portrait-Archive-Jeans', [
    'Eshu-Portrait-Archive-Jeans-Front.JPG', 'Eshu-Portrait-Archive-Jeans-Back.JPG',
    'portrait-patch-denim-lifestyle-model-01.jpg.JPG', 'portrait-patch-denim-lifestyle-skatepark-01.jpg.JPG',
    'portrait-patch-denim-lifestyle-skatepark-02.jpg.JPG',
  ], 'portrait-patch-denim-lifestyle-model-01.jpg.JPG'),
  product('eshu-seated-figure-jeans', 'Eshu Seated Figure Jeans', 'Eshu-Seated-Figure-Jeans', ['Eshu-Seated-Figure-Jeans.jpeg']),
  product('eshu-western-figure-jeans', 'Eshu Western Figure Jeans', 'Eshu-Western-Figure-Jeans', ['Eshu-Western-Figure-Jeans.jpeg']),
  product('eves-bayou-tee', 'Eve’s Bayou Tee', 'Eves-Bayou-Tee', ['Photoroom_20250820_161934.JPG']),
  product('havana-to-harlem-tee', 'Havana To Harlem Tee', 'Havana-To-Harlem-Tee', ['Photoroom_20250820_161619.JPEG']),
  product('irvin-88-jersey', 'Irvin 88 Jersey', 'Irvin-88-Jersey', ['7CE94861-B5B7-48DA-954D-66B6116E838E.JPG']),
  product('jill-scott-graphic-tee', 'Jill Scott Graphic Tee', 'Jill-Scott-Graphic-Tee', ['Photoroom_20250820_161232.JPEG']),
  product('jordan-graphic-tee', 'Jordan Graphic Tee', 'Jordan-Graphic-Tee', ['Photoroom_20250820_161728.JPEG']),
  product('luther-live-tee', 'Luther Live Tee', 'Luther-Live-Tee', ['Photoroom_20250820_161306.JPG', 'Photoroom_20250820_161331.JPG'], 'Photoroom_20250820_161306.JPG'),
  product('miles-davis-tee', 'Miles Davis Tee', 'Miles-Davis-Tee', ['Photoroom_20250825_182922.JPG']),
  product('mlk-dream-tee', 'MLK Dream Tee', 'MLK-Dream-Tee', [
    'MLK-Dream-Tee-2.jpeg', 'MLK-Dream-Tee-1.jpeg',
  ], 'MLK-Dream-Tee-2.jpeg'),
  product('mos-def-logo-tee', 'Mos Def Logo Tee', 'Mos-Def-Logo-Tee', ['Photoroom_20250226_203106.JPG']),
  product('one-in-a-million-tee', 'One In A Million Tee', 'One-In-A-Million-Tee', ['Photoroom_20250825_183044.JPG']),
  product('pippen-graphic-tee', 'Pippen Graphic Tee', 'Pippen-Graphic-Tee', ['Photoroom_20250820_161805.JPG']),
  product('prince-billboards-tee', 'Prince Billboards Tee', 'Prince-Billboards-Tee', ['Photoroom_20250910_161454.JPG', 'Photoroom_20250910_161735.JPG'], 'Photoroom_20250910_161454.JPG'),
  product('shaolin-tee', 'Shaolin Tee', 'Shaolin-Tee', ['Photoroom_20250825_174729.JPG']),
  product('spelman-circle-graphic-tee', 'Spelman Circle Graphic Tee', 'Spelman-Circle-Graphic-Tee', ['Photoroom_20250328_020639.JPEG']),
  product('super-bowl-graphic-tee', 'Super Bowl Graphic Tee', 'Super-Bowl-Graphic-Tee', ['Photoroom_20250825_174808.JPG', 'Photoroom_20250825_174832.JPG'], 'Photoroom_20250825_174808.JPG'),
  product('yeech-brown-tee', 'Yeech Brown Tee', 'Yeech-Brown-Tee', ['Photoroom_20250820_160832.JPG', 'Photoroom_20250820_160945.JPEG'], 'Photoroom_20250820_160945.JPEG'),
  product('yellow-graphic-tee', 'Yellow Graphic Tee', 'Yellow-Graphic-Tee', ['Photoroom_20250825_183210.JPG']),
];

export const findProduct = (slug: string) => products.find((item) => item.slug === slug);
