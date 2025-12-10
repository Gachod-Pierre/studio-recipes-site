import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'seo', title: 'SEO'},
    {name: 'header', title: 'Header'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'header',
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      group: 'header',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'url', type: 'string', title: 'URL'},
          ],
        },
      ],
    }),
    /**
     * Créer un champ de type array qui contient un sub field 'object' qui contient 2 propriétés :
     * - label de type string
     * - url de type string
     *
     * Pour avoir quelque chose dans ce style : [{ label: 'Books', url: '/books' }, ...]
     */
  ],
})
