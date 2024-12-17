import { useState } from "react";

const ProductEditForm = ({ product, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      name: product.name,
      price: product.price,
      discount: product.discount,
      details: product.details,
      measures: product.measures,
      image: product.image,  // Supondo que seja um array de imagens
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
        <h2 className="text-xl font-semibold">Editar Produto</h2>
  
        <label>
          Nome
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </label>
  
        <label>
          Preço
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </label>
  
        <label>
          Desconto
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </label>
  
        <label>
          Detalhes
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </label>
  
        <label>
          Medidas
          <input
            type="text"
            name="measures"
            value={formData.measures}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </label>
  
        {/* Caso queira permitir a alteração de imagem */}
        <label>
          Imagem
          <input
            type="file"
            name="image"
            onChange={(e) => setFormData({ ...formData, image: e.target.files })}
            className="border p-2 rounded"
          />
        </label>
  
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Salvar
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white p-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  };
  
  export default ProductEditForm;
  