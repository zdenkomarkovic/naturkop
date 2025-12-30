import { client } from './sanity.client';
import {
  blogPostsQuery,
  blogPostBySlugQuery,
  partnersQuery,
  collaboratorsQuery,
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
    const count = await client.fetch('count(*[_type == "blog" && !(_id in path("drafts.**"))])', {}, { cache: 'no-store' });
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
    const partners = await client.fetch(partnersQuery, {}, { cache: 'no-store' });
    return partners;
  } catch (error) {
    console.error('Error fetching partners:', error);
    return [];
  }
}

// Collaborator fetch functions
export async function getAllCollaborators() {
  try {
    const collaborators = await client.fetch(collaboratorsQuery, {}, { cache: 'no-store' });
    return collaborators;
  } catch (error) {
    console.error('Error fetching collaborators:', error);
    return [];
  }
}
