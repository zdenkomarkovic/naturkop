import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);

/**
 * Generisanje optimizovanog URL-a za Sanity slike
 * @param source - Sanity image source objekat
 * @returns Image URL builder
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Generisanje optimizovanog URL-a sa specificiranim dimenzijama
 * @param source - Sanity image source objekat
 * @param width - Širina slike
 * @param height - Visina slike (opciono)
 * @returns Optimizovan URL string
 */
export function getOptimizedImageUrl(
  source: SanityImageSource,
  width: number,
  height?: number
): string {
  let imageBuilder = builder.image(source).width(width).auto('format').quality(85);

  if (height) {
    imageBuilder = imageBuilder.height(height);
  }

  return imageBuilder.url();
}
