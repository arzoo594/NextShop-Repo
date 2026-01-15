import React from "react";

import { ObjectId } from "mongodb";
import { dbConnect } from "@/lib/dbconnect";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  try {
    const collection = await dbConnect("products");
    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return (
        <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
          Product not found!
        </div>
      );
    }

    return (
      <section className="min-h-screen py-12 bg-gray-50 dark:bg-[#0f172a]">
        <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-[#1a0033] rounded-3xl shadow">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="mx-auto bg-gray-200 p-4 object-cover rounded-2xl mb-6"
          />
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {product.name}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {product.category}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {product.fullDesc}
          </p>
          <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xl mb-2">
            ${product.price}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {product.brand} | {product.stock}
          </p>
        </div>
      </section>
    );
  } catch (err) {
    console.error(err);
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error fetching product!
      </div>
    );
  }
};

export default ProductDetails;
