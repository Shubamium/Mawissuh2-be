import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'other_service',
  title: 'Other Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
    }),

		defineField({
			name:'services',
			title:'Services',
			type:'array',
			of:[{
				type:'object',
				fields:[
					defineField({
						name:'title',
						title:'Service Title',
						type:'string'
					}),
					defineField({
						name:'description',
						title:'Service Description',
						type:'text'
					}),
					defineField({
						name:'price',
						type:'string'
					}),
					defineField({
						name:'rate',
						type:'string'
					}),
					defineField({
						name:'unit',
						type:'string'
					}),
				]
			}]
		})
  
  ],

 
})
