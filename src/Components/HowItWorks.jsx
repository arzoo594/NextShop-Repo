import { UserCheck, ShoppingCart, Eye, PlusCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserCheck,
    title: "Login Securely",
    description:
      "Login using a mock authentication system. Protected routes ensure secure access.",
  },
  {
    step: "02",
    icon: ShoppingCart,
    title: "Browse Products",
    description:
      "Explore a list of products fetched from an Express.js API in real time.",
  },
  {
    step: "03",
    icon: Eye,
    title: "View Details",
    description:
      "Click on any product to see its complete details on a dedicated page.",
  },
  {
    step: "04",
    icon: PlusCircle,
    title: "Add New Item",
    description:
      "Authenticated users can add new products using a protected form.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-8  dark:bg-[#020617]">
      <div className=" mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How NextShop Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A simple step-by-step process to explore and manage products with
            ease.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl p-6
                  bg-white dark:bg-[#020617]
                  border border-gray-200 dark:border-gray-800
                  hover:shadow-xl transition"
              >
                {/* Step Number */}
                <span
                  className="absolute -top-4 -right-4 h-10 w-10 rounded-full
                  bg-indigo-600 text-white flex items-center justify-center font-bold"
                >
                  {step.step}
                </span>

                {/* Icon */}
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
                  bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300"
                >
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
