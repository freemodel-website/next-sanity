import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'forhomeowners',
  title: 'For Homeowners',
  type: 'document',

  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    {
      name: 'title',
      description: 'This field is the title of your page.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },

    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'titlebutton',
      title: 'Title: Button',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'bluebarbody',
      title: 'BlueBar: Body',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    },
    {
      name: 'lowerbodytitle',
      title: 'Lower Body: Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'bodytitlebutton',
      title: 'Body: Button',
      type: 'string',
      validation: (rule) => rule.required(),
    },

    //Left Right Left
    {
      name: 'leftrightlefttitle',
      title: 'Title: Left Right Left',
      type: 'string',
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
      validation: (Rule) => Rule.max(3),
    },

    //Bullet Section
    {
      name: 'bullettitle',
      title: 'Title: Bullets',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'bulletImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
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
    },

    //Windy Section
    {
      name: 'windySectionTitle',
      title: 'Windy Section Title',
      type: 'string',
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
    },
    //Section 3
    {
      name: 'sec3title',
      title: 'Section 3: Title',
      type: 'string',
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
    },
    //Bottom Section
    {
      name: 'bottomtitle',
      title: 'Section 3: Title',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    },
    {
      name: 'bottomtitlebutton',
      title: 'Title: Button',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'bottombody',
      title: 'Section 3: Title',
      type: 'text',
    },

    //END
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pagetype',
    },
  },
})
