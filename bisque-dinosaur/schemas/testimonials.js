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
      title: 'Name',
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
      options: {
        hotspot: true,
      },
    },
    {
      name: 'testimonialposition',
      title: 'Position',
      type: 'string',
    },
    //Brokerage
    {
      name: 'brokerage',
      title: 'Brokerage',
      type: 'reference',
      to: [{type: 'brokerage'}],
    },
    //Project Director
    {
      name: 'projectdirector',
      title: 'Project Director (Depricated)',
      type: 'reference',
      to: [{type: 'projectdirector'}],
      readOnly: true,
    },
    //Property Type
    {
      name: 'propertytype',
      title: 'Property Type',
      type: 'reference',
      to: [{type: 'houseType'}],
    },
  ],
}
