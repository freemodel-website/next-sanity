import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'foragents',
  title: 'Lets Talk',
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
    //Body
    {
      name: 'bluebartext',
      title: 'Blue Bar Text',
      type: 'text',
    },
    //Image
    {
      name: 'bluebarimage',
      title: 'Blue Bar Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    //title
    {
      name: 'title1',
      title: 'Section 1: Title',
      type: 'string',
    },
    //html
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
      name: 'questionimage',
      title: 'Question Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
    {
      name: 'buttontitle',
      title: 'Button Title',
      type: 'string',
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
