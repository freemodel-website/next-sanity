import {FaNewspaper} from 'react-icons/fa'

export default {
  name: 'media',
  title: 'Press',
  type: 'document',
  icon: FaNewspaper,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    //URL
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    //Image
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string', // Use 'string' as the type for ordering
      description: 'When adding a new post, type a zero, otherwise ignore this field',
    },
  ],
}
