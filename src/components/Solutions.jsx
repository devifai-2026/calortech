import React, { useState } from "react";
import {
  Factory,
  Zap,
  Cog,
  Wrench,
  FlaskRound,
  Thermometer,
  Package,
  Building,
  Battery,
  Settings,
  GitBranch,
  CheckCircle,
  Target,
  Shield,
  TrendingUp,
  Leaf,
  DollarSign,
  Clock,
  Users,
  Award,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Cpu,
  HardHat,
  GitPullRequest,
  Sparkles,
} from "lucide-react";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("all");

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
      stats: { projects: 25, efficiency: "95%", capacity: "50-200 TPD" },
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "eca",
      title: "ECA Plants",
      description: "Energy-efficient anode baking furnace systems with optimized utilities",
      icon: <Zap className="w-8 h-8" />,
      category: "High Temperature",
      features: [
        "Furnace Engineering",
        "Cooling Systems",
        "Off-gas Ducting",
        "Auxiliary Systems",
        "Reliability Analysis"
      ],
      stats: { projects: 18, efficiency: "92%", capacity: "Custom" },
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
      stats: { projects: 32, efficiency: "98%", accuracy: "99.5%" },
      color: "from-emerald-600 to-emerald-800"
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
      stats: { projects: 45, efficiency: "85%", savings: "Up to 30%" },
      color: "from-amber-600 to-amber-800"
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
      stats: { projects: 28, efficiency: "88%", capacity: "10-50 TPD" },
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
      stats: { projects: 150, certification: "ASME U", pressure: "Up to 300 Bar" },
      color: "from-red-600 to-red-800"
    },
    {
      id: "structures",
      title: "Industrial Structures",
      description: "Robust structural solutions for industrial applications",
      icon: <Building className="w-8 h-8" />,
      category: "Structural",
      features: [
        "Steel Structures",
        "Foundation Design",
        "Seismic Analysis",
        "Wind Load Analysis",
        "Modular Design"
      ],
      stats: { projects: 85, capacity: "Unlimited", compliance: "IS 800" },
      color: "from-gray-600 to-gray-800"
    },
    {
      id: "energy",
      title: "Energy Systems",
      description: "Integrated energy management and optimization",
      icon: <Battery className="w-8 h-8" />,
      category: "Energy",
      features: [
        "Energy Audit",
        "System Optimization",
        "Renewable Integration",
        "Grid Management",
        "ROI Analysis"
      ],
      stats: { projects: 65, savings: "20-40%", payback: "2-3 Years" },
      color: "from-green-600 to-green-800"
    }
  ];

  const categories = [
    { id: "all", name: "All Solutions", icon: <Target />, count: solutions.length },
    { id: "Thermal Processing", name: "Thermal", icon: <Thermometer />, count: 2 },
    { id: "Energy Recovery", name: "Energy", icon: <Zap />, count: 2 },
    { id: "Processing", name: "Processing", icon: <Cog />, count: 2 },
    { id: "Renewable", name: "Renewable", icon: <Leaf />, count: 1 },
    { id: "Equipment", name: "Equipment", icon: <Package />, count: 1 },
  ];

  const filteredSolutions = activeTab === "all" 
    ? solutions 
    : solutions.filter(solution => solution.category === activeTab);

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
            Engineering Solutions That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
              Drive Excellence
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to your specific industrial needs. 
            From concept to commissioning, we deliver innovative, efficient, and reliable systems.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">200+</div>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Projects Delivered</h3>
            <p className="text-sm text-gray-500">Across 15+ countries</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
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

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4">{category.icon}</span>
                  {category.name}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeTab === category.id 
                    ? "bg-white/20" 
                    : "bg-gray-100"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredSolutions.map((solution, index) => (
            <div
              key={solution.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Header */}
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
                  {solution.features.slice(0, 3).map((feature, idx) => (
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
                
                {/* Action Button */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="text-xs text-gray-400">
                    {index + 1}/{filteredSolutions.length}
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  Our engineering team specializes in developing bespoke solutions 
                  tailored to your specific requirements and challenges.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Free Consultation & Analysis</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Feasibility Study & ROI Analysis</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>End-to-End Project Management</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">Request a Quote</h4>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40">
                    <option value="" className="text-gray-700">Select Solution</option>
                    {solutions.map(sol => (
                      <option key={sol.id} value={sol.id} className="text-gray-700">{sol.title}</option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-700 hover:bg-gray-100 py-3 rounded-lg font-bold transition-colors duration-300"
                  >
                    Get Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
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