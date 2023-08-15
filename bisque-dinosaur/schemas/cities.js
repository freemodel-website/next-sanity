import {defineField, defineType} from 'sanity'
import {MdLocationCity} from 'react-icons/md'

export default {
  name: 'cities',
  title: 'Cities/Counties',
  icon: MdLocationCity,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'City/County Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'state',
      title: 'State',
      type: 'reference',
      to: [{type: 'states'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bluebartext',
      title: 'Blue Bar Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    //HTML form
    {
      name: 'htmlform',
      title: 'HTML Form',
      type: 'text',
    },
    {
      name: 'serviceList',
      title: 'Service List',
      type: 'text',
    },
    {
      name: 'pdtitle',
      title: 'Project Director Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
  ],
}
