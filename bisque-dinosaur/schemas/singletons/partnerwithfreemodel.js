import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'partnerwithfreemodel',
  title: 'Lets Talk',
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
      validation: (rule) => rule.required(),
      group: 'page',
    },
    //Body
    {
      name: 'bluebartext',
      title: 'Blue Bar Text',
      type: 'text',
      group: 'page',
    },
    //Body Copy
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (rule) => rule.required(),
      group: 'page',
    },

    //Question title
    {
      name: 'title1',
      title: 'QA: Title',
      type: 'string',
      group: 'page',
    },
    //Question Image
    {
      name: 'questionimage',
      title: 'Question Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'page',
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
      group: 'page',
    },
    //Windy Section
    {
      name: 'windySectionTitle',
      title: 'Windy Section Title',
      type: 'string',
      group: 'page',
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
      group: 'page',
    },

    {
      name: 'leftimage',
      title: 'Left image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      group: 'page',
    },
    {
      name: 'righttext',
      title: 'Right Text',
      type: 'text',
      group: 'page',
    },

    //Testimonial title
    {
      name: 'testimonialstitle',
      title: 'Testimonials Section: Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    //testimonials
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
    {
      name: 'bottomtitle',
      title: 'Buttom Title',
      type: 'text',
      group: 'page',
    },
    //Body Copy
    {
      name: 'bottombody',
      title: 'Bottom Body',
      type: 'blockContent',
      validation: (rule) => rule.required(),
      group: 'page',
    },
    //Button Title
    {
      name: 'buttontitle2',
      title: 'Button Title 2',
      type: 'string',
      group: 'page',
    },
    //Button Link2
    {
      name: 'buttonlink',
      title: 'Button Link',
      type: 'string',
      group: 'page',
    },

    //-----------------------
    //-----------SEO---------
    //-----------------------
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
