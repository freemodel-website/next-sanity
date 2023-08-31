import {FaHardHat} from 'react-icons/fa'

export default {
  name: 'projectdirector',
  title: 'Project Directors',
  type: 'document',
  icon: FaHardHat,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
    },
    //Toggle with default true
    {
      name: 'bool',
      title: 'Show Link',
      description: '(default/on link will show)',
      type: 'boolean',
      initialValue: true,
    },

    //title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
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
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    //location
    {
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{type: 'cities'}],
      validation: (Rule) => Rule.required(),
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
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
