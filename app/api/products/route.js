import { client } from '@/lib/client';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const start = parseInt(searchParams.get('start') || '50', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);
  const category = searchParams.get('category') || '';
  const minPrice = parseFloat(searchParams.get('minPrice') || '0');
  const maxPrice = parseFloat(searchParams.get('maxPrice') || 'Infinity');

  const query = `*[_type == "product" 
    ${category ? `&& category->category == "${category}"` : ''} 
    && price >= ${minPrice} 
    && price <= ${maxPrice}
  ] | order(_createdAt desc) {
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
