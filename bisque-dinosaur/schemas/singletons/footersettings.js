import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'footersettings',
  title: 'NavBar/Footer Settings',
  type: 'document',

  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    //NavBar
    {
      name: 'navbar',
      title: 'NavBar Items',
      description:
        'Add, edit, and reorder items for the navbar. Max 5 items. Example url format: /about',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'path',
              title: 'Link',
              type: 'string',
            },
          ],
        },
        //List of all pages
      ],
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.min(1).max(5),
    },

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
    //LinkedIn field title
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'object',
      fields: [
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
          name: 'link',
          type: 'url',
          title: 'Link',
        },
      ],
    },
    //Facebook
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'object',
      fields: [
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
          name: 'link',
          type: 'url',
          title: 'Link',
        },
      ],
    },
    //Array of strings and slugs
    {
      name: 'leftItems',
      title: 'Left Items',
      description:
        'Add, edit, and reorder items for the left side of the footer. Max 4 items. Example url format: /about',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
          ],
        },
        //List of all pages
      ],
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.min(1).max(4),
    },
    //Array of strings and slugs
    {
      name: 'rightItems',
      title: 'Right Items',
      description:
        'Add, edit, and reorder items for the left side of the footer. Max 4 items. Example url format: /about',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
      validation: (Rule) => Rule.min(1).max(4),
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
