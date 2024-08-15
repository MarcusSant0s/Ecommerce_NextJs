export default {
    name: 'subCategories', 
    title: 'SubCategories',
    type: 'document',
    fields:[{
        name: 'subCategories',
        title: 'Sub Categories',
        type:'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'subCategories',
        maxLength: 90,
      }
    }
    ]
}