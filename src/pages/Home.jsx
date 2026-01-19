import { useState, useEffect, useRef } from "react";
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
  DollarSign,
  Leaf,
  Cpu,
  Battery,
  Settings,
  GitBranch,
  Package,
  HardHat,
  FlaskRound,
  FolderKanban,
} from "lucide-react";
import Contact from "./Contact";
import Projects from "./Projects";
import one from "../assets/Home/one.jpg";
import two from "../assets/Home/two.jpg";
import three from "../assets/Home/three.jpg";
import four from "../assets/Home/four.jpg";

// Background Image Slider Component for Hero Section using local images
const BackgroundImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Use local images from assets
  const images = [
    one,
    two,
    three,
    four
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentImage
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.7) contrast(1.1)",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-blue-900/40" />
    </div>
  );
};

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const slides = [
    {
      title: "CPC Plants",
      description:
        "Calcination system engineering, flue gas handling, dust control, heat recovery integration, and execution-ready documentation. ",
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef(null);

  // Smoother slide transition
  useEffect(() => {
    if (!isPaused) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
    { name: "Fabrication Support", icon: <Wrench /> },
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

  const [rightColumnIndex, setRightColumnIndex] = useState(0);

  // Right column items for auto-scrolling
  const rightColumnItems = [
    {
      title: "50 TPD CPC Plant",
      location: "Gujarat, India",
      duration: "12 Months",
      status: "Completed",
      category: "CPC Plants",
      description:
        "Complete engineering and commissioning of calcination plant",
    },
    {
      title: "Waste Heat Recovery System",
      location: "Maharashtra, India",
      duration: "8 Months",
      status: "Ongoing",
      category: "Energy Recovery",
      description: "Design and installation of WHRB for cement plant",
    },
    {
      title: "Industrial Paste Plant",
      location: "Tamil Nadu, India",
      duration: "10 Months",
      status: "Completed",
      category: "Paste Plants",
      description: "Turnkey paste plant with automation",
    },
    {
      title: "Tyre Pyrolysis Unit",
      location: "Karnataka, India",
      duration: "6 Months",
      status: "Completed",
      category: "Renewable",
      description: "Environment-friendly waste recycling plant",
    },
  ];

  // Smoother auto-scroll right column
  useEffect(() => {
    const interval = setInterval(() => {
      setRightColumnIndex((prev) => (prev + 1) % rightColumnItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [rightColumnItems.length]);

  return (
    <div className="flex flex-col min-h-screen pt-6 lg:pt-0">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative text-white py-16 md:py-24 overflow-hidden w-full min-h-screen flex items-center"
      >
        {/* Background Image Slider */}
        <BackgroundImageSlider />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch w-full">
              <div className="text-left w-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-semibold">
                      Engineering Excellence Since 2020
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Precision
                    <span className="text-white block">Engineering</span>
                    <span className="text-blue-100 text-3xl md:text-4xl block mt-2">
                      For Industrial Excellence
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-blue-50 mb-5 leading-relaxed">
                    Complete engineering solutions from concept to
                    commissioning. We bridge the gap between design and
                    execution for process and energy-intensive industries with
                    cutting-edge technology and expertise.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-3 md:mt-4 w-full">
                  <div className="bg-white/95 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-lg border border-white/20 text-center transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center justify-center">
                    <div className="inline-flex items-center justify-center bg-blue-100 rounded-full mb-3 md:mb-4">
                      <Award className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                    </div>
                    <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      100+
                    </div>
                    <div className="text-gray-600 font-semibold text-xs md:text-sm text-nowrap">
                      Projects Delivered
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-nowrap">
                      Across 15+ Countries
                    </div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-lg border border-white/20 text-center transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center justify-center">
                    <div className="inline-flex items-center justify-center bg-green-100 rounded-full mb-3 md:mb-4">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                    </div>
                    <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      50+
                    </div>
                    <div className="text-gray-600 font-semibold text-xs md:text-sm text-nowrap">
                      Happy Clients
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-nowrap">
                      95% Retention Rate
                    </div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-lg border border-white/20 text-center transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center justify-center">
                    <div className="inline-flex items-center justify-center bg-purple-100 rounded-full mb-3 md:mb-4">
                      <Globe className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
                    </div>
                    <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      15+
                    </div>
                    <div className="text-gray-600 font-semibold text-xs md:text-sm text-nowrap">
                      Countries Served
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-nowrap">
                      Global Presence
                    </div>
                  </div>

                  <div className="bg-white/95 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-lg border border-white/20 text-center transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center justify-center">
                    <div className="inline-flex items-center justify-center bg-amber-100 rounded-full mb-3 md:mb-4">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-amber-600" />
                    </div>
                    <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      24/7
                    </div>
                    <div className="text-gray-600 font-semibold text-xs md:text-sm text-nowrap">
                      Support
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-nowrap">
                      Always Available
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-full flex items-stretch">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 w-full h-full flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-2">
                      Latest Projects
                    </h3>
                  </div>

                  <div className="relative h-[400px] overflow-hidden">
                    {rightColumnItems.map((item, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-out ${
                          index === rightColumnIndex
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-8 scale-95"
                        }`}
                      >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 border-b pb-2 border-gray-200">
                          {item.title}
                        </h2>

                        <div className="space-y-2 mb-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <p className="text-base font-bold text-gray-700">
                                Location
                              </p>
                              <p className="text-xs text-gray-600">
                                {item.location}
                              </p>
                            </div>
                            <div>
                              <p className="text-blue-700 bg-blue-50 rounded-3xl py-1.5 px-3 font-bold text-sm border border-blue-100">
                                {item.category}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <p className="text-base font-bold text-gray-700">
                              Duration
                            </p>
                            <p className="text-xs text-gray-600">
                              {item.duration}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <p className="text-base font-bold text-gray-700">
                              Status
                            </p>
                            <p className="text-xs text-gray-600">
                              {item.status}
                            </p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="bg-blue-50/80 rounded-2xl p-6 mb-6">
                            <h4 className="text-lg font-bold text-gray-900 mb-3">
                              Project Overview
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              {item.description}
                            </p>
                          </div>

                          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            Request Consultation
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation dots for right column */}
                  <div className="flex justify-center gap-2 mt-4">
                    {rightColumnItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setRightColumnIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === rightColumnIndex
                            ? "bg-blue-600 w-6"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg hidden md:block animate-pulse-slow">
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg hidden md:block animate-pulse-slow">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Our Process */}
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

      {/* Expertise Section */}
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

      {/* Recent Projects */}
      <section className="relative py-16 w-full overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10 w-full">
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
                className="group bg-white rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 w-full"
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
                    <span className="text-xs md:text-sm">
                      {project.location}
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs md:text-sm font-medium text-blue-600">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium text-xs md:text-sm group">
                    View Case Study
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <FolderKanban className="w-4 h-4 md:w-5 md:h-5" />
              View All Projects
            </button>
          </div>
        </div>
      </section>

{/* Modern Testimonial Slider */}
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

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>

      <section id="projects">
        <Projects></Projects>
      </section>

      <section id="contact">
        <Contact></Contact>
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
                <h3 className="font-bold text-base md:text-lg mb-2">
                  Email Us
                </h3>
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
              <button className="bg-white hover:bg-gray-100 text-blue-700 px-6 md:px-12 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-3 group">
                <span className="text-sm md:text-base">
                  Request Free Consultation
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-12 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-3 group"
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
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
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