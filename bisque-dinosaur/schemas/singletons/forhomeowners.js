import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'forhomeowners',
  title: 'For Homeowners',
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
      name: 'bluebarbody',
      title: 'BlueBar: Body',
      type: 'text',
      group: 'page',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'lowerbodytitle',
      title: 'Lower Body: Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'bodytitlebutton',
      title: 'Body: Button',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
    },

    //Left Right Left
    {
      name: 'leftrightlefttitle',
      title: 'Title: Left Right Left',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    //Left Right Left
    {
      name: 'leftrightleftbody',
      title: 'Left Right Left',
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

    //Bullet Section
    {
      name: 'bullettitle',
      title: 'Title: Bullets',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'bulletImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      group: 'page',
    },
    //Array of strings
    {
      name: 'bulletSection',
      title: 'Bullet Section',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (rule) => rule.required(),
      group: 'page',
    },

    //Windy Section
    {
      name: 'windySectionTitle',
      title: 'Windy Section Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'windySection',
      title: 'Layout:Windy',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'windyimage',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'number',
              title: 'Number',
              type: 'number',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'number', // Display 'number' field as title in the preview
              subtitle: 'text', // Display 'text' field as subtitle in the preview
              media: 'windyimage', // Selecting 'windyimage' field to display as media in the preview
            },
          },
        },
      ],
      validation: (rule) => rule.required().max(8),
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
    //Section 3
    {
      name: 'sec3title',
      title: 'Section 3: Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'caseStudy'}],
        },
      ],
      validation: (rule) => rule.required().max(4),
      group: 'page',
    },
    //Bottom Section
    {
      name: 'bottomtitle',
      title: 'Section 3: Title',
      type: 'blockContent',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'bottomtitlebutton',
      title: 'Title: Button',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'bottombody',
      title: 'Section 3: Title',
      type: 'text',
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
