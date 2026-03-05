import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Cog,
  Factory,
  Wrench,
  Zap,
  ChevronRight,
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
      {/* Our Specialized Solutions – Card Grid */}
      <section id="services" className="relative py-16 w-full overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored engineering solutions for diverse industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedSolutions.map((solution, index) => (
              <div
                key={solution.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>

                <div className="p-6">
                  {/* Icon and Category */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${solution.color} text-white`}>
                      {solution.icon}
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                      {solution.category}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(solution.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="text-xs text-gray-400">
                      {index + 1}/{specializedSolutions.length}
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>
                )}
              </div>
            ))}
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