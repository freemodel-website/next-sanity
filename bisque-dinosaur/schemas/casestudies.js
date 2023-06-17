import {AiOutlineHome} from 'react-icons/ai'

export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  icon: AiOutlineHome,
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // Slug
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
    },
    //Hero Image
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    //Profit
    {
      name: 'dollarprofit',
      title: 'Profit ($xxx,xxx)',
      type: 'string',
    },
    //Return
    {
      name: 'percentreturn',
      title: 'Return (xxx%)',
      type: 'string',
    },
    //Sold For
    {
      name: 'soldfor',
      title: 'Sold ($xxx,xxx)',
      type: 'string',
    },
    //As-Is
    {
      name: 'asis',
      title: 'As-Is ($xxx,xxx)',
      type: 'string',
    },
    //Renovation
    {
      name: 'renovationprice',
      title: 'Renovation ($xxx,xxx)',
      type: 'string',
    },
    // Location
    {
      name: 'cities',
      title: 'Location',
      type: 'reference',
      to: [{type: 'cities'}],
      validation: (Rule) => Rule.required(),
    },
    // Beds
    {
      name: 'beds',
      title: 'Beds',
      type: 'number',
    },
    // Baths
    {
      name: 'baths',
      title: 'Baths',
      type: 'number',
    },
    //Duration
    {
      name: 'durationmonths',
      title: 'Duration (months)',
      type: 'number',
    },
    //Body of the page
    {
      name: 'body',
      title: 'Description',
      type: 'blockContent',
    },

    //Testimonials
    {
      name: 'casestudytestimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'testimonials'}],
        },
      ],
    },

    //Before Image
    {
      name: 'beforeimages',
      title: 'Before Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'beforeimage',
              title: 'Before Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              imageUrl: 'beforeimage.asset.url',
              altText: 'beforeimage.alt',
              file: 'beforeimage.asset.originalFilename',
            },
            prepare({imageUrl, file}) {
              return {
                title: file || 'No alt text',
                imageUrl,
              }
            },
          },
        },
      ],
    },
    //After Image
    {
      name: 'afterimages',
      title: 'After Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'afterimage',
              title: 'After Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              imageUrl: 'afterimage.asset.url',
              altText: 'afterimage.alt',
              file: 'afterimage.asset.originalFilename',
            },
            prepare({imageUrl, file}) {
              return {
                title: file || 'No alt text',
                imageUrl,
              }
            },
          },
        },
      ],
    },
    //More Images
    {
      name: 'moreimages',
      title: 'More Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'moreimage',
              title: 'More Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              imageUrl: 'moreimage.asset.url',
              altText: 'moreimage.alt',
              file: 'moreimage.asset.originalFilename',
            },
            prepare({imageUrl, file}) {
              return {
                title: file || 'No alt text',
                imageUrl,
              }
            },
          },
        },
      ],
    },
    //Call to Action
    {
      name: 'casestudycalltoaction',
      title: 'Call to Action',
      type: 'string',
    },
    //Call to Action
    {
      name: 'casestudybuttontext',
      title: 'Button Text',
      type: 'string',
    },
    //Select other case studies
    {
      name: 'casestudyselect',
      title: 'Show More Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'caseStudy'}],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },

    //home types
    {
      title: 'Home Type',
      name: 'hometype',
      type: 'reference',
      to: [{type: 'houseType'}],
    },
    {
      title: 'Architechtural Style',
      name: 'architechturalstyle',
      type: 'reference',
      to: [{type: 'architecturalStyle'}],
    },
  ], //Top level fields
}
