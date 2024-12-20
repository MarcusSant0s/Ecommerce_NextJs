'use client';

import { client } from '@/lib/client';
import { useState, useEffect } from 'react';

const Filters = ({ onChange }) => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [bathType, setBathType] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [bathTypes, setBathTypes] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [expanded, setExpanded] = useState({
    category: true,
    subCategory: true,
    bathType: true,
    price: true,
  });
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFilters = () => {
    setIsCollapsed((prev) => !prev);
  };

  const fetchData = async () => {
    try {
      const categoryData = await client.fetch(`*[_type == "category"]`);
      console.log("Categoria:", categoryData);
      setCategories(categoryData.map((cat) => ({ id: cat._id, title: cat.category })));
  
      const subCategoryData = await client.fetch(`*[_type == "subCategories"]`);
      console.log("Subcategoria:", subCategoryData);
      setSubCategories(subCategoryData.map((subCat) => ({ id: subCat._id, title: subCat.subCategories })));
  
      const bathTypeData = await client.fetch(`*[_type == "bathType"]`);
      console.log("Tipo de Banho:", bathTypeData);
      setBathTypes(bathTypeData.map((bath) => ({ id: bath._id, title: bath.name })));
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = (filterType, value) => {
    const newFilter = [...filterType];
    const index = newFilter.indexOf(value);

    if (index === -1) {
      newFilter.push(value);
    } else {
      newFilter.splice(index, 1);
    }

    return newFilter;
  };

  const applyFilters = () => {
    onChange({
      category,
      subCategory,
      bathType,
      minPrice: minPrice || '0',
      maxPrice: maxPrice || 'Infinity',
    });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-28">
      <button
        onClick={toggleFilters}
        className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md text-left font-semibold flex justify-between items-center"
      >
        Filtros
        <span>{isCollapsed ? '+' : '-'}</span>
      </button>

      {!isCollapsed && (
        <div className="flex flex-col gap-4 mt-4">
          {[
            { id: 'category', label: 'Categoria', items: categories, value: category, setValue: setCategory },
            { id: 'subCategory', label: 'Subcategoria', items: subCategories, value: subCategory, setValue: setSubCategory },
            { id: 'bathType', label: 'Tipo de Banho', items: bathTypes, value: bathType, setValue: setBathType },
          ].map(({ id, label, items, value, setValue }) => (
            <div key={id} className="flex flex-col">
              <div className="flex justify-between items-center md:hidden">
                <label htmlFor={id} className="text-sm font-medium text-gray-700">
                  {label}
                </label>
                <button
                  onClick={() => toggleSection(id)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  {expanded[id] ? 'Menos' : 'Expandir'}
                </button>
              </div>
              {(expanded[id] || !window.matchMedia('(max-width: 768px)').matches) && (
                <div className="space-y-2 mt-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`${id}-${item.id}`}
                        checked={value.includes(item.title)}
                        onChange={() => setValue(handleFilterChange(value, item.title))}
                        className="mr-2 accent-blue-500"
                      />
                      <label htmlFor={`${id}-${item.id}`} className="text-sm text-gray-700">
                        {item.title}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col">
            <div className="flex justify-between items-center md:hidden">
              <label htmlFor="price" className="text-sm font-medium text-gray-700">
                Preço
              </label>
              <button
                onClick={() => toggleSection('price')}
                className="text-sm text-blue-500 hover:underline"
              >
                {expanded.price ? 'Menos' : 'Expandir'}
              </button>
            </div>
            {(expanded.price || !window.matchMedia('(max-width: 768px)').matches) && (
              <div className="mt-2 space-y-2">
                <input
                  type="number"
                  id="minPrice"
                  placeholder="Mínimo"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:outline-none"
                />
                <input
                  type="number"
                  id="maxPrice"
                  placeholder="Máximo"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:outline-none"
                />
              </div>
            )}
          </div>

          <button
            onClick={applyFilters}
            className="bg-pink-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-500 focus:ring-2 focus:outline-none transition"
          >
            Aplicar Filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default Filters;

