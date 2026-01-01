import {defineType, defineField} from 'sanity'

export const experiencePageType = defineType({
  name: 'experiencePage',
  title: 'Experience Page',
  type: 'document',
  fields: [
    defineField({
      name: 'professionalExperience',
      title: 'Professional Experience',
      type: 'array',
      of: [{type: 'timelineItem'}],
    }),
    defineField({
      name: 'educationalExperience',
      title: 'Educational Experience',
      type: 'array',
      of: [{type: 'timelineItem'}],
    }),
  ],
})
