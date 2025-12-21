import { groq } from 'next-sanity';

// Blog queries
export const blogPostsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
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
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
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
    type,
    location,
    address,
    city,
    phone,
    email,
    website,
    description,
    logo {
      asset->{
        _id,
        url
      }
    }
  }
`;

export const partnersByTypeQuery = groq`
  *[_type == "partner" && type == $type] | order(order asc, name asc) {
    _id,
    name,
    location,
    address,
    city,
    phone,
    email,
    website,
    description,
    logo {
      asset->{
        _id,
        url
      }
    }
  }
`;
