import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog',
  title: 'Blog postovi',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Kratak opis',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Glavna slika',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Sadržaj',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      excerpt: 'excerpt',
    },
    prepare(selection) {
      const { title, media, excerpt } = selection;
      return {
        title,
        subtitle: excerpt,
        media,
      };
    },
  },
});
