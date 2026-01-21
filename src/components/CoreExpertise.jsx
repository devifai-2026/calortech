import React from "react";
import {
  CheckCircle,
  Target,
  Building,
  Thermometer,
  Shield,
  TrendingUp,
  Clock,
  DollarSign,
  Leaf,
} from "lucide-react";

const CoreExpertise = () => {
  const expertiseAreas = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Thermal Engineering",
      description:
        "Advanced thermal system design for high-temperature processes including furnaces, heaters, and heat exchangers",
      features: [
        "Heat Transfer Analysis",
        "Thermal Stress Analysis",
        "Insulation Design",
      ],
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Structural Design",
      description:
        "Robust structural solutions for industrial applications with seismic and wind load considerations",
      features: ["Steel Structures", "Foundation Design", "Seismic Analysis"],
    },
    {
      icon: <Thermometer className="w-10 h-10" />,
      title: "Process Optimization",
      description:
        "Efficiency enhancement through process optimization and energy recovery systems",
      features: [
        "Energy Audit",
        "Process Simulation",
        "Efficiency Improvement",
      ],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Safety Compliance",
      description:
        "Full compliance with international safety standards and risk assessment",
      features: ["HAZOP Study", "Safety Audit", "Compliance Certification"],
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Energy Efficiency",
      description:
        "Sustainable solutions for energy recovery and conservation with ROI analysis",
      features: [
        "Waste Heat Recovery",
        "Energy Audit",
        "Renewable Integration",
      ],
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Timely Delivery",
      description:
        "Project completion within committed timelines with milestone tracking",
      features: [
        "Project Planning",
        "Resource Management",
        "Progress Monitoring",
      ],
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Cost Optimization",
      description:
        "Value engineering and cost-effective solutions without compromising quality",
      features: ["Value Engineering", "Cost Analysis", "Budget Management"],
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Sustainable Solutions",
      description:
        "Environmentally friendly engineering solutions for green operations",
      features: [
        "Carbon Footprint",
        "Green Technology",
        "Environmental Compliance",
      ],
    },
  ];

  return (
    <section className="relative py-16 w-full overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technical excellence across multiple engineering disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg transform hover:-translate-y-2 transition-all duration-300 w-full"
            >
              <div className="text-blue-600 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                {area.description}
              </p>
              <div className="space-y-2">
                {area.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs md:text-sm"
                  >
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;