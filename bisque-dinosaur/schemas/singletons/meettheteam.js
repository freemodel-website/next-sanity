import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'meettheteam',
  title: 'Meet the Team',
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
