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
    //SixGrid
    {
      name: 'sec2title',
      title: 'Section 2: Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'sec2imageArray',
      title: 'Section 2: 3 Layout',
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
          ],
        },
      ],
      validation: (rule) => rule.required().max(6),
      group: 'page',
    },
    //
    {
      name: 'sec3title',
      title: 'Left Right Left: Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'sec3imageArray',
      title: 'Left Right Left: 3 Layout',
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
            //link
            {
              name: 'link',
              title: 'Link',
              type: 'string',
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
          ],
        },
      ],
      validation: (rule) => rule.required().max(3),
      group: 'page',
    },
    //Array of image title and link
    {
      name: 'sectionhead',
      title: 'Section Head',
      type: 'string',
      group: 'page',
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
      group: 'page',
    },

    //Bottom Carousel
    {
      name: 'imagesGallery',
      title: 'Images gallery(Optional bottom carousel)',
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
