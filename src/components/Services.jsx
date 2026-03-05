import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Cog,
  Factory,
  Wrench,
  Zap,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Thermometer,
  FlaskRound,
  Settings,
  Battery,
  Building,
  Package,
  GitBranch,
  Boxes,
  UtensilsCrossed,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const specializedSolutions = [
    {
      id: "cpc",
      title: "CPC Plants",
      description:
        "Calcination system engineering, flue gas handling, dust control, heat recovery integration, and execution-ready documentation.",
      icon: <Factory className="w-8 h-8" />,
      category: "Thermal Processing",
      features: [
        "Calcination System Design",
        "Flue Gas Handling",
        "Heat Recovery Integration",
      ],
      stats: { projects: 5, efficiency: "95%", capacity: "50-200 TPD" },
      color: "from-blue-600 to-blue-800",
    },
    {
      id: "eca",
      title: "ECA Plants",
      description:
        "Furnace and utilities engineering including cooling systems, off-gas ducting, auxiliaries, and plant execution support.",
      icon: <Zap className="w-8 h-8" />,
      category: "High Temperature",
      features: [
        "Furnace Engineering",
        "Cooling Systems",
        "Off-gas Ducting",
      ],
      stats: { projects: 1, efficiency: "92%", capacity: "Custom" },
      color: "from-indigo-600 to-indigo-800",
    },
    {
      id: "paste",
      title: "Paste Plants",
      description:
        "Batching, mixing/heating integration, TFH interface, material handling coordination, and constructible layouts.",
      icon: <Cog className="w-8 h-8" />,
      category: "Processing",
      features: [
        "Batching Systems",
        "Mixing Integration",
        "TFH Interface",
      ],
      stats: { projects: 10, efficiency: "98%", accuracy: "99.5%" },
      color: "from-emerald-600 to-emerald-800",
    },
    {
      id: "whrb",
      title: "WHRB / HRU Systems",
      description:
        "Waste heat recovery integration with ducting, dampers, stacks, expansion joints, and thermal fluid/steam integration support.",
      icon: <Wrench className="w-8 h-8" />,
      category: "Energy Recovery",
      features: [
        "Heat Recovery Design",
        "Ducting Systems",
        "Expansion Joints",
      ],
      stats: { projects: 5, efficiency: "85%", savings: "Up to 30%" },
      color: "from-amber-600 to-amber-800",
    },
    {
      id: "pyrolysis",
      title: "Tyre Pyrolysis",
      description:
        "Complete pyrolysis plant design including reactor systems, oil condensation, gas cleaning, and carbon black handling.",
      icon: <FlaskRound className="w-8 h-8" />,
      category: "Renewable",
      features: [
        "Reactor Design",
        "Oil Condensation",
        "Gas Cleaning",
      ],
      stats: { projects: "Upcoming", efficiency: "--", capacity: "50–100 TPD" },
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
    { name: "Energy Systems", icon: <Battery /> },
    { name: "Process Optimization", icon: <Settings /> },
    { name: "Detail Engineering", icon: <Wrench /> },
    { name: "Commissioning", icon: <GitBranch /> },
    { name: "Material Handling", icon: <Boxes /> },
    { name: "Food Processing", icon: <UtensilsCrossed /> },
  ];

  // Function to scroll to contact section
  const scrollToContact = (e) => {
    if (e) e.preventDefault();

    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const navbarHeight = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        window.history.pushState(null, "", "#contact");
      }
    } else {
      navigate("/#contact");
    }
  };

  return (
    <>
      {/* Our Specialized Solutions – Slider */}
      <section id="services" className="relative py-20 w-full overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">
              Our Specialized Solutions
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Tailored engineering solutions for diverse industrial applications
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto group">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{
                el: '.swiper-pagination-custom',
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="rounded-[40px] overflow-hidden shadow-2xl"
            >
              {specializedSolutions.map((solution, index) => (
                <SwiperSlide key={solution.id}>
                  <div className={`bg-gradient-to-br ${solution.color} text-white p-8 md:p-14 rounded-[40px] flex flex-col md:flex-row gap-8 items-center min-h-[450px]`}>
                    {/* Left Content */}
                    <div className="flex-1 space-y-8">
                      <div className="flex items-center gap-6">
                        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                          {React.cloneElement(solution.icon, { className: "w-8 h-8 text-white" })}
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-3xl md:text-4xl font-bold">{solution.title}</h3>
                          <div className="flex flex-wrap gap-2">
                             <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                                {solution.category}
                              </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-white/90 text-lg leading-relaxed max-w-xl">
                        {solution.description}
                      </p>

                      <button 
                        onClick={() => scrollToContact()}
                        className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors w-fit shadow-lg"
                      >
                        Learn More <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Right Content: Key Features */}
                    <div className="w-full md:w-[400px]">
                      <div className="bg-black/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                        <h4 className="text-xl font-bold mb-6">Key Features</h4>
                        <ul className="space-y-4">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-4">
                              <div className="bg-emerald-500/20 p-1 rounded-full">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                              </div>
                              <span className="text-white/90 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Controls */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer bg-white shadow-sm">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="swiper-pagination-custom"></div>
              <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all cursor-pointer bg-white shadow-sm">
                <ChevronRight className="w-6 h-6" />
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
                    <button
                      onClick={scrollToContact}
                      className="text-xs md:text-sm text-gray-500 mt-1 hover:text-blue-700 transition-colors"
                    >
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 text-blue-700 hover:text-blue-800 font-semibold text-lg group transition-all duration-300"
            >
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