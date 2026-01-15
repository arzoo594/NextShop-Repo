import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative  overflow-hidden">
      {/* Background */}
      <div
        className="absolute  inset-0 bg-gradient-to-br 
        from-indigo-100 via-purple-100 to-pink-100
        dark:from-[#0f172a] dark:via-[#1a0033] dark:to-[#2d0b59]"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
        {/* Badge */}
        <span
          className="inline-block mb-4 rounded-full px-4 py-1 text-sm font-medium
          bg-indigo-100 text-indigo-700
          dark:bg-indigo-900/40 dark:text-indigo-300"
        >
          🚀 Built with Next.js App Router
        </span>

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight
          text-gray-900 dark:text-white mb-6"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            NextShop
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl
          text-gray-600 dark:text-gray-300 mb-10"
        >
          A modern e-commerce style platform where you can browse products, view
          detailed information, and manage items with secure authentication.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/items"
            className="px-7 py-3 rounded-xl font-semibold
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  text-white
              hover:bg-indigo-700 transition shadow-lg"
          >
            Browse Items
          </Link>

          <Link
            href="/contact"
            className="px-7 py-3 rounded-xl font-semibold
              border border-purple-800 dark:border-gray-600
              text-gray-800 dark:text-gray-200
              hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
