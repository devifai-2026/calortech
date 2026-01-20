import React, { useState, useEffect } from "react";
import {
  CheckCircle,
} from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Calor Tech delivered exceptional engineering solutions for our CPC plant. Their attention to detail and execution capabilities are remarkable.",
      author: "Rajesh Kumar",
      company: "ABC Manufacturing Ltd.",
      role: "Plant Manager",
      rating: 5,
      project: "CPC Plant Expansion",
    },
    {
      quote:
        "The waste heat recovery system designed by Calor Tech has improved our plant efficiency by 25%. Their technical expertise is outstanding.",
      author: "Priya Sharma",
      company: "XYZ Energy Solutions",
      role: "Operations Director",
      rating: 5,
      project: "WHRB Installation",
    },
    {
      quote:
        "From design to commissioning, Calor Tech provided seamless support. Their engineering-led approach made all the difference.",
      author: "Amit Patel",
      company: "Global Industrial Corp",
      role: "Project Head",
      rating: 5,
      project: "Complete Plant Engineering",
    },
    {
      quote:
        "Excellent project management and timely delivery. The team was professional and technically competent throughout.",
      author: "Sneha Reddy",
      company: "Industrial Solutions Inc.",
      role: "CEO",
      rating: 5,
      project: "Turnkey Project",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-rotation for testimonials with smoother transition
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative py-5 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it - hear from some of our amazing clients
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <div
                      className={`bg-white rounded-3xl shadow-2xl transition-all duration-500 ${
                        activeIndex === index
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-50"
                      }`}
                      style={{ maxHeight: '600px', height: '600px' }}
                    >
                      {/* Testimonial Content with vertical scroll */}
                      <div className="h-full flex flex-col">
                        {/* Fixed Header */}
                        <div className="flex-shrink-0 p-6 md:p-8 border-b border-gray-100">
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                                {testimonial.author
                                  .split(" ")
                                  .map((name) => name[0])
                                  .join("")}
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 text-2xl mb-1">
                                  {testimonial.author}
                                </div>
                                <div className="text-gray-600">
                                  {testimonial.role}, {testimonial.company}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-col md:items-end gap-2">
                              <div className="flex items-center gap-2">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-6 h-6 ${
                                      i < testimonial.rating
                                        ? "text-amber-500 fill-current"
                                        : "text-gray-300"
                                    }`}
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                                <span className="text-gray-500 ml-2 text-lg">
                                  ({testimonial.rating}.0)
                                </span>
                              </div>
                              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span className="text-sm font-medium text-blue-700">
                                  Project: {testimonial.project}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8">
                          {/* Quote Icon */}
                          <div className="mb-6">
                            <svg
                              className="w-12 h-12 text-blue-100"
                              fill="currentColor"
                              viewBox="0 0 32 32"
                            >
                              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4z" />
                            </svg>
                          </div>

                          {/* Quote with vertical scroll if too long */}
                          <div className="mb-8">
                            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed">
                              "{testimonial.quote}"
                            </blockquote>
                          </div>

                          {/* Fixed Stats Bar at the bottom of scrollable area */}
                          <div className="mt-8 pt-8 border-t border-gray-100">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">95%</div>
                                <div className="text-gray-600 text-sm">Project Success</div>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                                <div className="text-gray-600 text-sm">Avg. Rating</div>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">98%</div>
                                <div className="text-gray-600 text-sm">On-Time Delivery</div>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">99%</div>
                                <div className="text-gray-600 text-sm">Satisfaction</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? "w-12 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                4.9/5
              </div>
              <div className="text-gray-600">Avg. Rating</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                150+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;