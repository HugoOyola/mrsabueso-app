"use client";
import React, { useState } from "react";

const ProductFilter = ({ onFilterChange, brands, categories }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: "",
    category: "",
    productType: "",
  });

  const handleBrandChange = (event) => {
    setSelectedFilters({ ...selectedFilters, brand: event.target.value });
  };

  const handleCategoryChange = (event) => {
    setSelectedFilters({ ...selectedFilters, category: event.target.value });
  };

  const handleProductTypeChange = (event) => {
    setSelectedFilters({ ...selectedFilters, productType: event.target.value });
  };

  const handleFilter = () => {
    onFilterChange(selectedFilters);
  };

  const handleReset = () => {
    setSelectedFilters({
      brand: "",
      category: "",
      productType: "",
    });
    onFilterChange({});
  };

  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-xl font-bold mb-4">Filtrar Productos</h2>
      <ul className="space-y-2">
        <li className="pb-2">
          <label className="block text-sm font-medium text-gray-700 pb-1">Marca:</label>
          <select value={selectedFilters.brand} onChange={handleBrandChange} className="w-full border border-gray-400 rounded">
            <option value="">Seleccione una marca</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </li>
        <li className="pb-2">
          <label className="block text-sm font-medium text-gray-700 pb-1">Categoría:</label>
          <select value={selectedFilters.category} onChange={handleCategoryChange} className="w-full border border-gray-400 rounded">
            <option value="">Seleccione una categoría</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </li>
        <li className="pb-2">
          <label className="block text-sm font-medium text-gray-700 pb-1">Tipo de Producto:</label>
          <select value={selectedFilters.productType} onChange={handleProductTypeChange} className="w-full border border-gray-400 rounded">
            <option value="">Seleccione un tipo de producto</option>
            <option value="onSale">En oferta</option>
            <option value="new">Nuevo</option>
          </select>
        </li>
      </ul>
      <div>
        <button onClick={handleFilter} className="mt-2 mr-2 border rounded px-4 py-2 bg-salmon text-white hover:bg-red-600">
          Filtrar
        </button>
        <button onClick={handleReset} className="mt-2 border rounded px-4 py-2 bg-azul text-white hover:bg-gray-400">
          Restablecer
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
