import React, { useState,  useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Cog,
  Factory,
  Wrench,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Thermometer,
  FlaskRound,
  Settings,
  Battery,
  Building,
  Package,
  GitBranch,
  HardHat,
} from "lucide-react";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: "CPC Plants",
      description:
        "Calcination system engineering, flue gas handling, dust control, heat recovery integration, and execution-ready documentation.",
      tags: ["Thermal", "Process", "Structures"],
      icon: <Factory className="w-10 h-10" />,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "ECA Plants",
      description:
        "Furnace and utilities engineering including cooling systems, off-gas ducting, auxiliaries, and plant execution support.",
      tags: ["High Temperature", "Utilities", "Reliability"],
      icon: <Zap className="w-10 h-10" />,
      color: "from-indigo-600 to-indigo-800",
    },
    {
      title: "Paste Plants",
      description:
        "Batching, mixing/heating integration, TFH interface, material handling coordination, and constructible layouts.",
      tags: ["Paste Plant", "TFH", "Integration"],
      icon: <Cog className="w-10 h-10" />,
      color: "from-emerald-600 to-emerald-800",
    },
    {
      title: "WHRB / HRU",
      description:
        "Waste heat recovery integration with ducting, dampers, stacks, expansion joints, and thermal fluid/steam integration support.",
      tags: ["Energy Recovery", "Ducting", "Performance"],
      icon: <Wrench className="w-10 h-10" />,
      color: "from-amber-600 to-amber-800",
    },
    {
      title: "Tyre Pyrolysis",
      description:
        "Complete pyrolysis plant design including reactor systems, oil condensation, gas cleaning, and carbon black handling.",
      tags: ["Renewable", "Pyrolysis", "Recycling"],
      icon: <FlaskRound className="w-10 h-10" />,
      color: "from-purple-600 to-purple-800",
    },
  ];

  const services = [
    { name: "CPC Plants", icon: <Factory /> },
    { name: "ECA Plants", icon: <Zap /> },
    { name: "Paste Plants", icon: <Cog /> },
    { name: "WHRB / HRU", icon: <Wrench /> },
    { name: "Tyre Pyrolysis", icon: <FlaskRound /> },
    { name: "TFH Systems", icon: <Thermometer /> },
    { name: "Pressure Vessels", icon: <Package /> },
    { name: "Industrial Structures", icon: <Building /> },
    { name: "Energy Systems", icon: <Battery /> },
    { name: "Process Optimization", icon: <Settings /> },
    { name: "Fabrication Support", icon: <Wrench /> },
    { name: "Commissioning", icon: <GitBranch /> },
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Services Slider */}
      <section id="services" className="relative py-16 w-full overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored engineering solutions for diverse industrial applications
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative w-full">
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex transition-all duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div
                      className={`bg-gradient-to-r ${slide.color} text-white p-8 md:p-12`}
                    >
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="flex items-center gap-4 md:gap-6 mb-8">
                            <div className="p-4 bg-white/20 rounded-2xl">
                              {slide.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold">
                                {slide.title}
                              </h3>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {slide.tags.map((tag, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-white/20 rounded-full text-xs md:text-sm font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-blue-100 text-base md:text-lg mb-8 leading-relaxed">
                            {slide.description}
                          </p>
                          <button className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                        <div>
                          <div className="bg-white/10 rounded-2xl p-6">
                            <h4 className="text-xl font-bold mb-4">
                              Key Features
                            </h4>
                            <ul className="space-y-3">
                              <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-300" />
                                <span>Advanced Design Methodology</span>
                              </li>
                              <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-300" />
                                <span>Quality Assurance</span>
                              </li>
                              <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-300" />
                                <span>Timely Delivery</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <div className="flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-blue-700 w-8 md:w-10"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 w-full overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end engineering solutions across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 w-full transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">
                      {service.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      Learn more →
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-3 text-blue-700 hover:text-blue-800 font-semibold text-lg group transition-all duration-300">
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;