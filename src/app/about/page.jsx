import {
  Store,
  ShieldCheck,
  Layers,
  Code,
  Flag,
  Eye,
  Users,
  Cpu,
} from "lucide-react";

export default function AboutPage() {
  return (
    <section className=" bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold
            bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
          >
            About Our Project
          </span>

          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6
            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
            bg-clip-text text-transparent"
          >
            About NextShop
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Discover the purpose, vision, and technology behind{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              NextShop
            </span>
            — a modern full-stack shopping platform built with best practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-white">
              NextShop
            </span>{" "}
            is a full-stack e-commerce style application built with{" "}
            <span className="font-medium">Next.js App Router</span> and{" "}
            <span className="font-medium">Express.js API</span>. It demonstrates
            modern web development concepts such as authentication, protected
            routes, API-based data fetching, and responsive design.
          </p>

          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            This project is designed as an academic and portfolio-ready
            solution, following best practices in modern web development,
            focusing on scalability, maintainability, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="p-6 bg-gray-50 dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition">
            <Flag
              className="text-indigo-600 dark:text-indigo-400 mb-4"
              size={32}
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To provide a clean, modern, and intuitive platform for browsing
              and managing products, while demonstrating best practices in
              full-stack development.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition">
            <Eye
              className="text-indigo-600 dark:text-indigo-400 mb-4"
              size={32}
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To build an assignment/portfolio-ready project that mimics
              real-world e-commerce applications, helping students and
              developers understand modern web architecture.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          <div className="rounded-2xl p-6 text-center bg-gray-50 dark:bg-[#020617] border border-gray-200 dark:border-gray-800 hover:shadow-xl transition">
            <Store
              className="mx-auto mb-4 text-indigo-600 dark:text-indigo-400"
              size={36}
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              User-Friendly Design
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Responsive and intuitive interface for all users.
            </p>
          </div>

          <div className="rounded-2xl p-6 text-center bg-gray-50 dark:bg-[#020617] border border-gray-200 dark:border-gray-800 hover:shadow-xl transition">
            <ShieldCheck
              className="mx-auto mb-4 text-indigo-600 dark:text-indigo-400"
              size={36}
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Secure Authentication
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Protected routes and mock login system ensure security.
            </p>
          </div>

          <div className="rounded-2xl p-6 text-center bg-gray-50 dark:bg-[#020617] border border-gray-200 dark:border-gray-800 hover:shadow-xl transition">
            <Layers
              className="mx-auto mb-4 text-indigo-600 dark:text-indigo-400"
              size={36}
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Scalable Architecture
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Component-based structure using Next.js App Router.
            </p>
          </div>

          <div className="rounded-2xl p-6 text-center bg-gray-50 dark:bg-[#020617] border border-gray-200 dark:border-gray-800 hover:shadow-xl transition">
            <Code
              className="mx-auto mb-4 text-indigo-600 dark:text-indigo-400"
              size={36}
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Modern Technology
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with Next.js, Express.js, Tailwind CSS, and REST APIs.
            </p>
          </div>
        </div>

        <div className="text-center mb-20">
          <Users
            className="mx-auto mb-4 text-indigo-600 dark:text-indigo-400"
            size={36}
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Team & Contributors
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Developed by Arzoo Ahmed as a learning-focused full-stack project.
            Designed to showcase skills in Next.js, Express.js, Tailwind CSS,
            and modern web development practices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition">
            <Cpu
              className="text-indigo-600 dark:text-indigo-400 mb-2"
              size={32}
            />
            <span className="text-gray-900 dark:text-white font-medium">
              Next.js
            </span>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition">
            <Code
              className="text-indigo-600 dark:text-indigo-400 mb-2"
              size={32}
            />
            <span className="text-gray-900 dark:text-white font-medium">
              Express.js
            </span>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition">
            <Layers
              className="text-indigo-600 dark:text-indigo-400 mb-2"
              size={32}
            />
            <span className="text-gray-900 dark:text-white font-medium">
              Tailwind CSS
            </span>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition">
            <ShieldCheck
              className="text-indigo-600 dark:text-indigo-400 mb-2"
              size={32}
            />
            <span className="text-gray-900 dark:text-white font-medium">
              REST API
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
