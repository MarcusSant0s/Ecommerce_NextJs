import { client } from '@/lib/client';

export async function GET(req) {
  // Parse the request URL to get query parameters
  const { searchParams } = new URL(req.url);
  const start = parseInt(searchParams.get('start') || '50', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  // Sanity query to fetch products with pagination
  const query = `*[_type == "product"] | order(_createdAt desc) {
    image, name, slug, discount, price, _id,
    "category": category->category
  }[${start}...${start + limit}]`;
  

  try {
    const products = await client.fetch(query);  
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response("Failed to fetch products", { status: 500 });
  }
}
