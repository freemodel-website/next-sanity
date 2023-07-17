import {FaBriefcase} from 'react-icons/fa'

export default {
  name: 'brokerage',
  title: 'Brokerage',
  type: 'document',
  icon: FaBriefcase,
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
    },
    //body
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
