import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Cpu,
  Wrench,
  HardHat,
  Settings,
} from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Understanding client requirements and project scope",
      icon: <Phone className="w-8 h-8" />,
    },
    {
      step: "02",
      title: "Design & Engineering",
      description: "Detailed engineering with 3D modeling and simulation",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      step: "03",
      title: "Fabrication Support",
      description: "Quality control and fabrication coordination",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      step: "04",
      title: "Installation",
      description: "Site installation with safety protocols",
      icon: <HardHat className="w-8 h-8" />,
    },
    {
      step: "05",
      title: "Commissioning",
      description: "System commissioning and performance testing",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      step: "06",
      title: "Support",
      description: "After-sales support and maintenance",
      icon: <Settings className="w-8 h-8" />,
    },
  ];

  return (
    <section id="process" className="relative py-16 w-full overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A systematic approach ensuring quality and timely delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg group w-full transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg">
                {step.step}
              </div>
              <div className="text-blue-600 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {step.description}
              </p>
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
                <div className="text-xs md:text-sm text-gray-500">
                  Duration: 2-4 Weeks
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;