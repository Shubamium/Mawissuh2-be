import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'inactive_talents',
  title: 'Inactive Talents',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Talent Name',
      type: 'string',
    }),
		defineField({
			name:'data',
			type:'talent'
		}),
	
  
  ],

 
})
