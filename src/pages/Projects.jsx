import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  ArrowRight,
  ChevronDown,
  Building,
  Zap,
  Cog,
  Factory,
  Wrench,
  FlaskRound,
  Thermometer,
  Package,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  TrendingUp,
  Award,
  ExternalLink,
  FolderKanban,
  Grid,
  List,
  X,
  Star,
  Target,
  BarChart,
  Shield,
  Leaf,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Globe,
  Menu,
} from "lucide-react";

const Projects = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const filterRef = useRef(null);
  const sortRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilterMenu(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSortMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filters = [
    {
      id: "all",
      label: "All Projects",
      count: 24,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "cpc",
      label: "CPC Plants",
      count: 8,
      icon: <Factory className="w-4 h-4" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "eca",
      label: "ECA Plants",
      count: 6,
      icon: <Zap className="w-4 h-4" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "paste",
      label: "Paste Plants",
      count: 4,
      icon: <Cog className="w-4 h-4" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "whrb",
      label: "WHRB/HRU",
      count: 3,
      icon: <Thermometer className="w-4 h-4" />,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "pyrolysis",
      label: "Tyre Pyrolysis",
      count: 2,
      icon: <FlaskRound className="w-4 h-4" />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "structures",
      label: "Structures",
      count: 5,
      icon: <Building className="w-4 h-4" />,
      color: "from-gray-600 to-gray-800",
    },
    {
      id: "completed",
      label: "Completed",
      count: 18,
      icon: <CheckCircle className="w-4 h-4" />,
      color: "from-green-500 to-teal-500",
    },
    {
      id: "ongoing",
      label: "Ongoing",
      count: 6,
      icon: <Clock className="w-4 h-4" />,
      color: "from-blue-500 to-indigo-500",
    },
  ];

  const sortOptions = [
    { id: "newest", label: "Newest First" },
    { id: "oldest", label: "Oldest First" },
    { id: "budget-high", label: "Budget: High to Low" },
    { id: "budget-low", label: "Budget: Low to High" },
    { id: "duration-short", label: "Duration: Short to Long" },
    { id: "duration-long", label: "Duration: Long to Short" },
  ];

  const projects = [
    {
      id: "cpc-plant-gujarat",
      title: "50 TPD CPC Plant",
      client: "ABC Manufacturing Ltd.",
      location: "Gujarat, India",
      duration: "12 Months",
      budget: "$2.5M",
      category: "CPC Plants",
      status: "Completed",
      completionDate: "Dec 2023",
      startDate: "Jan 2023",
      description:
        "Complete engineering and commissioning of calcination plant with waste heat recovery system.",
      tags: ["Thermal", "Process", "Structures", "Energy Recovery"],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      teamSize: 15,
      challenges: [
        "High-temperature design",
        "Dust control",
        "Energy optimization",
      ],
      achievements: ["25% energy savings", "Zero downtime", "Early completion"],
      rating: 4.9,
      clientLogo: "https://via.placeholder.com/100x40/3B82F6/FFFFFF?text=ABC",
    },
    {
      id: "waste-heat-recovery-maharashtra",
      title: "Waste Heat Recovery System",
      client: "XYZ Energy Solutions",
      location: "Maharashtra, India",
      duration: "8 Months",
      budget: "$1.2M",
      category: "WHRB/HRU",
      status: "Ongoing",
      completionDate: "Mar 2024",
      startDate: "Aug 2023",
      description:
        "Design and installation of WHRB for cement plant with thermal fluid integration.",
      tags: ["Energy Recovery", "Ducting", "Performance"],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      teamSize: 8,
      challenges: [
        "Space constraints",
        "High-temperature ducting",
        "Integration",
      ],
      achievements: ["30% efficiency improvement", "ROI < 2 years"],
      rating: 4.8,
      clientLogo: "https://via.placeholder.com/100x40/8B5CF6/FFFFFF?text=XYZ",
    },
    {
      id: "paste-plant-tamilnadu",
      title: "Industrial Paste Plant",
      client: "Global Industrial Corp",
      location: "Tamil Nadu, India",
      duration: "10 Months",
      budget: "$1.8M",
      category: "Paste Plants",
      status: "Completed",
      completionDate: "Aug 2023",
      startDate: "Nov 2022",
      description:
        "Turnkey paste plant with automation and material handling systems.",
      tags: ["Paste Plant", "Automation", "Material Handling"],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      teamSize: 12,
      challenges: [
        "Viscosity control",
        "Temperature maintenance",
        "Automation",
      ],
      achievements: [
        "99% uptime",
        "Quality consistency",
        "Automated operation",
      ],
      rating: 4.9,
      clientLogo: "https://via.placeholder.com/100x40/10B981/FFFFFF?text=GIC",
    },
    {
      id: "tyre-pyrolysis-karnataka",
      title: "Tyre Pyrolysis Plant",
      client: "Eco Recycling Solutions",
      location: "Karnataka, India",
      duration: "6 Months",
      budget: "$900K",
      category: "Tyre Pyrolysis",
      status: "Completed",
      completionDate: "May 2023",
      startDate: "Dec 2022",
      description:
        "Environment-friendly waste tyre recycling plant with oil recovery.",
      tags: ["Renewable", "Pyrolysis", "Recycling"],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      teamSize: 10,
      challenges: [
        "Emission control",
        "Safety compliance",
        "Process optimization",
      ],
      achievements: ["Zero emission", "90% recovery rate", "Carbon neutral"],
      rating: 4.7,
      clientLogo: "https://via.placeholder.com/100x40/6366F1/FFFFFF?text=ERS",
    },
    {
      id: "eca-plant-rajasthan",
      title: "ECA Furnace Installation",
      client: "Metal Works Ltd.",
      location: "Rajasthan, India",
      duration: "9 Months",
      budget: "$2.1M",
      category: "ECA Plants",
      status: "Ongoing",
      completionDate: "Jun 2024",
      startDate: "Oct 2023",
      description:
        "High-temperature furnace installation with cooling systems and auxiliaries.",
      tags: ["High Temperature", "Utilities", "Reliability"],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      teamSize: 14,
      challenges: ["Thermal stress", "Cooling system design", "Safety"],
      achievements: ["Reduced energy consumption", "Improved reliability"],
      rating: 4.8,
      clientLogo: "https://via.placeholder.com/100x40/EC4899/FFFFFF?text=MWL",
    },
    {
      id: "industrial-structure-mumbai",
      title: "Industrial Structure Design",
      client: "Infra Builders Inc.",
      location: "Mumbai, India",
      duration: "4 Months",
      budget: "$600K",
      category: "Structures",
      status: "Completed",
      completionDate: "Feb 2023",
      startDate: "Nov 2022",
      description:
        "Structural design for industrial plant with seismic considerations.",
      tags: ["Structural", "Seismic", "Design"],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      teamSize: 6,
      challenges: ["Seismic zone", "Wind loads", "Complex geometry"],
      achievements: ["Optimal design", "Cost savings 15%", "Quick approval"],
      rating: 4.9,
      clientLogo: "https://via.placeholder.com/100x40/6B7280/FFFFFF?text=IBI",
    },
    {
      id: "pressure-vessel-pune",
      title: "Pressure Vessel Fabrication",
      client: "Chemical Process Ltd.",
      location: "Pune, India",
      duration: "3 Months",
      budget: "$450K",
      category: "Pressure Vessels",
      status: "Completed",
      completionDate: "Nov 2022",
      startDate: "Sep 2022",
      description:
        "Design and fabrication of high-pressure vessels for chemical processing.",
      tags: ["Pressure Vessel", "Fabrication", "ASME"],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      teamSize: 8,
      challenges: ["High pressure", "Material selection", "Quality control"],
      achievements: ["ASME certified", "Zero defects", "On-time delivery"],
      rating: 4.8,
      clientLogo: "https://via.placeholder.com/100x40/F59E0B/FFFFFF?text=CPL",
    },
    {
      id: "turbine-plant-hyderabad",
      title: "Turbine Installation Project",
      client: "Power Generation Corp",
      location: "Hyderabad, India",
      duration: "14 Months",
      budget: "$3.5M",
      category: "Energy Systems",
      status: "Ongoing",
      completionDate: "Dec 2024",
      startDate: "Nov 2023",
      description:
        "Complete turbine installation with auxiliaries and control systems.",
      tags: ["Turbine", "Power", "Control Systems"],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      teamSize: 20,
      challenges: ["Large equipment", "Alignment precision", "Commissioning"],
      achievements: [
        "Perfect alignment",
        "Vibration free",
        "Efficient operation",
      ],
      rating: 4.9,
      clientLogo: "https://via.placeholder.com/100x40/EF4444/FFFFFF?text=PGC",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      selectedFilter === "all" ||
      project.category.toLowerCase().includes(selectedFilter) ||
      project.status.toLowerCase().includes(selectedFilter);

    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.startDate) - new Date(a.startDate);
      case "oldest":
        return new Date(a.startDate) - new Date(b.startDate);
      case "budget-high":
        return (
          parseFloat(b.budget.replace(/[^0-9.]/g, "")) -
          parseFloat(a.budget.replace(/[^0-9.]/g, ""))
        );
      case "budget-low":
        return (
          parseFloat(a.budget.replace(/[^0-9.]/g, "")) -
          parseFloat(b.budget.replace(/[^0-9.]/g, ""))
        );
      case "duration-short":
        return parseInt(a.duration) - parseInt(b.duration);
      case "duration-long":
        return parseInt(b.duration) - parseInt(a.duration);
      default:
        return 0;
    }
  });

  const stats = {
    totalProjects: 24,
    completed: 18,
    ongoing: 6,
    totalBudget: "$45M",
    countries: 8,
    clientSatisfaction: "98%",
    avgRating: "4.8",
    teamSize: "75+",
  };

  // Quick filter chips
  const quickFilters = [
    {
      id: "energy",
      label: "Energy Projects",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      id: "completed",
      label: "Recently Completed",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      id: "large",
      label: "Large Scale",
      icon: <Building className="w-4 h-4" />,
    },
    {
      id: "budget",
      label: "Under $1M",
      icon: <DollarSign className="w-4 h-4" />,
    },
  ];

  const handleQuickFilter = (type) => {
    switch (type) {
      case "energy":
        setSelectedFilter("whrb");
        break;
      case "completed":
        setSelectedFilter("completed");
        break;
      case "large":
        setSearchQuery("50 TPD");
        break;
      case "budget":
        setSearchQuery("under");
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 overflow-x-hidden pt-10 lg:pt-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-12 md:py-20 lg:py-28 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-white/10 opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

        <div className="w-full max-w-full px-4 relative z-10">
          <div className="w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              <div className="lg:w-2/3 w-full">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full mb-6 md:mb-8 border border-white/20">
                  <FolderKanban className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-xs md:text-sm font-semibold">
                    Project Portfolio
                  </span>
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  Engineering
                  <span className="block text-blue-200 mt-1 md:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Excellence Showcase
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-10 max-w-full leading-relaxed">
                  Discover our portfolio of innovative industrial projects where
                  precision engineering meets successful execution.
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Award className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold">
                        {stats.avgRating}/5
                      </div>
                      <div className="text-blue-200 text-xs md:text-sm">
                        Avg. Rating
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Users className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold">
                        {stats.teamSize}
                      </div>
                      <div className="text-blue-200 text-xs md:text-sm">
                        Expert Team
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Globe className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold">
                        {stats.countries}
                      </div>
                      <div className="text-blue-200 text-xs md:text-sm">
                        Countries
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero illustration */}
              <div className="lg:w-1/3 w-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20">
                  <div className="text-center mb-4 md:mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mb-3 md:mb-4">
                      <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      Project Success
                    </h3>
                    <p className="text-blue-200 text-sm md:text-base">
                      98% Client Satisfaction
                    </p>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200 text-sm md:text-base">
                        On-time Delivery
                      </span>
                      <span className="font-bold text-sm md:text-base">96%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200 text-sm md:text-base">
                        Budget Adherence
                      </span>
                      <span className="font-bold text-sm md:text-base">94%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200 text-sm md:text-base">
                        Quality Score
                      </span>
                      <span className="font-bold text-sm md:text-base">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 md:py-12 bg-white border-y border-gray-100">
        <div className="w-full max-w-full px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 w-full mx-auto">
            {Object.entries(stats).map(([key, value]) => (
              <div
                key={key}
                className="bg-gradient-to-br from-white to-gray-50 p-3 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-sm text-center hover-lift group"
              >
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                  {value}
                </div>
                <div className="text-gray-600 text-xs md:text-sm capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden bg-white border-b border-gray-200">
        <div className="w-full max-w-full px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-medium"
            >
              <Filter className="w-5 h-5" />
              <span>Filters & Sort</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {sortedProjects.length} projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Panel */}
      {showMobileFilters && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowMobileFilters(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Filters & Sort</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100vh-120px)]">
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Sort Options */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        setShowMobileFilters(false);
                      }}
                      className={`w-full px-4 py-3 text-left rounded-lg transition-colors ${
                        sortBy === option.id
                          ? "bg-blue-50 text-blue-700 border-2 border-blue-500"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.label}</span>
                        {sortBy === option.id && (
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Filters */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quick Filters
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {quickFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => {
                        handleQuickFilter(filter.id);
                        setShowMobileFilters(false);
                      }}
                      className="flex flex-col items-center justify-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200"
                    >
                      {filter.icon}
                      <span className="text-xs text-gray-700 mt-1 text-center">
                        {filter.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("all");
                  setShowMobileFilters(false);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-semibold transition-all"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Controls Section */}
      <section className="py-6 md:py-8 bg-white/50 backdrop-blur-sm border-b border-gray-200 hidden md:block">
        <div className="w-full max-w-full px-4">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center justify-between">
            {/* Search and Quick Filters */}
            <div className="flex-1 w-full">
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects, technologies, clients..."
                  className="w-full pl-12 pr-4 py-3 md:py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="text-sm text-gray-600 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Quick filters:
                </span>
                {quickFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => handleQuickFilter(filter.id)}
                    className="inline-flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-colors"
                  >
                    {filter.icon}
                    <span className="hidden sm:inline">{filter.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* View Toggle */}
              <div className="flex items-center gap-1 md:gap-2 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-white shadow-lg text-blue-600"
                      : "hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  <Grid className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-white shadow-lg text-blue-600"
                      : "hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  <List className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative" ref={sortRef}>
                <button
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="flex items-center gap-2 bg-white border border-gray-300 hover:border-blue-500 px-3 md:px-4 py-2.5 md:py-3 rounded-xl transition-colors shadow-sm"
                >
                  <BarChart className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">
                    Sort: {sortOptions.find((s) => s.id === sortBy)?.label}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      showSortMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showSortMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 animate-fade-in">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSortBy(option.id);
                          setShowSortMenu(false);
                        }}
                        className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-blue-50 transition-colors ${
                          sortBy === option.id
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-700"
                        }`}
                      >
                        <span className="text-sm">{option.label}</span>
                        {sortBy === option.id && (
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Clear Filters */}
              <div className="relative">
                <button
                  onClick={() => {
                    setSelectedFilter("all");
                    setSearchQuery("");
                  }}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Filter className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Clear Filters</span>
                  <span className="sm:hidden">Clear</span>
                </button>
              </div>
            </div>
          </div>

          {/* Active filters and results */}
          <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <span className="text-gray-700 font-medium text-sm md:text-base">
                {sortedProjects.length} projects found
              </span>

              {/* Active filter badge */}
              {selectedFilter !== "all" && (
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-200">
                  <span className="font-medium text-sm">
                    {filters.find((f) => f.id === selectedFilter)?.label}
                  </span>
                  <button
                    onClick={() => setSelectedFilter("all")}
                    className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Search query badge */}
              {searchQuery && (
                <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                  <span className="font-medium text-sm">
                    Search: "{searchQuery}"
                  </span>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="hover:bg-gray-200 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>

            {/* View mode info */}
            <div className="text-xs md:text-sm text-gray-500">
              {viewMode === "grid" ? "Grid View" : "List View"}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories - Horizontal Scroll for Mobile */}
      <section className="py-4 md:py-6 bg-gray-50/50 border-b border-gray-200 overflow-x-auto">
        <div className="w-full min-w-max px-4">
          <div className="flex gap-2 md:gap-4 pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`group relative flex flex-col items-center p-3 md:p-4 rounded-xl border-2 transition-all duration-300 flex-shrink-0 ${
                  selectedFilter === filter.id
                    ? "border-blue-500 bg-white shadow-lg scale-105"
                    : "border-gray-200 hover:border-gray-300 hover:bg-white"
                }`}
                style={{ minWidth: "100px" }}
              >
                <div
                  className={`p-2 md:p-3 rounded-lg mb-2 md:mb-3 ${
                    selectedFilter === filter.id
                      ? "bg-gradient-to-br " + filter.color
                      : "bg-gray-100 group-hover:bg-gray-200"
                  }`}
                >
                  {filter.icon || <Package className="w-5 h-5 md:w-6 md:h-6" />}
                </div>
                <span
                  className={`font-medium text-xs md:text-sm text-center ${
                    selectedFilter === filter.id
                      ? "text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  {filter.label}
                </span>
                <span
                  className={`text-xs mt-1 ${
                    selectedFilter === filter.id
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {filter.count} projects
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-8 md:py-12">
        <div className="w-full max-w-full px-4">
          {sortedProjects.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {sortedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4 md:space-y-6">
                {sortedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-12 md:py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mb-4 md:mb-6">
                <FolderKanban className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                No projects found
              </h3>
              <p className="text-gray-600 mb-4 md:mb-6 max-w-md mx-auto text-sm md:text-base">
                Try adjusting your search terms or filter criteria to discover
                amazing projects.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("all");
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 opacity-5"></div>
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-500/20 rounded-full -translate-y-16 translate-x-16 md:-translate-y-32 md:translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-indigo-500/20 rounded-full translate-y-24 -translate-x-24 md:translate-y-48 md:-translate-x-48"></div>

        <div className="w-full max-w-full px-4 relative z-10">
          <div className="max-w-full mx-auto text-center">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 md:px-8 md:py-4 rounded-full mb-6 md:mb-8 border border-white/20">
              <Target className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-lg font-semibold">Ready to Start?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Let's Build Something
              <span className="block text-blue-200 mt-1 md:mt-2">Amazing Together</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 md:mb-12 max-w-full md:max-w-2xl mx-auto leading-relaxed">
              Share your project vision with us. Our engineering experts are
              ready to transform your ideas into successful, executed projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                to="/contact"
                className="group bg-white hover:bg-gray-50 text-blue-700 px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl md:shadow-2xl flex items-center justify-center gap-2 md:gap-3"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group border-2 border-white hover:border-blue-300 text-white hover:text-blue-100 px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2 md:gap-3"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16">
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">24/7</div>
                <div className="text-blue-200 text-xs md:text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">30+</div>
                <div className="text-blue-200 text-xs md:text-sm">Expert Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">100%</div>
                <div className="text-blue-200 text-xs md:text-sm">Confidentiality</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, viewMode }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "CPC Plants":
        return <Factory className="w-4 h-4 md:w-5 md:h-5" />;
      case "ECA Plants":
        return <Zap className="w-4 h-4 md:w-5 md:h-5" />;
      case "Paste Plants":
        return <Cog className="w-4 h-4 md:w-5 md:h-5" />;
      case "WHRB/HRU":
        return <Thermometer className="w-4 h-4 md:w-5 md:h-5" />;
      case "Tyre Pyrolysis":
        return <FlaskRound className="w-4 h-4 md:w-5 md:h-5" />;
      case "Structures":
        return <Building className="w-4 h-4 md:w-5 md:h-5" />;
      default:
        return <Package className="w-4 h-4 md:w-5 md:h-5" />;
    }
  };

  const getStatusColor = (status) => {
    return status === "Completed"
      ? "from-green-500 to-emerald-600"
      : "from-blue-500 to-cyan-600";
  };

  if (viewMode === "list") {
    return (
      <Link
        to={`/projects/${project.id}`}
        className="group bg-white rounded-xl md:rounded-2xl border border-gray-200 hover:border-blue-500 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift"
      >
        <div className="p-4 md:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            {/* Image section */}
            <div className="lg:w-72 lg:h-48 xl:h-56 relative overflow-hidden rounded-xl flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-2 md:top-4 right-2 md:right-4 z-20">
                <span
                  className={`px-2 md:px-4 py-1 md:py-2 bg-gradient-to-r ${getStatusColor(
                    project.status
                  )} text-white rounded-full text-xs md:text-sm font-semibold shadow-lg`}
                >
                  {project.status}
                </span>
              </div>
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-20">
                <div className="flex items-center gap-1 md:gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 md:w-4 md:h-4 ${
                        i < Math.floor(project.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-white text-xs md:text-sm font-medium ml-1 md:ml-2">
                    {project.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Content section */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 md:mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="p-1.5 md:p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                      {getCategoryIcon(project.category)}
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-700">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <Building className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-xs md:text-sm text-gray-500">Client</div>
                        <div className="font-medium text-sm md:text-base">{project.client}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-xs md:text-sm text-gray-500">Location</div>
                        <div className="font-medium text-sm md:text-base">{project.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="text-right">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                      {project.budget}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">Budget</div>
                  </div>
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>

              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base line-clamp-2">
                {project.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-6">
                <div className="bg-gray-50 p-2 md:p-4 rounded-lg">
                  <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                    <span className="text-xs md:text-sm text-gray-600">Duration</span>
                  </div>
                  <div className="font-semibold text-sm md:text-base">{project.duration}</div>
                </div>
                <div className="bg-gray-50 p-2 md:p-4 rounded-lg">
                  <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <Users className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                    <span className="text-xs md:text-sm text-gray-600">Team</span>
                  </div>
                  <div className="font-semibold text-sm md:text-base">
                    {project.teamSize} members
                  </div>
                </div>
                <div className="bg-gray-50 p-2 md:p-4 rounded-lg">
                  <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                    <span className="text-xs md:text-sm text-gray-600">Completed</span>
                  </div>
                  <div className="font-semibold text-sm md:text-base">{project.completionDate}</div>
                </div>
                <div className="bg-gray-50 p-2 md:p-4 rounded-lg">
                  <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                    <span className="text-xs md:text-sm text-gray-600">Rating</span>
                  </div>
                  <div className="font-semibold text-sm md:text-base">{project.rating}/5</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 md:gap-2">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 md:px-4 py-1 md:py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 md:px-4 py-1 md:py-2 bg-gray-100 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid View
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group bg-white rounded-xl md:rounded-2xl border border-gray-200 hover:border-blue-500 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col hover-lift"
    >
      {/* Image header with gradient overlay */}
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Status badge */}
        <div className="absolute top-2 md:top-4 right-2 md:right-4 z-20">
          <span
            className={`px-2 md:px-4 py-1 md:py-2 bg-gradient-to-r ${getStatusColor(
              project.status
            )} text-white rounded-full text-xs md:text-sm font-semibold shadow-lg`}
          >
            {project.status}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-20 flex items-center gap-1 md:gap-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 md:w-4 md:h-4 ${
                i < Math.floor(project.rating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-white text-xs md:text-sm font-medium ml-1 md:ml-2">
            {project.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        {/* Category and client */}
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg">
              {getCategoryIcon(project.category)}
            </div>
            <div>
              <div className="text-xs text-gray-500">Client</div>
              <div className="font-medium text-sm line-clamp-1">{project.client}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg md:text-xl font-bold text-gray-900">
              {project.budget}
            </div>
            <div className="text-xs text-gray-500">Budget</div>
          </div>
        </div>

        {/* Title and description */}
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-2 md:mb-3 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-3 md:mb-4 line-clamp-2 text-sm md:text-base flex-1">
          {project.description}
        </p>

        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
          <div className="flex items-center gap-1 md:gap-2 text-gray-600">
            <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            <span className="text-xs md:text-sm truncate">{project.duration}</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 text-gray-600">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            <span className="text-xs md:text-sm truncate">{project.location}</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 text-gray-600">
            <Users className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            <span className="text-xs md:text-sm truncate">{project.teamSize} team</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 text-gray-600">
            <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            <span className="text-xs md:text-sm truncate">{project.completionDate}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
          {project.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
              +{project.tags.length - 2}
            </span>
          )}
        </div>

        {/* Footer with CTA */}
        <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
              <span className="text-xs md:text-sm text-gray-500">Quality Certified</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-blue-600 group-hover:text-blue-700 font-medium text-sm md:text-base">
              <span>View Details</span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Projects;