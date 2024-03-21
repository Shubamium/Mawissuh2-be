import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
    }),
		defineField({
			name:'description',
			type:'text'
		}),
		defineField({
			name:'notes',
			type:'array',
			of:[{
				type:'object',
				fields:[
					{
						name:'title',
						type:'string'
					},{
						name:'description',
						type:'text'
					}
				]
			}]
		})
  
  ],

 
})
