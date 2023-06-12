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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
