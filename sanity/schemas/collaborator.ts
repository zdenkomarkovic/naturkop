import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'collaborator',
  title: 'Saradnici',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Naziv (opciono - neće biti prikazan)',
      type: 'string',
      description: 'Naziv se ne prikazuje na sajtu, služi samo za identifikaciju u Sanity-u',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Redosled',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'Saradnik bez naziva',
        media,
      };
    },
  },
});
