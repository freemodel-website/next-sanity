import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutus',
  title: 'About Us',
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
    {
      name: 'bluetitle',
      title: 'Blue Bar Title',
      type: 'string',
    },

    //Body of the page

    //Images
    {
      name: 'questionsanswers',
      title: 'Learn About Our Services',
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
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            // {
            //   name: 'link',
            //   title: 'Link',
            //   type: 'string',
            // },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
      preview: {
        select: {
          imageUrl: 'image.asset.url',
          altText: 'image.alt',
          title: 'title',
          file: 'image.asset.originalFilename',
        },
        prepare({imageUrl, altText, title}) {
          return {
            title: title || altText || 'No title',
            imageUrl,
          }
        },
      },
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
