import {AiOutlineHome} from 'react-icons/ai'

export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  icon: AiOutlineHome,

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
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    // Slug
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
      group: 'page',
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
      group: 'page',
    },
    // Date Field with Initial Value
    {
      name: 'date',
      title: 'Date Completed',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString().split('T')[0], // Set initial value to the current date
      group: 'page',
    },
    //Profit
    {
      name: 'dollarprofit',
      title: 'Profit ($xxx,xxx)',
      type: 'string',
      group: 'page',
    },
    //Return
    {
      name: 'percentreturn',
      title: 'Return (xxx%)',
      type: 'string',
      group: 'page',
    },
    //Sold For
    {
      name: 'soldfor',
      title: 'Sold ($xxx,xxx)',
      type: 'string',
      group: 'page',
    },
    //As-Is
    {
      name: 'asis',
      title: 'As-Is ($xxx,xxx)',
      type: 'string',
      group: 'page',
    },
    //Renovation
    {
      name: 'renovationprice',
      title: 'Renovation ($xxx,xxx)',
      type: 'string',
      group: 'page',
    },
    // Location
    {
      name: 'cities',
      title: 'Location',
      type: 'reference',
      to: [{type: 'cities'}],
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    //Location write-in
    {
      name: 'locationwritein',
      title: 'Location (write-in)',
      description: 'Replaces the location listed above on the case study page.',
      type: 'string',
      group: 'page',
    },
    // Beds
    {
      name: 'beds',
      title: 'Beds',
      type: 'number',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    // Baths
    {
      name: 'baths',
      title: 'Baths',
      type: 'number',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    //Bool,
    {
      name: 'bool',
      title: 'Months',
      description: '(default/off is weeks)',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    //Duration
    {
      name: 'durationmonths',
      title: 'Duration (months/weeks)',
      type: 'number',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    //filter types
    {
      title: 'Home Type',
      name: 'hometype',
      type: 'reference',
      to: [{type: 'houseType'}],
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      title: 'Architechtural Style',
      name: 'architechturalstyle',
      type: 'reference',
      to: [{type: 'architecturalStyle'}],
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      name: 'spacetype',
      title: 'Space Type',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'spaceType'}],
        },
      ],

      validation: (Rule) => Rule.required(),
      group: 'page',
    },

    //Body of the page
    {
      name: 'body',
      title: 'Description',
      type: 'blockContent',
      group: 'page',
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
      group: 'page',
    },
    //array of project directors
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
    //Brokerage
    {
      name: 'brokerage',
      title: 'Brokerage',
      type: 'reference',
      to: [{type: 'brokerage'}],
      group: 'page',
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
      group: 'page',
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
      group: 'page',
    },
    //More Images
    {
      name: 'moreimagestitle',
      title: 'More Images Title',
      type: 'string',
      group: 'page',
    },
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
      group: 'page',
    },
    //Call to Action
    {
      name: 'casestudycalltoaction',
      title: 'Call to Action',
      type: 'string',
      group: 'page',
    },
    //Call to Action
    {
      name: 'casestudybuttontext',
      title: 'Button Text',
      type: 'string',
      group: 'page',
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
      group: 'page',
    },

    //SEO
    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoDescription', title: 'Description', type: 'string', group: 'seo'},
  ], //Top level fields
}
