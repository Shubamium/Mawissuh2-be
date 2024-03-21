import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rules',
  title: 'Rules',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Rules Category Name',
      type: 'string',
    }),
		
		defineField({
			name:'rules',
			title:'Rules List',
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
