import { client } from '@/lib/client'; // Supondo que você tenha configurado o cliente Sanity corretamente

export async function PUT(req, { params }) {
  const { id } = params;  // Pega o ID do produto da URL
  const body = await req.json();  // Pega os dados do produto da requisição

  if (!id || !body) {
    return new Response(JSON.stringify({ error: 'Product ID and data are required' }), { status: 400 });
  }

  try {
    // Usando o cliente do Sanity para atualizar o produto
    const updatedProduct = await client
      .patch(id)  // Localiza o produto com o ID
      .set(body)  // Define os novos dados
      .commit();  // Confirma a atualização

    // Retorna o produto atualizado
    return new Response(JSON.stringify(updatedProduct), { status: 200 });
  } catch (error) {
    console.error('Error updating product:', error);
    return new Response(JSON.stringify({ error: 'Failed to update product' }), { status: 500 });
  }
}
