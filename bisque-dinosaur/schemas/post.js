import {defineField, defineType} from 'sanity'
import {BiEdit} from 'react-icons/bi'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
export default defineType({
  name: 'post',
  title: 'Blog',
  icon: BiEdit,
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'www.freemodel.com/blog/[slug]',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'projectdirector',
      title: 'Author (Project Director)',
      type: 'reference',
      to: {type: 'projectdirector'},
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    // Array of posts
    defineField({
      name: 'relatedPosts',
      title: 'Related posts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
      validation: (Rule) => Rule.max(3),
    }),
    {
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string', // Use 'string' as the type for ordering
      description: 'When adding a new post, type a zero, otherwise ignore this field',
    },
  ],

  preview: {
    select: {
      title: 'title',
      projectdirector: 'projectdirector.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {projectdirector} = selection
      return {...selection, subtitle: projectdirector && `by ${projectdirector}`}
    },
  },
})
