import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'fordesigners',
  title: 'For Designers',
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
      name: 'bluebarimage',
      title: 'Blue Bar Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    },
    //Q&A
    {
      name: 'questionimage',
      title: 'Question Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'qatitle',
      title: 'Q&Q: Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'questionsanswers',
      title: 'Questions Answers”',
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
      validation: (rule) => rule.required(),
    },
    //Left Image RightText
    {
      name: 'lirtimage',
      title: 'Section 4: Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'lirttitle',
      title: 'Section 4: Image Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'lirttext',
      title: 'Section 4: Text',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    //Project Director
    {
      name: 'pdtitle',
      title: 'Project Director Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'pdimage',
      title: 'Project Director Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'pdquote',
      title: 'Project Director Quote',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'pdname',
      title: 'Project Director Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'pdjobtitle',
      title: 'Project Director Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },

    //Bottom
    // {
    //   name: 'bottombody',
    //   title: 'Section 3: Title',
    //   type: 'string',
    // },
    // {
    //   name: 'bottomtitlebutton',
    //   title: 'Title: Button',
    //   type: 'string',
    //   validation: (rule) => rule.required(),
    // },

    //END
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pagetype',
    },
  },
})
