import {defineField, defineType} from 'sanity'

export const aboutMePageType = defineType({
  name: 'aboutMePage',
  title: 'About Me Page',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
