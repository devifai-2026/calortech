import React from "react";

const FooterCTA = () => {
  return (
    <section className="py-12 bg-gray-50 w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm w-full">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Subscribe to our newsletter for industry insights
              </p>
            </div>
            <div className="md:col-span-2">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 md:px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;