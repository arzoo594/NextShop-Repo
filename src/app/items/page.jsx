"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Items = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600 dark:text-gray-300">
        Loading products...
      </div>
    );

  return (
    <section className="min-h-screen  bg-gray-50 dark:bg-[#0f172a]">
      <div className=" mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          All Products
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No products found. Add some first!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className=" bg-gray-100 dark:bg-[#1a0033] p-6 rounded-2xl shadow hover:scale-105 transform transition flex flex-col"
              >
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-full  object-cover rounded-xl mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {product.shortDesc}
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
                  ${product.price}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                  {product.brand} | {product.stock}
                </p>

                {/* View Details Button */}
                <Link
                  href={`/items/${product._id}`}
                  className="mt-auto py-2 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center rounded-lg font-medium transition"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Items;
