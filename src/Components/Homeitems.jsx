import React from "react";
import Link from "next/link";
import { dbConnect } from "@/lib/dbconnect";

const HomePage = async () => {
  const collection = await dbConnect("products");

  const products = await collection
    .find({})
    .sort({ createdAt: -1 })
    .limit(6)
    .toArray();

  return (
    <section className="min-h-screen  dark:bg-[#0f172a] py-8">
      <div className=" mx-auto ">
        <h2 className="text-3xl lg:text-4xl text-center font-bold mb-8 text-gray-900 dark:text-white">
          Latest Products
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id.toString()}
              className="bg-gray-100  hover:scale-105 transform transition dark:bg-[#1a0033] rounded-2xl shadow p-5 flex flex-col"
            >
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full   object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {product.shortDesc}
              </p>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                ৳ {product.price}
              </p>
              <Link
                href={`/items/${product._id.toString()}`}
                className="mt-auto py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg text-center"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/items"
          className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-24 py-3 text-white font-semibold rounded-lg transition"
        >
          All Items
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
