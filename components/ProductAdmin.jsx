
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/client'; // Supondo que você tenha uma função 'urlFor'
import ProductEditForm from './ProductEditForm'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);  // Produto selecionado para editar
  const [isEditing, setIsEditing] = useState(false);  // Controle para mostrar o formulário de edição

  // Função para buscar os produtos (exemplo, substitua com sua lógica de API)
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/create-product");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      // Remover o produto da lista local após exclusão
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);  // Exibir o formulário de edição
  };

  const handleSave = async (editedProduct) => {
    
    try {
      const response = await fetch(`/api/edit-product/${editedProduct._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      // Atualizar a lista de produtos com o produto editado
      setProducts(products.map((product) =>
        product._id === editedProduct._id ? editedProduct : product
      ));

      setIsEditing(false);  // Fechar o formulário de edição
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <div>
      {isEditing && selectedProduct ? (
        <ProductEditForm
          product={selectedProduct}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ul className="space-y-2">
          {products.map((product) => (
            <li key={product._id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>Preço: R$ {product.price}</p>
              <p>Desconto: R$ {product.discount}</p>
              <p>Detalhes: {product.details}</p>
              <p>Medidas: {product.measures}</p>
              <Image
                src={urlFor(product.image && product.image[0]).url()}
                width={300}
                height={300}
                alt="card-image"
                className="rounded-t-2xl p-1 h-full object-cover mx-auto"
              />

              <button
                onClick={() => handleEdit(product)}
                className="text-blue-500 hover:text-blue-700"
              >
                Editar
              </button>

              <button
                onClick={() => handleDelete(product._id)}
                className="text-red-500 hover:text-red-700"
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
