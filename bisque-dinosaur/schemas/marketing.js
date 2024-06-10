import {FaBriefcase} from 'react-icons/fa'

export default {
  name: 'marketing',
  title: 'Marketing',
  type: 'document',
  icon: FaBriefcase,

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
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    // Slug
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    //Hero Image
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    //text
    {
      name: 'text',
      title: 'Blue Bar Text',
      type: 'string',
      group: 'page',
    },
    //Body title
    {
      name: 'bodyTitle',
      title: 'Body Title',
      type: 'string',
      group: 'page',
    },
    //Body
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'page',
    },

    //SEO
    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoDescription', title: 'Description', type: 'string', group: 'seo'},

    //END
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
