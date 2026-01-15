"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddItems = () => {
  const [formData, setFormData] = useState({
    name: "",
    shortDesc: "",
    fullDesc: "",
    category: "",
    price: "",
    thumbnail: "",
    brand: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: "Your product has been added successfully ✅",
          showConfirmButton: false,
          timer: 2000,
        });

        setFormData({
          name: "",
          shortDesc: "",
          fullDesc: "",
          category: "",
          price: "",
          thumbnail: "",
          brand: "",
          stock: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong ❌",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Unable to add product ❌",
      });
    }
  };

  return (
    <section className="  min-h-screen">
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#0f122a] p-12 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <h1
          className="text-4xl font-extrabold text-center mb-6
          bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
          bg-clip-text text-transparent"
        >
          Add New Product
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Enter product details to make your listing shine ✨
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Floating Input Component */}
          {[
            { name: "name", label: "Product Name", type: "text" },
            {
              name: "category",
              label: "Category (e.g. Electronics)",
              type: "text",
            },
            { name: "price", label: "Price", type: "number" },
            { name: "thumbnail", label: "Thumbnail Image URL", type: "text" },
            { name: "brand", label: "Brand / Manufacturer", type: "text" },
            { name: "stock", label: "Stock Status", type: "text" },
          ].map((input) => (
            <div key={input.name} className="relative z-0 w-full group">
              <input
                type={input.type}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                className="peer block w-full px-4 pt-5 pb-2 text-gray-900 dark:text-gray-100 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:outline-none transition"
                placeholder=" "
                required
              />
              <label className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500">
                {input.label}
              </label>
            </div>
          ))}

          {/* Short Description */}
          <div>
            <textarea
              rows="3"
              name="shortDesc"
              value={formData.shortDesc}
              onChange={handleChange}
              placeholder="Short Description (for cards)"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#1a0033] focus:ring-2 focus:ring-indigo-500 transition resize-none"
              required
            />
          </div>

          {/* Full Description */}
          <div>
            <textarea
              rows="5"
              name="fullDesc"
              value={formData.fullDesc}
              onChange={handleChange}
              placeholder="Full Description (for details page)"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#1a0033] focus:ring-2 focus:ring-indigo-500 transition resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 mt-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transform transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddItems;
