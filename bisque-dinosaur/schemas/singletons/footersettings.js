import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'footersettings',
  title: 'Footer Settings',
  type: 'document',

  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    //START
    {
      name: 'footerimage',
      title: 'Footer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    //Documents of other pages
    {
      name: 'pagetype',
      title: 'Page Type',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'home'},
            {type: 'projects'},
            {type: 'designservices'},
            {type: 'faqpage'},
            {type: 'mediapage'},
            {type: 'aboutus'},
            {type: 'careers'},
            {type: 'privacypolicy'},
            {type: 'forcontractors'},
            {type: 'letstalk'},
            {type: 'foragents'},
            {type: 'footersettings'},
            {type: 'projectdirector'},
            {type: 'states'},
            {type: 'cities'},
          ],
        },
      ],
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
