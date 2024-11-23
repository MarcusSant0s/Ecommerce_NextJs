export default {
    name: 'bathType',
    title: 'Bath Type',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
    ],

    preview: {
        select: {
          title: 'name', // The name field will be shown in the list
          subtitle: 'description', // The description will be shown as a subtitle
        },
      },
    };