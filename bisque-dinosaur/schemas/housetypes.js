import {MdHomeWork} from 'react-icons/md'

export default {
  name: 'houseType',
  title: 'Property Type',
  type: 'document',
  icon: MdHomeWork,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: 'slug',
      title: 'Slug',
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
      options: {
        hotspot: true,
      },
    },
  ],
}
