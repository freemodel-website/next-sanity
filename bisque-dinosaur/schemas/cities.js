import {defineField, defineType} from 'sanity'
import {MdLocationCity} from 'react-icons/md'

export default {
  name: 'cities',
  title: 'Cities/Counties',
  icon: MdLocationCity,
  type: 'document',

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
      title: 'City/County Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'www.freemodel.com/locations/[state]/[slug]',
      options: {
        source: 'name',
        maxLength: 50,
      },

      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      name: 'state',
      title: 'State',
      type: 'reference',
      to: [{type: 'states'}],
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      name: 'bluebartext',
      title: 'Blue Bar Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    //HTML form
    {
      name: 'htmlform',
      title: 'HTML Form',
      type: 'text',
      group: 'page',
    },
    {
      name: 'serviceList',
      title: 'Service List',
      type: 'text',
      group: 'page',
    },
    {
      name: 'pdtitle',
      title: 'Project Director Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'page',
    },
    {
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      group: 'page',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      group: 'page',
    },
    //Case Studies
    {
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'caseStudy'}]}],
      group: 'page',
    },
    //show bool
    {
      name: 'hide',
      title: 'Hide',
      type: 'boolean',
      group: 'page',
    },

    //SEO
    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoDescription', title: 'Description', type: 'string', group: 'seo'},
    {name: 'seoImage', title: 'Image', type: 'image', group: 'seo'},

    //END
  ],
}
