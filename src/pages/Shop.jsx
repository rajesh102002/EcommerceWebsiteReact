// pages/Shop.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
export default function Shop() {
    const products =useSelector(state => state.product)
  return (
    <div className="container mx-auto   py-4 flex-col md:flex-row px-4">
          <h2 className="font-bold text-2xl mb-5 text-center justify-center">Shop</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.products.map((product) => (
              <ProductCard product={product}/>// Displaying products
            ))}
          </div>
        </div>
  );
}
