import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'requestestimate',
  title: 'Request Estimate',
  type: 'document',

  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'page',
      title: 'Page',
      default: true,
    },
  ],
  fields: [
    {
      name: 'title',
      description: 'This field is the title of your page.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
    },

    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'page',
    },

    {
      name: 'titlebutton',
      title: 'Title: Button',
      type: 'string',
      group: 'page',
    },
    //Body
    {
      name: 'bluetitle',
      title: 'Blue Bar Title',
      type: 'string',
      group: 'page',
    },

    //

    //SEO
    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoDescription', title: 'Description', type: 'string', group: 'seo'},
    {name: 'seoImage', title: 'Image', type: 'image', group: 'seo'},
    //END
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pagetype',
    },
  },
})
