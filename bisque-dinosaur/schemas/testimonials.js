import {defineField, defineType} from 'sanity'
import {BsFillChatQuoteFill} from 'react-icons/bs'

export default {
  name: 'testimonials',
  title: 'Testimonials',
  icon: BsFillChatQuoteFill,
  type: 'document',
  fields: [
    {
      name: 'testimonialperson',
      title: 'Person',
      type: 'string',
    },
    {
      name: 'testimonialquote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'testimonialimage',
      title: 'Person Image',
      type: 'image',
    },
    {
      name: 'testimonialposition',
      title: 'Position',
      type: 'string',
    },
  ],
}
