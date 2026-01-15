import {
  Factory,
  Zap,
  Cog,
  Wrench,
  Thermometer,
  Building,
  Shield,
  ChevronRight,
  Layers,
  Settings,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Factory className="w-10 h-10" />,
      title: "CPC Plants",
      description:
        "Rotary/shaft calcination systems, feeding & cooling integration, material handling, flue-gas ducting, dust collection and heat recovery integration.",
      features: [
        "Calcination Systems",
        "Flue Gas Handling",
        "Heat Recovery",
        "Material Handling",
      ],
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "ECA Plants",
      description:
        "Furnace and utilities engineering including cooling water, off-gas handling, waste heat recovery integration, and structural platforms.",
      features: [
        "Furnace Engineering",
        "Utilities Design",
        "Off-gas Systems",
        "Structural Support",
      ],
      color: "from-indigo-600 to-indigo-800",
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: "Paste Plants",
      description:
        "Raw material handling, batching and proportioning, mixing/heating and paste preparation units, TFH integration, process layout.",
      features: [
        "Batching Systems",
        "Mixing Units",
        "TFH Integration",
        "Process Layout",
      ],
      color: "from-emerald-600 to-emerald-800",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Waste Heat Recovery Systems",
      description:
        "WHRB/HRU integration including high-temperature ducting, dampers, stacks, expansion joints, steam or thermic fluid integration.",
      features: [
        "Ducting Design",
        "Stack Engineering",
        "Expansion Joints",
        "Performance Optimization",
      ],
      color: "from-amber-600 to-amber-800",
    },
    {
      icon: <Thermometer className="w-10 h-10" />,
      title: "Thermic Fluid Heating Systems",
      description:
        "Heater sizing and selection, circulation/expansion/safety systems, heat user integration, control philosophy, piping layout.",
      features: [
        "System Design",
        "Safety Systems",
        "Piping Layout",
        "Control Philosophy",
      ],
      color: "from-orange-600 to-orange-800",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Pressure Vessels & Equipment",
      description:
        "Pressure vessels, reactors and storage tanks with IS/ASME design basis support, fabrication drawings, inspection coordination.",
      features: [
        "Vessel Design",
        "Fabrication Support",
        "Inspection Coordination",
        "Code Compliance",
      ],
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Industrial Structures",
      description:
        "Industrial sheds and plant buildings, pipe racks, conveyor galleries, platforms, equipment supports, and erection/installation support.",
      features: [
        "Structural Design",
        "Pipe Racks",
        "Platforms",
        "Erection Support",
      ],
      color: "from-cyan-600 to-cyan-800",
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Tyre Pyrolysis Plants",
      description:
        "Reactor and thermal system engineering, condensation and oil recovery, gas utilization, safety systems, utilities integration.",
      features: [
        "Reactor Design",
        "Oil Recovery",
        "Safety Systems",
        "Utilities Integration",
      ],
      color: "from-rose-600 to-rose-800",
    },
  ];

  const offerings = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Engineering & Consultancy",
      description:
        "Complete engineering solutions from concept to detailed design",
      items: [
        "Process Design",
        "Mechanical Engineering",
        "Structural Design",
        "Electrical & Instrumentation",
      ],
      color: "bg-gradient-to-br from-blue-600 to-blue-700",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Turnkey & EPC-Lite",
      description:
        "End-to-end project execution with single-point responsibility",
      items: [
        "Project Management",
        "Procurement",
        "Fabrication",
        "Erection & Commissioning",
      ],
      color: "bg-gradient-to-br from-indigo-600 to-indigo-700",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Fabrication & Installation",
      description: "Quality fabrication and installation services",
      items: ["Shop Drawings", "Fabrication", "QA/QC", "Site Installation"],
      color: "bg-gradient-to-br from-emerald-600 to-emerald-700",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "Understand project requirements and objectives through detailed analysis",
      icon: "💬",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Develop comprehensive engineering solutions and documentation",
      icon: "✏️",
    },
    {
      step: "03",
      title: "Execution",
      description:
        "Coordinate fabrication, installation, and quality control processes",
      icon: "⚙️",
    },
    {
      step: "04",
      title: "Delivery",
      description:
        "Commissioning, handover, and ongoing support for project success",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen from-white to-gray-50">
      <div className="py-26">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Engineering Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to commissioning, we deliver practical design,
              execution-ready documentation, and engineering ownership till
              delivery.
            </p>
          </div>

          {/* Service Categories */}
          <div className="mb-20 fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Service Offerings
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive engineering services tailored to your needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {offerings.map((offering, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover-lift group slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white ${offering.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {offering.description}
                  </p>
                  <ul className="space-y-3">
                    {offering.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* All Services */}
          <div className="mb-20 fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Specialized Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Industry-specific engineering solutions across various sectors
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm hover-lift group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="p-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-20 border border-gray-100 shadow-sm fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach ensuring quality and timely delivery
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -z-10">
                      <div className="w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-12 text-center fade-in">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your specific project requirements and get a
              tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-700 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Request Custom Quote
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="bg-transparent hover:bg-blue-900 text-white border-2 border-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
