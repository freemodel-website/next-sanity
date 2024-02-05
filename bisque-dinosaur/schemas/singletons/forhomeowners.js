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
    },
    {
      name: 'sec2imageArray',
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

    //END
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pagetype',
    },
  },
})
