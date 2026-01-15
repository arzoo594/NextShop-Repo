import { ShoppingBag, ShieldCheck, Zap, LayoutGrid } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Product Browsing",
    description:
      "Browse a clean and well-structured list of products fetched from an Express.js API.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Mock login system with protected routes to ensure secure access to features.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Built with Next.js App Router for optimized routing and fast page loads.",
  },
  {
    icon: LayoutGrid,
    title: "Modern UI",
    description:
      "Responsive and modern user interface with dark and light theme support.",
  },
];

export default function Features() {
  return (
    <section className="py-8 bg-white dark:bg-[#020617]">
      <div className=" mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose NextShop
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            NextShop is designed to demonstrate modern web development practices
            using Next.js and Express.js.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl p-6
                  bg-gray-50 dark:bg-[#020617]
                  border border-gray-200 dark:border-gray-800
                  hover:shadow-xl transition"
              >
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
                  bg-indigo-600 text-white group-hover:scale-110 transition"
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
