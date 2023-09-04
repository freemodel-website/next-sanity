import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'letstalk',
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
    },

    {
      name: 'titlebutton',
      title: 'Title: Button',
      type: 'string',
    },
    //Body

    //html
    {
      name: 'html1',
      title: 'HTML Form 1',
      type: 'text',
    },
    //html
    {
      name: 'html2',
      title: ' HTML Form 2',
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
