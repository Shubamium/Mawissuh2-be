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
			name:'slug',
			description:`The url for this talent profile, Don't leave it empty! `,
			type:'slug',
			options:{
				source:'name'
			}
		}),
		defineField({
			name:'data',
			type:'talent'
		}),
  ],
	preview:{
		select:{
			title:'name',
			media:'data.profile'
		}
	}


 
})
