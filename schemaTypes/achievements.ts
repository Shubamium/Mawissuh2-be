import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'achievement',
  title: 'Achievements',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Achievement Name',
      type: 'string',
    }),
		defineField({
			name:'description',
			type:'text'
		}),
  
  ],

 
})
