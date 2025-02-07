import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',

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

  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
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
      title: 'Button 1: Text',
      type: 'string',
      group: 'page',
    },
    {
      name: 'buttonurl',
      title: 'Button 1: URL',
      type: 'string',
      group: 'page',
    },
    {
      name: 'titlebutton2',
      title: 'Button 2: Text',
      type: 'string',
      group: 'page',
    },
    {
      name: 'buttonurl2',
      title: 'Button 2: URL',
      type: 'string',
      group: 'page',
    },
    {
      name: 'sec1title',
      title: 'Section 1: Title',
      type: 'text',
      group: 'page',
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
      validation: (rule) => rule.required().max(6),
      group: 'page',
    },
    {
      name: 'sec1button',
      title: 'Section 1: Button',
      type: 'string',
      group: 'page',
    },
    // Section 3
    {
      name: 'sec2title',
      title: 'Section 2: Title',
      type: 'text',
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
    {
      name: 'sec2button',
      title: 'Section 2: Button',
      type: 'string',
      group: 'page',
    },
    // Section 3
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
      group: 'page',
    },
    //Testimonial title
    {
      name: 'testimonialstitle',
      title: 'Testimonials Section: Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
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
      group: 'page',
    },
    {
      name: 'statesbutton',
      title: 'States Section: Button',
      type: 'string',
      group: 'page',
    },
    //html
    {
      name: 'htmltitle',
      title: 'HTML Section: Title',
      type: 'string',
      group: 'page',
    },
    // Section 3
    {
      name: 'htmlbody',
      title: 'HTML Section: Body',
      type: 'text',
      group: 'page',
    },
    {
      name: 'htmlform',
      title: 'HTML Form',
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
