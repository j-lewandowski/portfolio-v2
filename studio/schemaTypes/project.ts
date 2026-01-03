import {defineType, defineField} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'ID / Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'name',
      title: 'Project name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Short description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured project',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'type',
      title: 'Project type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'In Progress', value: 'IN_PROGRESS'},
          {title: 'Completed', value: 'COMPLETED'},
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'lastUpdated',
      title: 'Last updated',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'images',
      title: 'Project images',
      type: 'array',
      of: [{type: 'image'}],
    }),

    defineField({
      name: 'content',
      title: 'Project content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading', value: 'h2'},
            {title: 'Subheading', value: 'h3'},
          ],
        },
      ],
    }),

    defineField({
      name: 'github',
      title: 'GitHub repository',
      type: 'url',
    }),

    defineField({
      name: 'deploymentUrl',
      title: 'Live URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      featured: 'featured',
      media: 'images.0',
    },
    prepare({title, featured, media}) {
      return {
        title,
        subtitle: featured ? '⭐ Featured project' : 'Project',
        media,
      }
    },
  },
})
