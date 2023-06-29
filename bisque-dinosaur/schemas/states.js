import {defineField, defineType} from 'sanity'
import {GiTexas} from 'react-icons/gi'

export default {
  name: 'states',
  title: 'States',
  icon: GiTexas,
  type: 'document',
  fields: [
    {
      name: 'statename',
      title: 'State Name',
      type: 'string',
    },
    {
      name: 'stateabbr',
      title: 'State Abbreviation',
      description: 'i.e. TX, NY, CA',
      type: 'string',
      validation: (Rule) => Rule.required().max(2),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'statename',
        maxLength: 50,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
