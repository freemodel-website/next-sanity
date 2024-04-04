import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'designservices',
  title: 'Design Services',
  type: 'document',

  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'page',
      title: 'Page',
      default: true,
    },
  ],
  fields: [
    {
      name: 'title',
      description: 'This field is the title of your page.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'titlebutton',
      title: 'Title: Button',
      type: 'string',
      group: 'page',
    },
    {
      name: 'bluetitle',
      title: 'Blue Bar Title',
      type: 'string',
      group: 'page',
    },

    //Body of the page
    {
      name: 'body',
      title: 'Description',
      type: 'blockContent',
      group: 'page',
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
      group: 'page',
    },
    //Images
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{type: 'image'}],
      group: 'page',
    },
    //Project Director title
    {
      name: 'projectdirectortitle',
      title: 'Project Director Title',
      type: 'string',
      group: 'page',
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
      group: 'page',
    },
    {
      name: 'ctatitle',
      title: 'CTA Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'ctabutton',
      title: 'CTA Button',
      type: 'string',
      group: 'page',
    },

    //SEO
    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoDescription', title: 'Description', type: 'string', group: 'seo'},
    {name: 'seoImage', title: 'Image', type: 'image', group: 'seo'},

    //END
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pagetype',
    },
  },
})
