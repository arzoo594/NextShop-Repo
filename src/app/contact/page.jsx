import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold
            bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
          >
            Get in Touch
          </span>

          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4
            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
            bg-clip-text text-transparent"
          >
            Contact Us
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Have a question or want to provide feedback? Reach out to us using
            the form or via our contact info.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 grid gap-6">
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition">
              <MapPin
                className="text-indigo-600 dark:text-indigo-400 mb-2"
                size={28}
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                123 NextShop Street, Dhaka, Bangladesh
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition">
              <Phone
                className="text-indigo-600 dark:text-indigo-400 mb-2"
                size={28}
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                +880 17060-97788
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition">
              <Mail
                className="text-indigo-600 dark:text-indigo-400 mb-2"
                size={28}
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                arzooahmed0170609@gmail.com
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-50 dark:bg-[#0f172a] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <form className="space-y-6">
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a0033] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 outline-none transition"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a0033] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 outline-none transition"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a0033] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 outline-none transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  text-white font-semibold rounded-lg transition shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
