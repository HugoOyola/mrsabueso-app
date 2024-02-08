"use client";
// Importa useState y useEffect desde React
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductGrid from "./ProductGrid";
import ProductFilter from "./ProductFilter";
import { productList } from "@/data/products"; // Importar los datos del archivo products.js

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(() => productList);
  const [sortBy, setSortBy] = useState("default");

  // Obtener una lista única de marcas y categorías
  const brands = [...new Set(productList.map((product) => product.brand))];
  const categories = [...new Set(productList.map((product) => product.category))];

  const handleFilterChange = (filter) => {
    let filtered = productList;

    if (filter.brand) {
      filtered = filtered.filter((product) => product.brand === filter.brand);
    }

    if (filter.category) {
      filtered = filtered.filter((product) => product.category === filter.category);
    }

    if (filter.productType === "onSale") {
      filtered = filtered.filter((product) => product.onSale);
    } else if (filter.productType === "new") {
      filtered = filtered.filter((product) => product.newProduct);
    }

    setFilteredProducts(filtered);
  };

  const handleSortChange = (event) => {
    let sortedProducts = [...filteredProducts];

    if (event.target.value === "priceAsc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (event.target.value === "priceDesc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (event.target.value === "nameAsc") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (event.target.value === "nameDesc") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (event.target.value === "brandAsc") {
      sortedProducts.sort((a, b) => a.brand.localeCompare(b.brand));
    } else if (event.target.value === "brandDesc") {
      sortedProducts.sort((a, b) => b.brand.localeCompare(a.brand));
    }

    setFilteredProducts(sortedProducts);
    setSortBy(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-end px-4">
        {/* <div>
          <span className="text-center text-gray-600"><strong>Total: </strong>{productList.length} productos</span>
        </div> */}
        <label htmlFor="sortBy" className="pr-4">
          Ordenar por:
        </label>
        <select id="sortBy" value={sortBy} onChange={handleSortChange} className="border rounded">
          <option value="default">Por defecto</option>
          <option value="priceAsc">Precio (Menor a Mayor)</option>
          <option value="priceDesc">Precio (Mayor a Menor)</option>
          <option value="nameAsc">Nombre (A - Z)</option>
          <option value="nameDesc">Nombre (Z - A)</option>
          <option value="brandAsc">Marca (A - Z)</option>
          <option value="brandDesc">Marca (Z - A)</option>
        </select>
      </div>
      <div className="flex">
        <div className="w-1/3 p-4 mx-auto">
          <ProductFilter
            onFilterChange={handleFilterChange}
            brands={brands} // Pasar la lista única de marcas como propiedades
            categories={categories} // Pasar la lista única de categorías como propiedades
          />
        </div>
        <div className="w-3/4 p-4">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
