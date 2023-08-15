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
    //text
    {
      name: 'text',
      title: 'Blue Bar Text',
      type: 'string',
    },
    //Body title
    {
      name: 'bodyTitle',
      title: 'Body Title',
      type: 'string',
    },
    //body
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    //Blue Call out section
    {
      name: 'callout',
      title: 'Blue Callout Text',
      type: 'string',
    },
    //Array of image title and link
    {
      name: 'sectionhead',
      title: 'Section Head',
      type: 'string',
    },
    {
      name: 'imageArray',
      title: 'Linkable Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'imageGallaryTitle',
      title: 'Image Gallary Title',
      type: 'string',
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            // {
            //   name: 'link',
            //   title: 'Link',
            //   type: 'string',
            // },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
      preview: {
        select: {
          imageUrl: 'image.asset.url',
          altText: 'image.alt',
          title: 'title',
          file: 'image.asset.originalFilename',
        },
        prepare({imageUrl, altText, title}) {
          return {
            title: title || altText || 'No title',
            imageUrl,
          }
        },
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
