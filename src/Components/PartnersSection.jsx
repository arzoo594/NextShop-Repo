import React from "react";

const brands = [
  {
    id: 1,
    name: "Apple",
    logo: "https://i.ibb.co.com/7NnGZ62M/image.png",
  },
  {
    id: 2,
    name: "Samsung",
    logo: "https://i.ibb.co.com/6cYjdGdC/image.png",
  },
  {
    id: 3,
    name: "Xiaomi",
    logo: "https://i.ibb.co.com/xKKYYpJp/image.png",
  },
  {
    id: 4,
    name: "OnePlus",
    logo: "https://i.ibb.co.com/nM7NTPQC/image.png",
  },
  {
    id: 5,
    name: "Realme",
    logo: "https://i.ibb.co.com/C36cvFVP/image.png",
  },
];

const BrandsSection = () => {
  return (
    <section className="bg-white py-8">
      <div className=" mx-auto  text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Our Trusted Brands
        </h2>
        <p className="text-gray-600 mb-12">
          We only work with top mobile brands to ensure quality and reliability.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand) => (
            <div key={brand.id} className="w-32">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-15 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
