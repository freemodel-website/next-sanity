import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'designservices',
  title: 'Design Services',
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
    {
      name: 'bluetitle',
      title: 'Blue Bar Title',
      type: 'string',
    },

    //Body of the page
    {
      name: 'body',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'caseStudy'}],
        },
      ],
    },
    //Images
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{type: 'image'}],
    },
    //Project Director title
    {
      name: 'projectdirectortitle',
      title: 'Project Director Title',
      type: 'string',
    },
    //Poject Directors
    {
      name: 'projectdirectors',
      title: 'Project Directors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'projectdirector'}],
        },
      ],
    },
    {
      name: 'ctatitle',
      title: 'CTA Title',
      type: 'string',
    },
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
