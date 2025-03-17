import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'forcontractors',
  title: 'For Contractors',
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
    //Body
    {
      name: 'bluebar',
      title: 'BlueBar: Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'page',
    },
    {
      name: 'bluebar2',
      title: 'BlueBar2: Title',
      type: 'string',
      group: 'page',
    },
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
    //Testimonial title
    {
      name: 'testimonialstitle',
      title: 'Testimonials: Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
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
      group: 'page',
    },
    {
      name: 'sec3title',
      title: 'Section 3: Title',
      type: 'string',
      group: 'page',
    },
    //html
    {
      name: 'sec3html',
      title: 'Section 3: HTML',
      type: 'text',
      group: 'page',
    },
    {
      name: 'sec4title',
      title: 'Section 4: Title',
      type: 'string',
      group: 'page',
    },
    //html
    {
      name: 'sec4html',
      title: 'Section 4: HTML',
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
