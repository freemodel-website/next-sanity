import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'fordesigners',
  title: 'For Designers',
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
      validation: (rule) => rule.required(),
    },
    {
      name: 'bluebarbody',
      title: 'BlueBar: Body',
      type: 'text',
    },
    {
      name: 'bluebarimage',
      title: 'Blue Bar Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    },
    //Q&A
    {
      name: 'questionimage',
      title: 'Question Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'qatitle',
      title: 'Q&Q: Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'questionsanswers',
      title: 'Questions Answers”',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'q',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'a',
              title: 'Answer',
              type: 'text',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    },
    //Left Image RightText
    {
      name: 'lirtimage',
      title: 'Section 4: Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'lirttitle',
      title: 'Section 4: Image Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'lirttext',
      title: 'Section 4: Text',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    //Project Director
    {
      name: 'pdtitle',
      title: 'Project Director Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'pdimage',
      title: 'Project Director Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'pdquote',
      title: 'Project Director Quote',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'pdname',
      title: 'Project Director Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'pdjobtitle',
      title: 'Project Director Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },

    /*
     * Windy Section
     */
    {
      name: 'windySectionTitle',
      title: 'Windy Section Title',
      type: 'string',
    },
    {
      name: 'windySection',
      title: 'Layout:Windy',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'windyimage',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'number',
              title: 'Number',
              type: 'number',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'number', // Display 'number' field as title in the preview
              subtitle: 'text', // Display 'text' field as subtitle in the preview
              media: 'windyimage', // Selecting 'windyimage' field to display as media in the preview
            },
          },
        },
      ],
      validation: (rule) => rule.required().max(8),
    },

    /*
     * Become a Project Director
     */
    {
      name: 'becomepdtitle',
      title: 'Become a Project Director Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    //Section 1
    {
      name: 'becomepdec1',
      title: '#1 H2',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'becomepdtext',
      title: '#1 Text',
      type: 'text',
    },
    {
      name: 'becomepdbutton',
      title: '#1 Button',
      type: 'object',
      fields: [
        {
          name: 'button',
          title: 'Button',
          type: 'string',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'string',
        },
      ],
      validation: (rule) => rule.required(),
    },
    //Section 2
    {
      name: 'becomepdec2',
      title: '#2 H2',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'becomepdtext2',
      title: '#2 Text',
      type: 'text',
    },
    {
      name: 'becomepdbutton2',
      title: '#2 Button',
      type: 'object',
      fields: [
        {
          name: 'button',
          title: 'Button',
          type: 'string',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'string',
        },
      ],
      validation: (rule) => rule.required(),
    },

    //Meet the Team
    {
      name: 'amazingtitle',
      title: 'Amazing Team Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    //image array
    {
      name: 'amazingteamimages',
      title: 'Team Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (rule) => rule.required().min(6).max(6),
    },
    {
      name: 'amazingbutton',
      title: 'Amazing Team Button',
      type: 'object',
      fields: [
        {
          name: 'button',
          title: 'Button',
          type: 'string',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'string',
        },
      ],
      validation: (rule) => rule.required(),
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
