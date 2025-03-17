import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'howitworks',
  title: 'How It Works',
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
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'bluebartitle',
      title: 'BlueBar: Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'bluebarbody',
      title: 'BlueBar: Body',
      type: 'string',
      group: 'page',
    },
    {
      name: 'threesectiontitle',
      title: 'Section 3 Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'threeSecArray',
      title: 'Section 3 Layout',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'left',
              title: 'Left',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'right',
              title: 'Right',
              type: 'text',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),

      preview: {
        select: {
          title: 'left',
          subtitle: 'right',
          media: 'image',
        },
      },
      group: 'page',
    },
    //Video Caroucel Title
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
