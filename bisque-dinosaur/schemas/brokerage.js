import {FaBriefcase} from 'react-icons/fa'

export default {
  name: 'brokerage',
  title: 'Brokerage',
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
    //Logo Image
    {
      name: 'logoImage',
      title: 'Logo image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
    //body
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    //Blue Call out section
    {
      name: 'callout',
      title: 'Blue Callout Text',
      type: 'string',
      group: 'page',
    },
    //Q&A Section
    {
      name: 'questionimage',
      title: 'Question Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'page',
    },
    {
      name: 'questionsanswers',
      title: 'Questions Answers”',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'q',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'a',
              title: 'Answer',
              type: 'text',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'buttontitle',
      title: 'Button Title',
      type: 'string',
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
    //MARK:Three button section
    {
      name: 'tbssection',
      title: 'Three Button Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'tbsbody',
      title: 'Three Buton Body',
      type: 'string',
      group: 'page',
    },
    //button title1
    {
      name: 'tbstitle1',
      title: 'Title 1',
      type: 'string',
      group: 'page',
    },
    {
      name: 'tbstitle2',
      title: 'Title 2',
      type: 'string',
      group: 'page',
    },
    {
      name: 'tbstitle3',
      title: 'Title 3',
      type: 'string',
      group: 'page',
    },

    //Image Gallary title
    {
      name: 'imageGallaryTitle',
      title: 'Image Gallary Title',
      type: 'string',
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

    //END
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
