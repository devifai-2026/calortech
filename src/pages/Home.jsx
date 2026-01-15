import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Cog,
  Factory,
  Wrench,
  Zap,
  Users,
  Award,
  TrendingUp,
  Shield,
  Quote,
  Building,
  Globe,
  Target,
  Thermometer,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  BarChart,
  Heart,
  Leaf,
  Cloud,
  Cpu,
  Battery,
  Settings,
  GitBranch,
  Layers,
  Package,
  Truck,
  HardHat,
  AlertCircle,
  DollarSign,
  ThumbsUp,
  Star,
  Home as HomeIcon,
  Lightbulb,
  Database,
  Server,
  Wind,
  Droplets,
  FlaskRound,
  FolderKanban,
} from "lucide-react";

const Home = () => {
  const slides = [
    {
      title: "CPC Plants",
      description:
        "Calcination system engineering, flue gas handling, dust control, heat recovery integration, and execution-ready documentation.",
      tags: ["Thermal", "Process", "Structures"],
      icon: <Factory className="w-10 h-10" />,
      color: "from-blue-600 to-blue-800",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
    },
    {
      title: "ECA Plants",
      description:
        "Furnace and utilities engineering including cooling systems, off-gas ducting, auxiliaries, and plant execution support.",
      tags: ["High Temperature", "Utilities", "Reliability"],
      icon: <Zap className="w-10 h-10" />,
      color: "from-indigo-600 to-indigo-800",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
    },
    {
      title: "Paste Plants",
      description:
        "Batching, mixing/heating integration, TFH interface, material handling coordination, and constructible layouts.",
      tags: ["Paste Plant", "TFH", "Integration"],
      icon: <Cog className="w-10 h-10" />,
      color: "from-emerald-600 to-emerald-800",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
    },
    {
      title: "WHRB / HRU",
      description:
        "Waste heat recovery integration with ducting, dampers, stacks, expansion joints, and thermal fluid/steam integration support.",
      tags: ["Energy Recovery", "Ducting", "Performance"],
      icon: <Wrench className="w-10 h-10" />,
      color: "from-amber-600 to-amber-800",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
    },
    {
      title: "Tyre Pyrolysis",
      description:
        "Complete pyrolysis plant design including reactor systems, oil condensation, gas cleaning, and carbon black handling.",
      tags: ["Renewable", "Pyrolysis", "Recycling"],
      icon: <FlaskRound className="w-10 h-10" />,
      color: "from-purple-600 to-purple-800",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
  };

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
    { name: "Fabrication Support" },
    { name: "Commissioning", icon: <GitBranch /> },
  ];

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

  const partners = [
    { name: "ABB", logo: "ABB", category: "Automation" },
    { name: "Siemens", logo: "Siemens", category: "Technology" },
    { name: "Thermax", logo: "Thermax", category: "Energy" },
    { name: "L&T", logo: "L&T", category: "Engineering" },
    { name: "BHEL", logo: "BHEL", category: "Power" },
    { name: "Honeywell", logo: "Honeywell", category: "Automation" },
    { name: "Schneider", logo: "Schneider", category: "Electrical" },
    { name: "Emerson", logo: "Emerson", category: "Automation" },
  ];

  const projects = [
    {
      title: "50 TPD CPC Plant",
      location: "Gujarat, India",
      duration: "12 Months",
      description:
        "Complete engineering and commissioning of calcination plant",
      status: "Completed",
      category: "CPC Plants",
    },
    {
      title: "Waste Heat Recovery System",
      location: "Maharashtra, India",
      duration: "8 Months",
      description: "Design and installation of WHRB for cement plant",
      status: "Ongoing",
      category: "Energy Recovery",
    },
    {
      title: "Industrial Paste Plant",
      location: "Tamil Nadu, India",
      duration: "10 Months",
      description: "Turnkey paste plant with automation",
      status: "Completed",
      category: "Paste Plants",
    },
    {
      title: "Tyre Pyrolysis Unit",
      location: "Karnataka, India",
      duration: "6 Months",
      description: "Environment-friendly waste recycling plant",
      status: "Completed",
      category: "Renewable",
    },
  ];

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

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="flex flex-col min-h-screen pt-6 lg:pt-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900 py-16 md:py-24 fade-in overflow-hidden w-full">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div className="text-left w-full">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-semibold">
                    Engineering Excellence Since 2020
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Precision
                  <span className="text-blue-700 block">Engineering</span>
                  <span className="text-gray-600 text-3xl md:text-4xl block mt-2">
                    For Industrial Excellence
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                  Complete engineering solutions from concept to commissioning.
                  We bridge the gap between design and execution for process and
                  energy-intensive industries with cutting-edge technology and
                  expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link
                    to="/projects"
                    className="border-2 border-blue-600 hover:border-blue-700 text-blue-700 hover:text-blue-800 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-50 flex items-center justify-center gap-3 group"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="relative w-full">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-1 shadow-2xl w-full">
                  <div className="bg-white rounded-xl p-6 w-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-blue-100 rounded-xl">
                        <Factory className="w-12 h-12 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Latest Project
                        </h3>
                        <p className="text-gray-600">50 TPD CPC Plant</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Location</span>
                        <span className="font-semibold">Gujarat, India</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-semibold">12 Months</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Status</span>
                        <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-12 md:mt-20 w-full">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover-lift transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 w-full">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mb-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  100+
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  Projects Delivered
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">
                  Across 15+ Countries
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover-lift transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 w-full">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full mb-4">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  50+
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  Happy Clients
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">
                  95% Retention Rate
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover-lift transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 w-full">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full mb-4">
                  <Globe className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  15+
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  Countries Served
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">
                  Global Presence
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover-lift transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 w-full">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full mb-4">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  24/7
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  Support
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">
                  Always Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Slider - Enhanced */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 w-full overflow-hidden">
        <div className="container mx-auto px-4 w-full">
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
              className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 fade-in w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"></div>
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div
                      className={`bg-gradient-to-r ${slide.color} text-white p-8 md:p-12 h-full`}
                    >
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="flex items-center gap-4 md:gap-6 mb-8">
                            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
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
                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium"
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
                          <Link
                            to={`/services/${slide.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                        <div className="relative">
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
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
                className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Previous slide"
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
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 w-full">
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
                className="group bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm hover-lift hover:shadow-xl transition-all duration-300 w-full"
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
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-blue-700 hover:text-blue-800 font-semibold text-lg group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white w-full overflow-hidden">
        <div className="container mx-auto px-4 w-full">
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
                className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg hover-lift group w-full"
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

      {/* Expertise Section */}
      <section className="py-16 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 w-full">
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
                className="group bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg hover-lift transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 w-full"
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
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm">
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

      {/* Recent Projects */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white w-full overflow-hidden">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Successfully delivered projects across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 w-full"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-gray-500 text-xs md:text-sm">
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs md:text-sm">{project.location}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs md:text-sm font-medium text-blue-600">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    to={`/projects/${project.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium text-xs md:text-sm group"
                  >
                    View Case Study
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FolderKanban className="w-4 h-4 md:w-5 md:h-5" />
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What industry leaders say about our work
            </p>
          </div>

          <div className="max-w-6xl mx-auto w-full">
            <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl w-full">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <Quote className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mb-8 opacity-20" />
                  <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-bold text-gray-900 text-lg md:text-xl">
                        {testimonials[activeTestimonial].author}
                      </div>
                      <div className="text-gray-600 text-sm md:text-base">
                        {testimonials[activeTestimonial].role},{" "}
                        {testimonials[activeTestimonial].company}
                      </div>
                      <div className="text-xs md:text-sm text-blue-600 font-medium mt-1">
                        Project: {testimonials[activeTestimonial].project}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {testimonials.map((testimonial, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`p-4 md:p-6 rounded-xl text-left transition-all duration-300 w-full ${
                          activeTestimonial === index
                            ? "bg-white shadow-lg border-2 border-blue-500"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 md:w-4 md:h-4 ${
                                i < testimonial.rating
                                  ? "text-yellow-500 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm line-clamp-3 mb-3">
                          "{testimonial.quote}"
                        </p>
                        <div className="text-sm font-medium text-gray-900">
                          {testimonial.author}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8 md:mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === index
                        ? "bg-blue-700 w-6 md:w-10"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 w-full overflow-hidden">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 mb-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white p-4 md:p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm hover-lift transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center w-full"
              >
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                  {partner.logo}
                </div>
                <div className="mt-2 md:mt-4 text-center">
                  <div className="font-semibold text-gray-900 text-xs md:text-sm">
                    {partner.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {partner.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              We collaborate with industry leaders to deliver innovative
              engineering solutions that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden w-full">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Ready to Transform Your Project?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with us for innovative engineering solutions that deliver
              exceptional results and maximize ROI.
            </p>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                <Mail className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-4" />
                <h3 className="font-bold text-base md:text-lg mb-2">Email Us</h3>
                <a
                  href="mailto:info@calortech.com"
                  className="text-blue-100 hover:text-white text-sm md:text-base"
                >
                  info@calortech.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                <Phone className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-4" />
                <h3 className="font-bold text-base md:text-lg mb-2">Call Us</h3>
                <a
                  href="tel:+911234567890"
                  className="text-blue-100 hover:text-white text-sm md:text-base"
                >
                  +91 123 456 7890
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                <Calendar className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-4" />
                <h3 className="font-bold text-base md:text-lg mb-2">
                  Schedule Meeting
                </h3>
                <p className="text-blue-100 text-sm md:text-base">
                  Book a consultation
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-blue-700 px-6 md:px-12 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
              >
                <span className="text-sm md:text-base">Request Free Consultation</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-12 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
              >
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">WhatsApp Inquiry</span>
              </a>
            </div>

            <p className="text-blue-200 mt-6 md:mt-8 text-xs md:text-sm">
              Response within 24 hours | Free initial consultation
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
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
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base"
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
    </div>
  );
};

export default Home;