import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'reviews',
  title: 'Reviews',
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

    {
      name: 'titlebutton',
      title: 'Title: Button',
      type: 'string',
      group: 'page',
    },
    {
      name: 'imageArray',
      title: 'Layer Section',
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
              type: 'blockContent',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().max(3),
      group: 'page',
    },
    {
      name: 'sec2title',
      title: 'Title: Section 2',
      type: 'string',
      group: 'page',
    },
    {
      name: 'imageArray2',
      title: 'Layer Section',
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
              type: 'blockContent',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().max(3),
      group: 'page',
    },
    //section 3 button title
    {
      name: 'sec3title',
      title: 'Title: Section 3',
      type: 'string',
      group: 'page',
    },
    //section 3 button link
    {
      name: 'sec3link',
      title: 'Link: Section 3',
      type: 'string',
      group: 'page',
    },
    //Video Caroucel
    {
      name: 'videotitle',
      title: 'Video Title',
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
