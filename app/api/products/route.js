import { client } from '@/lib/client';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const start = parseInt(searchParams.get('start') || '0', 10); // Começo da paginação
  const limit = parseInt(searchParams.get('limit') || '20', 10); // Limite de itens por página

  // Obtendo múltiplas categorias e subcategorias
  const categories = searchParams.get('category') ? searchParams.get('category').split(',') : [];
  const bathType = searchParams.get('bathType') || '';
  const subcategories = searchParams.get('subcategories') ? searchParams.get('subcategories').split(',') : [];
  
  // Preços mínimo e máximo
  const minPrice = parseFloat(searchParams.get('minPrice') || '0');
  const maxPrice = parseFloat(searchParams.get('maxPrice') || '100000000');

  // Construindo a query para o Sanity com os filtros dinâmicos
  const query = `*[_type == "product"
    ${categories.length > 0 ? `&& category->category in ${JSON.stringify(categories)}` : ''}
    ${bathType ? `&& bathType->title == "${bathType}"` : ''}
    ${subcategories.length > 0 ? `&& subcategories[]->title in ${JSON.stringify(subcategories)}` : ''}
    && price >= ${minPrice} 
    && price <= ${maxPrice}
  ] | order(_createdAt desc) {
    image, name, slug, discount, price, _id,
    "category": category->category,
    "bathType": bathType->title,
    "subcategories": subcategories[]->title
  }[${start}...${start + limit}]`;

  try {
    console.log(query)

    const products = await client.fetch(query);
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return new Response("Falha ao buscar produtos", { status: 500 });
  }
}

