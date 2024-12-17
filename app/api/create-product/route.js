      import { client } from '@/lib/client';
      export async function POST(req) {
        try {
          const formData = await req.formData();
          console.log(formData); // Debug to see the structure
      
          // Extract other fields from formData
          const name = formData.get('name');
          const price = formData.get('price');
          const category = formData.get('category');
          const subCategories = formData.getAll('subCategories'); // Can be multiple
          const bathType = formData.get('bathType');
          const measures = formData.get('measure');
          const discont = formData.get('discount');
          const details = formData.get('details');
          const Quantity = parseInt(formData.get('Quantity')); // Convert to integer
      
          // Handle images - loop over keys dynamically
          const images = [];
          let imageIndex = 0;
      
          while (formData.has(`image_${imageIndex}`)) {
            const imageFile = formData.get(`image_${imageIndex}`);
            images.push(imageFile);
            imageIndex++;
          }
      
          // Log images for debugging
          console.log('Images:', images);
      
          // Validate the required fields
          if (!name || !price || !category) {
            return new Response(
              JSON.stringify({ error: 'Name, price, and category are required' }),
              { status: 400 }
            );
          }
      
          // Array to store uploaded images' references
          let uploadedImages = [];
      
          // Upload images to your storage (e.g., Sanity)
          for (const image of images) {
            const buffer = await image.arrayBuffer();
            const imageUploadResponse = await client.assets.upload('image', Buffer.from(buffer), {
              filename: image.name || 'upload.jpg',
              contentType: image.type || 'image/jpeg',
            });
      
            console.log('Image upload response:', imageUploadResponse);
      
            // Push the image reference to the uploadedImages array
            uploadedImages.push({
              _key: crypto.randomUUID(),
              _type: 'image',
              asset: { _ref: imageUploadResponse._id, _type: 'reference' },
            });
          }
      
          console.log('Uploaded images:', uploadedImages);
      
          // Create the new product document with the uploaded images
          const newProduct = await client.create({
            _type: 'product',
            name,
            details,
            price: parseFloat(price),
            category: { _type: 'reference', _ref: category },
            subCategories: subCategories.map((sub) => ({
              _key: crypto.randomUUID(),
              _type: 'reference',
              _ref: sub,
            })),
            bathType: bathType ? { _type: 'reference', _ref: bathType } : null,
            measures,
            Quantity,
            discont: discont ? parseFloat(discont) : null,
            image: uploadedImages.length ? uploadedImages : null,
          });
      
          return new Response(JSON.stringify(newProduct), { status: 201 });
        } catch (error) {
          console.error('Error creating product:', error);
          return new Response(JSON.stringify({ error: 'Error creating product' }), {
            status: 500,
          });
        }
      }
      

// Método GET para buscar todos os produtos
export async function GET() {
  try {
    const products = await client.fetch(`*[_type == "product"]`);
    console.log(products)
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return new Response(JSON.stringify({ error: 'Erro ao buscar produtos' }), { status: 500 });
  }
}


 