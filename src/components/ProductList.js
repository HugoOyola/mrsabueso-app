"use client";
// Importa useState y useEffect desde React
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(() => products);
  const [sortBy, setSortBy] = useState("default");

  // Utiliza useEffect para ordenar los productos cuando cambia el sortBy
  useEffect(() => {
    let sortedProducts = [...filteredProducts];

    // Realiza la clasificación según la opción seleccionada
    if (sortBy === "priceAsc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceDesc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "nameAsc") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "nameDesc") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "brandAsc") {
      sortedProducts.sort((a, b) => a.brand.localeCompare(b.brand));
    } else if (sortBy === "brandDesc") {
      sortedProducts.sort((a, b) => b.brand.localeCompare(a.brand));
    }

    setFilteredProducts(sortedProducts);
  }, [sortBy, filteredProducts]);

  const handleFilterChange = (filter) => {
    let filtered = products;

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

  // Agrega un manejador para cambiar la opción de orden
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-end px-4">
        {/* Agrega el combo para ordenar */}
        <label htmlFor="sortBy" className="pr-4">Ordenar por:</label>
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
            brands={["Canbo", "Canbo Balance", "Cat Chow", "Pedigree", "Whiskas", "Royal Canin", "Otras"]}
            categories={["Alimentos", "Salud e Higiene", "Accesorios", "Juguetes", "Collares"]}
          />
        </div>
        <div className="w-3/4 p-4">
          <div className="grid grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
