import {defineType} from 'sanity'

export default defineType({
  name: 'thankyous',
  title: 'Thank You',
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
    //Homeowner Body
    {
      name: 'homeownerbody',
      title: 'Homeowner Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    //Agent Body
    {
      name: 'agentbody',
      title: 'Agent Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    //Agent Body
    {
      name: 'notifybody',
      title: 'Agent Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    //Social Media
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

    //END
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pagetype',
    },
  },
})
