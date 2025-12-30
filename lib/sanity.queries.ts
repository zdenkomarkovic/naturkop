import { groq } from 'next-sanity';

// Blog queries
export const blogPostsQuery = groq`
  *[_type == "blog" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    author,
    mainImage {
      asset->{
        _id,
        url
      }
    }
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    slug,
    excerpt,
    author,
    "body": content,
    mainImage {
      asset->{
        _id,
        url
      }
    }
  }
`;

// Partner queries
export const partnersQuery = groq`
  *[_type == "partner"] | order(order asc, name asc) {
    _id,
    name,
    logo {
      asset->{
        _id,
        url
      }
    }
  }
`;

// Collaborator queries
export const collaboratorsQuery = groq`
  *[_type == "collaborator"] | order(order asc, name asc) {
    _id,
    name,
    logo {
      asset->{
        _id,
        url
      }
    }
  }
`;
