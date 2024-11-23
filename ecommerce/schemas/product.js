 

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'discont',
        title: 'Discont',
        type: 'number',
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{type: 'category' }],
      },
      {
        name: 'Quantity',
        title: 'Quantity',
        type: 'number',
      },
      {
        name: 'bathType',
        title: 'Bath Type',
        type: 'reference',
        to: [{ type: 'bathType' }],
      },
    {
        name: 'subCategories',
        title: 'Sub Categories',
        type: 'array',
        of: [{ type:'reference', to: { type: 'subCategories' } }],
      }
    ],
   
  } 


  