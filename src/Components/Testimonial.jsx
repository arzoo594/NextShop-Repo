import React from "react";

const testimonials = [
  {
    name: "Rahim Hossain",
    role: "Mobile Enthusiast",
    avatar: "https://i.pravatar.cc/150?img=1",
    comment:
      "I bought my new phone from NextShop. Fast delivery and amazing service!",
  },
  {
    name: "Sonia Akter",
    role: "Student",
    avatar: "https://i.pravatar.cc/150?img=2",
    comment:
      "The mobile prices are very reasonable, and the website is super easy to use.",
  },
  {
    name: "Imran Khan",
    role: "Tech Reviewer",
    avatar: "https://i.pravatar.cc/150?img=3",
    comment:
      "NextShop’s customer support and product quality really impressed me.",
  },
];

const TestimonialSection = () => {
  return (
    <section className=" py-8  ">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
              <h3 className="font-bold text-lg">{testimonial.name}</h3>
              <span className="text-sm text-gray-500">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
