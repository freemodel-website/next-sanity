import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'howitworks',
  title: 'How It Works',
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
      name: 'bluebartitle',
      title: 'BlueBar: Title',
      type: 'string',
    },
    {
      name: 'bluebarbody',
      title: 'BlueBar: Body',
      type: 'string',
    },
    {
      name: 'threesectiontitle',
      title: 'Section 3 Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'threeSecArray',
      title: 'Section 3 Layout',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'left',
              title: 'Left',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'right',
              title: 'Right',
              type: 'text',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),

      preview: {
        select: {
          title: 'left',
          subtitle: 'right',
          media: 'image',
        },
      },
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
