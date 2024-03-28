import {FaHardHat} from 'react-icons/fa'

export default {
  name: 'projectdirector',
  title: 'Project Directors',
  type: 'document',
  icon: FaHardHat,

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
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    //Toggle with default true
    {
      name: 'bool',
      title: 'Show Link',
      description: '(default/on link will show)',
      type: 'boolean',
      initialValue: true,
      group: 'page',
    },

    //title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
      group: 'page',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      group: 'page',
    },
    //location
    {
      name: 'location',
      title: 'Location/Team',
      description: 'You can also select Partnerships and In-House Design Team here',
      type: 'reference',
      to: [{type: 'cities'}],
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    //Testimonial title
    {
      name: 'testimonialTitle',
      title: 'Testimonial Title',
      type: 'string',
      placeholder: 'Kudos from Clients',
      group: 'page',
    },
    //Testimonials
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'testimonials'}],
        },
      ],
      group: 'page',
    },

    //array of projects
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
    //array of media
    {
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'media'}],
        },
      ],
      group: 'page',
    },
    //LinkedIn field title
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'link',
          type: 'url',
          title: 'Link',
        },
      ],
      group: 'page',
    },
    //Instagram
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'link',
          type: 'url',
          title: 'Link',
        },
      ],
      group: 'page',
    },
    //Facebook
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'link',
          type: 'url',
          title: 'Link',
        },
      ],
      group: 'page',
    },
    //Pinterest
    {
      title: 'Pinterest',
      name: 'pinterest',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'link',
          type: 'url',
          title: 'Link',
        },
      ],
      group: 'page',
    },
    //Website
    {
      title: 'Website',
      name: 'website',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'link',
          type: 'url',
          title: 'Link',
        },
      ],
      group: 'page',
    },
    //Email
    {
      title: 'Email',
      name: 'email',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          description: 'This is the text that will appear on the page',
        },
        {
          name: 'link',
          type: 'string',
          title: 'Email',
        },
      ],
      group: 'page',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
