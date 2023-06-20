import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
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
      name: 'highlighttitle',
      description: 'This field is the title of your Highlight projects.',
      title: 'Highlights',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    //Select other case studies
    {
      name: 'projecthighlight',
      title: 'Highlight Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'caseStudy'}],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pagetype',
    },
  },
})
