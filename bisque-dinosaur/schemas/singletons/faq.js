import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqpage',
  title: 'FAQ',
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
    {
      name: 'bluetitle',
      title: 'Blue Bar Title',
      type: 'string',
    },

    //Body of the page

    //Images
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
    },
    //Poject Directors

    {
      name: 'ctabutton',
      title: 'CTA Button',
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
