import React, { useState } from "react";
import {
  Factory,
  Zap,
  Cog,
  FlaskRound,
  Thermometer,
  Package,
  Battery,
  Settings,
  GitBranch,
  Shield,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  BarChart3,
  Cpu,
  HardHat,
  GitPullRequest,
  Sparkles,
} from "lucide-react";

const Solutions = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // Optional: Add smooth scrolling behavior
      contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };
  const solutions = [
    {
      id: "cpc",
      title: "CPC Plants",
      description: "Complete calcination plant engineering solutions with advanced thermal processing",
      icon: <Factory className="w-8 h-8" />,
      category: "Thermal Processing",
      features: [
        "Calcination System Design",
        "Flue Gas Handling",
        "Heat Recovery Integration",
        "Dust Control Systems",
        "Thermal Analysis"
      ],
      stats: { projects: 5, efficiency: "95%", capacity: "50-200 TPD" },
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "eca",
      title: "ECA Plants",
      description: "Energy-efficient anode baking furnace systems with optimized utilities",
      icon: <Zap className="w-8 h-8" />,
      category: "Thermal Processing",
      features: [
        "Furnace Engineering",
        "Cooling Systems",
        "Off-gas Ducting",
        "Auxiliary Systems",
        "Reliability Analysis"
      ],
      stats: { projects: 1, efficiency: "92%", capacity: "Custom" },
      color: "from-indigo-600 to-indigo-800"
    },
    {
      id: "paste",
      title: "Paste Plants",
      description: "Advanced paste plant systems with precise batching and mixing",
      icon: <Cog className="w-8 h-8" />,
      category: "Processing",
      features: [
        "Batching Systems",
        "Mixing Integration",
        "TFH Interface",
        "Material Handling",
        "Automation"
      ],
      stats: { projects: 10, efficiency: "98%", accuracy: "99.5%" },
      color: "from-emerald-600 to-emerald-800"
    },
    {
      id: "material-handling",
      title: "Material Handling",
      description: "Advanced bulk material handling and conveying systems",
      icon: <GitBranch className="w-8 h-8" />,
      category: "Processing",
      features: [
        "Conveyor Systems",
        "Silo & Storage",
        "Feeding Systems",
        "Pneumatic Conveying",
        "Load-out Stations"
      ],
      stats: { projects: 20, capacity: "Up to 1000 TPH", reliability: "99.9%" },
      color: "from-slate-600 to-slate-800"
    },
    {
      id: "food-processing",
      title: "Food Processing",
      description: "Hygienic and efficient systems for food industry applications",
      icon: <Sparkles className="w-8 h-8" />,
      category: "Processing",
      features: [
        "Hygienic Design",
        "Processing Lines",
        "Thermal Treatment",
        "Automated Packaging",
        "Quality Control"
      ],
      stats: { projects: "New", compliance: "FDA/HACCP", efficiency: "98%" },
      color: "from-orange-600 to-orange-800"
    },
    {
      id: "whrb",
      title: "WHRB / HRU Systems",
      description: "Waste heat recovery solutions for energy conservation",
      icon: <Thermometer className="w-8 h-8" />,
      category: "Energy Recovery",
      features: [
        "Heat Recovery Design",
        "Ducting Systems",
        "Expansion Joints",
        "Steam Integration",
        "Performance Analysis"
      ],
      stats: { projects: 5, efficiency: "85%", savings: "Up to 30%" },
      color: "from-amber-600 to-amber-800"
    },
    {
      id: "energy",
      title: "Energy Systems",
      description: "Integrated energy management and optimization",
      icon: <Battery className="w-8 h-8" />,
      category: "Energy Recovery",
      features: [
        "Energy Audit",
        "System Optimization",
        "Renewable Integration",
        "Grid Management",
        "ROI Analysis"
      ],
      stats: { projects: "Upcoming", savings: "--", payback: "--" },
      color: "from-green-600 to-green-800"
    },
    {
      id: "pyrolysis",
      title: "Tyre Pyrolysis",
      description: "Sustainable waste-to-energy conversion systems",
      icon: <FlaskRound className="w-8 h-8" />,
      category: "Renewable",
      features: [
        "Reactor Design",
        "Oil Condensation",
        "Gas Cleaning",
        "Carbon Black Handling",
        "Environmental Compliance"
      ],
      stats: { projects: "Upcoming", efficiency: "--", capacity: "50–100 TPD" },
      color: "from-purple-600 to-purple-800"
    },
    {
      id: "pressure",
      title: "Pressure Vessels",
      description: "Custom pressure vessel design and fabrication support",
      icon: <Package className="w-8 h-8" />,
      category: "Equipment",
      features: [
        "ASME Compliance",
        "Stress Analysis",
        "Material Selection",
        "Fabrication Support",
        "Testing & Inspection"
      ],
      stats: { projects: 10, certification: "ASME U", pressure: "Up to 300 Bar" },
      color: "from-red-600 to-red-800"
    },
    {
      id: "automation",
      title: "Automation",
      description: "Smart control systems and industrial automation solutions",
      icon: <Settings className="w-8 h-8" />,
      category: "Engineering",
      features: [
        "PLC/SCADA",
        "Control Panels",
        "IIoT Solutions"
      ],
      stats: { projects: 15, reliability: "99.9%", uptime: "24/7" },
      color: "from-cyan-600 to-cyan-800"
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="solutions" className="relative py-6 md:py-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-emerald-50/30 to-cyan-50/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-2 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Specialized Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
           Engineering to Execution 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
              Delivering Industrial Excellence.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Delivering comprehensive engineering solutions tailored to industrial needs — from concept and design to execution and commissioning.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">30+</div>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Projects Delivered</h3>
            <p className="text-sm text-gray-500">Across 15+ countries</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">10+</div>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Expert Engineers</h3>
            <p className="text-sm text-gray-500">Dedicated team</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">95%</div>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Client Satisfaction</h3>
            <p className="text-sm text-gray-500">4.9/5 average rating</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Quality Compliance</h3>
            <p className="text-sm text-gray-500">International standards</p>
          </div>
        </div>



        {/* Solutions Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Header */}
              <div className={`h-1.5 bg-gradient-to-r ${solution.color}`}></div>
              
              <div className="p-4">
                {/* Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${solution.color} text-white`}>
                    {React.cloneElement(solution.icon, { className: "w-5 h-5" })}
                  </div>
                </div>
                
                {/* Title and Description */}
                <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight">{solution.title}</h3>
                <p className="text-[11px] text-gray-600 mb-3 line-clamp-2">{solution.description}</p>
                
                {/* Quick Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="text-[10px] font-bold text-blue-600">
                    {Object.values(solution.stats)[0]} Projects
                  </div>
                  <button onClick={scrollToContact} className="text-blue-600 hover:text-blue-700 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

    
        {/* Process Overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Solution Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering innovative engineering solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
            
            {[
              { step: "01", title: "Analysis", desc: "Requirement Gathering", icon: <BarChart3 /> },
              { step: "02", title: "Design", desc: "Concept & Detailed Design", icon: <Cpu /> },
              { step: "03", title: "Execution", desc: "Fabrication & Installation", icon: <HardHat /> },
              { step: "04", title: "Support", desc: "Commissioning & Maintenance", icon: <GitPullRequest /> },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="text-blue-600 mb-3">{step.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;