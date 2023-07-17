import {MdOutlineArchitecture} from 'react-icons/md'

export default {
  name: 'architecturalStyle',
  title: 'Architectural Style',
  type: 'document',
  icon: MdOutlineArchitecture,
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
