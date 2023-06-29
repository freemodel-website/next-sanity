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
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'state',
      title: 'State',
      type: 'reference',
      to: [{type: 'states'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
