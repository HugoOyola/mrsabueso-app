'use client'
import React, { useState } from "react";

const categories = [
  {
    name: "Electrónica",
    subcategories: [
      { name: "Computadoras", href: "#" },
      { name: "Celulares", href: "#" },
      { name: "Accesorios", href: "#" },
    ],
  },
  {
    name: "Moda",
    subcategories: [
      { name: "Ropa", href: "#" },
      { name: "Zapatos", href: "#" },
      { name: "Joyería", href: "#" },
    ],
  },
  {
    name: "Hogar",
    subcategories: [
      { name: "Muebles", href: "#" },
      { name: "Decoración", href: "#" },
      { name: "Electrodomésticos", href: "#" },
    ],
  },
];

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const selectCategory = (category) => {
    setSelected(category);
    setOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={toggleOpen}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              {selected ? selected.name : "Categorías"}
            </button>
          </div>

          {open && (
            <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => selectCategory(category)}
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full justify-between text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="px-1 py-1">
                <button
                  onClick={() => selectCategory(null)}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full justify-center text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Ver todas las categorías
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
