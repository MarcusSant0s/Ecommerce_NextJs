  "use client";

  import React, { useEffect, useState } from "react";
  import image from "next/image";
  import { client, urlFor  } from "@/lib/client"; 
import Image from "next/image";

import ProductAdmin from '../ProductAdmin'
  export default function InsertProducts() {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [bathTypes, setBathTypes] = useState([]);
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
      name: "", 
      details: "",
      price: "",
      category: "",
      subCategories: [],
      measure:"",
      bathType: "",
      image: null,
      discount: "",
      Quantity:0,
    });

    useEffect(() => {
      fetchData();
      fetchProducts();
    }, []);

    const handleError = (error, message) => {
      console.error(message, error);
      alert(`${message}: ${error.message}`);
    };

    const fetchData = async () => {
      try {
        const [categoryData, subCategoryData, bathTypeData] = await Promise.all([
          client.fetch(`*[_type == "category"]`),
          client.fetch(`*[_type == "subCategories"]`),
          client.fetch(`*[_type == "bathType"]`),
        ]);

        setCategories(categoryData.map((cat) => ({ id: cat._id, title: cat.category })));
        setSubCategories(subCategoryData.map((subCat) => ({ id: subCat._id, title: subCat.subCategories })));
        setBathTypes(bathTypeData.map((bath) => ({ id: bath._id, title: bath.name })));
      } catch (error) {
        handleError(error, "Erro ao buscar dados de categorias, subcategorias ou tipos de banho");
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/create-product");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const data = new FormData();
    
    // Append each image file
    if (formData.image) {
      formData.image.forEach((file, index) => {
        data.append(`image_${index}`, file); // Name the keys dynamically
        console.log(data)
      });
    }

    // Append other fields
    Object.keys(formData).forEach((key) => {
      if (key !== "image") {
        if (Array.isArray(formData[key])) {
          formData[key].forEach((value) => data.append(key, value));
        } else {
          data.append(key, formData[key]);
        }
      }
    });
    console.log(data)
    
      try {
        const response = await fetch("/api/create-product", {
          method: "POST",
          body: data,
        });
    
        if (!response.ok) throw new Error("Erro ao adicionar produto");
        // Lidar com a resposta conforme necessário
      alert('Produto adicionado')
      }
       catch (error) {
        console.error('Erro:', error);
      }
    };

    const handleFileChange = (e) => {
      const files = Array.from(e.target.files); // Convert FileList to an array
      setFormData((prev) => ({
        ...prev,
        image: files, // Store all selected files
    
      }));
    };

    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (field, value) => {
      setFormData((prev) => {
        const updatedList = prev[field].includes(value)
          ? prev[field].filter((item) => item !== value) // Remove if already selected
          : [...prev[field], value]; // Add if not selected

        return { ...prev, [field]: updatedList };
      });
    };


    const handleDelete = async (productId) => {
      try {
        const response = await fetch(`/api/delete-product/${productId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete product');
        }
    
        // Update the local state to remove the deleted product
        setProducts(products.filter(product => product._id !== productId));
    
        alert('Produto deletado com sucesso!');
      } catch (error) {
        console.error('Erro ao deletar produto:', error);
        alert('Erro ao deletar produto');
      }
    };
    

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cadastrar Produto</h1>

        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          {/* Nome, Slug, Detalhes */}
          <div>
            <label className="block font-semibold mb-1">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Quantidade</label>
            <input
              type="nuber"
              name="Quantity"
              value={formData.Quantity}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div> 
          <div>
            <label className="block font-semibold mb-1">Detalhes</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Medidas</label>
            <textarea
              name="measure"
              value={formData.measure}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>


          {/* Tipos de Banho */}

          <div>
            <label className="block font-semibold mb-1">Tipo do banho</label>
            <select
              name="bathType"
              value={formData.bathType}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            >
              <option value="">Selecione uma banho</option>
              {bathTypes.map((bathType) => (
                <option key={bathType.id} value={bathType.id}>
                  {bathType.title}
                </option>
              ))}
            </select>
          </div>
  
          {/* Categoria */}
          <div>
            <label className="block font-semibold mb-1">Categoria</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            >
              <option value="">Selecione uma categoria</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategorias */}
          <div>
            <label className="block font-semibold mb-1">Subcategorias</label>
            <div className="space-y-2">
              {subCategories.map((subCategory) => (
                <label key={subCategory.id} className="flex items-center">
                  <input
                    type="checkbox"
                    value={subCategory.id}
                    checked={formData.subCategories.includes(subCategory.id)}
                    onChange={() => handleCheckboxChange("subCategories", subCategory.id)}
                    className="mr-2"
                  />
                  {subCategory.title}
                </label>
              ))}
            </div>
          </div>

          {/* Imagem e Desconto */}
          {/* Imagem */}
          <div>
              <label className="block font-semibold mb-1">Imagem</label>
              <input
                  type="file"
                  name="image"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="border p-2 rounded w-full"
              />
          </div>
          <div>
            <label className="block font-semibold mb-1">Preço (%)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Desconto (%)</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Botão de Submissão */}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Cadastrar Produto
          </button>
        </form>

        <ul className="space-y-2">
        {products.map((product) => (
          <li key={product._id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>Preço: R$ {product.price}</p>
            <p>Desconto: R$ {product.discont}</p>
            <p>Detalhes: R$ {product.details}</p>
            <p>Tamanho: R$ {product.measures}</p>
            <Image
            src={urlFor(product.image && product.image[0]).url()}
            width={300}
            height={300}
            alt="card-image"
            className='  rounded-t-2xl p-1 h-full object-cover mx-auto' />

            <button
              onClick={() => handleDelete(product._id)} 
              className="text-red-500 hover:text-red-700"
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>

 
      </div>
    );
  }
