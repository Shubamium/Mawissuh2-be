import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'active_talents',
  title: 'Active Talents',
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
