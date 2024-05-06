import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutus',
  title: 'About Us',
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
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'titlebutton',
      title: 'Title: Button',
      type: 'string',
      group: 'page',
    },
    {
      name: 'bluetitle',
      title: 'Blue Bar Title',
      type: 'string',
      group: 'page',
    },

    //Body of the page

    //Images
    {
      name: 'questionsanswers',
      title: 'Learn About Our Services',
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

    {
      name: 'ctabutton',
      title: 'CTA Button',
      type: 'string',
      group: 'page',
    },

    //Video Caroucel Horizontal or Vertical
    {
      name: 'horizontalslider',
      title: 'Horizontal Slider',
      type: 'boolean',
      group: 'page',
      //set default false
      initialValue: false,
    },
    //Video Caroucel
    {
      name: 'videoData',
      title: 'Video Data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'videourl',
              title: 'Video URL',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],

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
