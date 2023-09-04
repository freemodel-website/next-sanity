import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'forcontractors',
  title: 'For Contractors',
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
    },

    {
      name: 'titlebutton',
      title: 'Title: Button',
      type: 'string',
    },
    //Body
    {
      name: 'bluebar',
      title: 'BlueBar: Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'bluebar2',
      title: 'BlueBar2: Title',
      type: 'string',
    },
    {
      name: 'sec2title',
      title: 'Section 2: Title',
      type: 'string',
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
      validation: (rule) => rule.required(),
      validation: (Rule) => Rule.max(3),
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'testimonials'}],
        },
      ],
    },
    {
      name: 'sec3title',
      title: 'Section 3: Title',
      type: 'string',
    },
    //html
    {
      name: 'sec3html',
      title: 'Section 3: HTML',
      type: 'text',
    },
    {
      name: 'sec4title',
      title: 'Section 4: Title',
      type: 'string',
    },
    //html
    {
      name: 'sec4html',
      title: 'Section 4: HTML',
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
