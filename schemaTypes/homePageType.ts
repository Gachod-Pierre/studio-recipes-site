import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    {name: 'seo', title: 'SEO'},
    {name: 'content', title: 'Content'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      description: 'SEO meta description for search engines',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'heroBanner',
      title: 'Hero Banner',
      type: 'object',
      group: 'content',
      fields: [
        defineField({
          name: 'image',
          title: 'Banner Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'title',
          title: 'Banner Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Banner Subtitle',
          type: 'string',
        }),
      ],
    }),
  ],
})
