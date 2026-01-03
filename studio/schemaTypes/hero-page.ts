import {defineField, defineType} from 'sanity'

export const heroPageType = defineType({
  name: 'heroPage',
  title: 'Hero Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
