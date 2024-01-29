"use client"
import React, { useState } from 'react';

const ProductFilter = ({ onFilterChange, brands, categories }) => {
  const [filter, setFilter] = useState({
    selectedBrands: [], // Cambiado a un array para manejar selección múltiple
    category: '',
    productType: 'all', // 'all', 'onSale', 'new'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleBrandChange = (brand) => {
    const isSelected = filter.selectedBrands.includes(brand);
    const selectedBrands = isSelected
      ? filter.selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...filter.selectedBrands, brand];

    setFilter({ ...filter, selectedBrands });
  };

  const handleFilter = () => {
    onFilterChange(filter);
  };

  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-xl font-bold mb-4">Filtrar Productos</h2>

      <ul className="space-y-2">
        <li>
          <label className="block text-sm font-medium text-gray-700">Categoría:</label>
          <select
            name="category"
            value={filter.category}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="">Todas</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label className="block text-sm font-medium text-gray-700">Tipo de Producto:</label>
          <select
            name="productType"
            value={filter.productType}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="all">Todos</option>
            <option value="onSale">Oferta</option>
            <option value="new">Nuevo</option>
          </select>
        </li>
        <li>
          <label className="block text-sm font-medium text-gray-700">Marcas:</label>
          <div className="overflow-y-auto max-h-40 bg-white py-2 px-4 rounded-md">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={brand}
                  name={brand}
                  checked={filter.selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="mr-2"
                />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </div>
        </li>
      </ul>

      <button
        onClick={handleFilter}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
      >
        Filtrar
      </button>
    </div>
  );
};

export default ProductFilter;