import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
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
      name: 'sec1title',
      title: 'Section 1: Title',
      type: 'text',
    },
    {
      name: 'imageArray',
      title: 'Section 1: 3 Layout',
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
    },
    {
      name: 'sec1button',
      title: 'Section 1: Button',
      type: 'string',
    },
    // Section 3
    {
      name: 'sec2title',
      title: 'Section 2: Title',
      type: 'text',
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
      name: 'sec2button',
      title: 'Section 2: Button',
      type: 'string',
    },
    // Section 3
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
    },
    //Testimonial title
    {
      name: 'testimonialstitle',
      title: 'Testimonials Section: Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    //testimonials
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
      name: 'statesbutton',
      title: 'States Section: Button',
      type: 'string',
    },
    //html
    {
      name: 'htmltitle',
      title: 'HTML Section: Title',
      type: 'string',
    },
    // Section 3
    {
      name: 'htmlbody',
      title: 'HTML Section: Body',
      type: 'text',
    },
    {
      name: 'htmlform',
      title: 'HTML Form',
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
