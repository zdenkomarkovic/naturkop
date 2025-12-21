import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'partner',
  title: 'Partneri',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Naziv',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Tip prodaje',
      type: 'string',
      options: {
        list: [
          { title: 'Maloprodaja', value: 'maloprodaja' },
          { title: 'Veleprodaja', value: 'veleprodaja' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Lokacija',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adresa',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'Grad',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Web sajt',
      type: 'url',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
    }),
    defineField({
      name: 'isActive',
      title: 'Aktivan partner',
      type: 'boolean',
      initialValue: true,
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
      subtitle: 'location',
      media: 'logo',
      type: 'type',
    },
    prepare(selection) {
      const { title, subtitle, media, type } = selection;
      return {
        title,
        subtitle: `${type === 'maloprodaja' ? 'Maloprodaja' : 'Veleprodaja'} - ${subtitle}`,
        media,
      };
    },
  },
});
