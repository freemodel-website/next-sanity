import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'renovationservices',
  title: 'Renovation Services',
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
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    },
    //Q&A
    {
      name: 'qatitle',
      title: 'Q&Q: Title',
      type: 'string',
    },
    {
      name: 'leftImage',
      title: 'Left image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'rightImage',
      title: 'Right image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
      validation: (Rule) => Rule.max(2),
    },

    //Bottom
    {
      name: 'bottombody',
      title: 'Section 3: Title',
      type: 'string',
    },
    {
      name: 'bottomtitlebutton',
      title: 'Title: Button',
      type: 'string',
      validation: (rule) => rule.required(),
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
