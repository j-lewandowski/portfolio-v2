import {defineType, defineField} from 'sanity'
import {technologyType} from './technology'

export const skillsPageType = defineType({
  name: 'skillsPage',
  title: 'Skills Page',
  type: 'document',
  fields: [
    defineField({
      name: 'skills',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'technology'}],
    }),
  ],
})
