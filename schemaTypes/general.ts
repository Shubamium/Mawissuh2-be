import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'preset',
      title: 'Preset Id',
      type: 'string',
			description:"Set the active one as 'main'"
    }),
		defineField({
			name:'main_service',
			title:'Main Service',
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
				defineField({
					name:'includes',
					title:'Included',
					type:'array',
					of:[{
						type:'string',
					}]
				}),
		
			]
		})
  
  ],

 
})
