import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'renovationservices',
  title: 'Renovation Services',
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
      // validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'bluebarbody',
      title: 'BlueBar: Body',
      type: 'string',
      group: 'page',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    //Q&A
    {
      name: 'qatitle',
      title: 'Q&Q: Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'leftImage',
      title: 'Left image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'rightImage',
      title: 'Right image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'questionsanswers',
      title: 'Q&A Section',
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
    //Two Section

    {
      name: 'twosecimageArray',
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
      validation: (rule) => rule.required().max(2),
      group: 'page',
    },
    {
      name: 'doubletitlebutton',
      title: 'Title: Button',
      type: 'string',
      // validation: (rule) => rule.required(),
      group: 'page',
    },
    //array of media
    {
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'media'}],
        },
      ],
      validation: (rule) => rule.required().max(2),
      group: 'page',
    },
    //Projects
    {
      name: 'projecttitle',
      title: 'Project Title',
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
      validation: (rule) => rule.required().max(3),
      group: 'page',
    },

    //Bottom
    {
      name: 'bottombody',
      title: 'Section 3: Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'bottomtitlebutton',
      title: 'Title: Button',
      type: 'string',
      // validation: (rule) => rule.required(),
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
