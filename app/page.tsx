import { ArchiveFeature } from '@/components/archive-feature';
import { Hero } from '@/components/hero';
import { ProductGrid } from '@/components/product-grid';
import { StoryFeature } from '@/components/story-feature';

export default function Home() {
  return <main><Hero /><ProductGrid /><ArchiveFeature /><StoryFeature /></main>;
}
