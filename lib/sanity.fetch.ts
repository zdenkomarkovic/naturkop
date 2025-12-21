import { client } from './sanity.client';
import {
  blogPostsQuery,
  blogPostBySlugQuery,
  partnersQuery,
  partnersByTypeQuery,
} from './sanity.queries';

// Blog fetch functions
export async function getAllBlogPosts() {
  try {
    const posts = await client.fetch(blogPostsQuery, {}, { cache: 'no-store' });
    return posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function hasBlogPosts() {
  try {
    const count = await client.fetch('count(*[_type == "blog"])', {}, { cache: 'no-store' });
    return count > 0;
  } catch (error) {
    console.error('Error checking blog posts:', error);
    return false;
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const post = await client.fetch(blogPostBySlugQuery, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Partner fetch functions
export async function getAllPartners() {
  try {
    const partners = await client.fetch(partnersQuery);
    return partners;
  } catch (error) {
    console.error('Error fetching partners:', error);
    return [];
  }
}

export async function getPartnersByType(type: 'maloprodaja' | 'veleprodaja') {
  try {
    const partners = await client.fetch(partnersByTypeQuery, { type });
    return partners;
  } catch (error) {
    console.error('Error fetching partners by type:', error);
    return [];
  }
}
