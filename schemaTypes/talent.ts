import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'talent',
  title: 'talent',
  type: 'object',
  fields: [

		defineField({
			name:'briefing',
			type:'string'
		}),
		defineField({
			name:'surveillance',
			description:'Video ID on Youtube, same as before',
			type:'string'
		}),
		defineField({
			name:'status',
			title:'Status',
			type:'string',
			options:{
				list:[
					{title:'Active',value:'active'},
					{title:'Inactive',value:'inactive'}
				]
			},
	
		}),
		defineField({
			name:'active_time',
			title:'Under Investigation Start Date',
			type:'datetime'
		}),
		defineField({
			name:"socials",
			type:'array',
			of:[
				{type:'object',fields:[
					{name:'icon',type:'image'},
					{name:'link',type:'url'}
				]}
			]
		
		})
  ],

 
})
