// app/api/products/[id]/route.js
import { client } from '@/lib/client';  // Adjust this path based on your client logic

export async function DELETE(req, { params }) {
  const { id } = params;  // Get the dynamic ID from the URL

  if (!id) {
    return new Response(JSON.stringify({ error: 'Product ID is required' }), { status: 400 });
  }

  try {
    // Perform the deletion (replace this with your actual delete logic)
    const result = await client.delete(id);  // Adjust client logic as needed

    // If successful
    return new Response(JSON.stringify({ message: 'Product deleted successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete product' }), { status: 500 });
  }
}

