// CategorySelect.js
// import { Grid, Stack, Button } from '@sanity/ui';
// import { useClient } from '@sanity';

 


// export  default  function CategorySelect(props) {
//     const client = useClient({ apiVersion: '2022-03-10'});

//     const categoryType =  async () => {
//         const query = `*[_type == "category"]`;
//         const categoryType = await client.fetch(query) ?? [];


// if (!categoryType || !Array.isArray(categoryType)) {
// throw new Error('Invalid category type');
// }

// return categoryType;
// }

 
  
//   return (

//     <Stack space={3}>

//     {props.renderDefault(props)}

//     <Grid columns={categoryType.length} gap={1}>

//     {categoryType.map(cat => (
//         <Button key={cat._id} value={cat._id} mode="ghost" >
//           {cat.title}
//         </Button>   
//       ))} 

//     </Grid>

//   </Stack>


  
//   );

// }


 
 
