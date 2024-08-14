import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'viapage',
  title: 'ViaPage',
  type: 'document',

  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
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

    //Blue bar text
    {
      name: 'bluebartext',
      title: 'Blue bar text',
      type: 'string',
      group: 'page',
    },

    //Html Title
    {
      name: 'htmltitle',
      title: 'Html Title',
      type: 'string',
      group: 'page',
    },

    //Html Body
    {
      name: 'htmlbody',
      title: 'Html Body',
      type: 'text',
      group: 'page',
    },

    //Blue bar text
    {
      name: 'secondbluebartext',
      title: 'Blue bar text',
      type: 'string',
      group: 'page',
    },

    {
      name: 'gridtitle',
      title: 'Grid: Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'gridtext',
      title: 'Grid: Text',
      type: 'string',
      group: 'page',
    },
    {
      name: 'gridimageArray',
      title: 'Grid: 3 Layout',
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
      validation: (rule) => rule.required(),
      validation: (Rule) => Rule.max(6),
      group: 'page',
    },

    //Image Gallary body
    {
      name: 'imageGallaryBody',
      title: 'Image Gallary Body',
      type: 'blockContent',
      group: 'page',
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
      group: 'page',
    },

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
