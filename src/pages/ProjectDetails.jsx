import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  TrendingUp,
  Award,
  Share2,
  Download,
  Printer,
  MessageCircle,
  HardHat,
  //   Tool,
  Settings,
  GitBranch,
  Layers,
  Package,
  Truck,
  AlertCircle,
  Star,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Factory,
  Zap,
  Cog,
  Thermometer,
  FlaskRound,
  Building,
  FileText,
  BarChart,
  Shield,
  Target,
  Home,
  Phone,
  Mail,
  Globe,
  Eye,
  Quote,
  ArrowRight,
} from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  // Mock project data - in real app, fetch based on id
  const project = {
    id: "cpc-plant-gujarat",
    title: "50 TPD CPC Plant",
    client: "ABC Manufacturing Ltd.",
    location: "Gujarat, India",
    duration: "12 Months",
    budget: "$2.5 Million",
    category: "CPC Plants",
    status: "Completed",
    completionDate: "December 2023",
    description:
      "Complete engineering and commissioning of a 50 Tons Per Day Calcination Plant with integrated waste heat recovery system and advanced process control.",
    detailedDescription:
      "This project involved the complete design, engineering, procurement, and commissioning of a state-of-the-art CPC plant. The facility features advanced thermal processing capabilities with energy recovery systems that reduce operational costs by 30%.",

    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200",
    ],

    teamSize: 15,
    clientIndustry: "Manufacturing",
    projectType: "Greenfield",

    tags: [
      "Thermal Engineering",
      "Process Optimization",
      "Structural Design",
      "Energy Recovery",
      "Automation",
      "Quality Control",
    ],

    challenges: [
      "High-temperature material selection for furnace components",
      "Integration of waste heat recovery with existing systems",
      "Dust control and environmental compliance",
      "Space optimization in constrained area",
      "Timely delivery during monsoon season",
    ],

    solutions: [
      "Used advanced ceramic materials for high-temperature zones",
      "Implemented modular design for easier integration",
      "Installed bag filter system with 99.9% efficiency",
      "Optimized layout using 3D modeling and simulation",
      "Pre-fabricated components for faster installation",
    ],

    achievements: [
      { metric: "Energy Savings", value: "25%", icon: <TrendingUp /> },
      { metric: "Project Completion", value: "2 Weeks Early", icon: <Award /> },
      { metric: "Safety Record", value: "Zero Incidents", icon: <Shield /> },
      { metric: "Quality Rating", value: "98%", icon: <Star /> },
      { metric: "Client Satisfaction", value: "100%", icon: <CheckCircle /> },
      { metric: "ROI Period", value: "18 Months", icon: <DollarSign /> },
    ],

    scope: [
      "Process design and engineering",
      "Structural design and analysis",
      "Thermal system design",
      "Electrical and instrumentation",
      "Piping and ducting design",
      "Safety system design",
      "Commissioning and startup",
    ],

    technologies: [
      "AutoCAD Plant 3D",
      "ANSYS Thermal Analysis",
      "STAAD.Pro Structural",
      "Wonderware SCADA",
      "Siemens PLC",
      "Advanced Ceramics",
    ],

    milestones: [
      { date: "Jan 2023", event: "Project Kickoff", status: "completed" },
      { date: "Mar 2023", event: "Design Completion", status: "completed" },
      { date: "Jun 2023", event: "Fabrication Start", status: "completed" },
      { date: "Sep 2023", event: "Site Installation", status: "completed" },
      { date: "Nov 2023", event: "Commissioning", status: "completed" },
      { date: "Dec 2023", event: "Handover", status: "completed" },
    ],

    testimonials: [
      {
        text: "Calor Tech delivered exceptional engineering solutions. Their attention to detail and execution capabilities are remarkable.",
        author: "Rajesh Kumar",
        position: "Plant Manager",
        rating: 5,
      },
    ],

    documents: [
      { name: "Project Report", size: "4.2 MB", type: "PDF" },
      { name: "Technical Specifications", size: "2.1 MB", type: "PDF" },
      { name: "As-Built Drawings", size: "8.5 MB", type: "DWG" },
      { name: "Commissioning Report", size: "3.7 MB", type: "PDF" },
    ],

    nextProject: {
      id: "waste-heat-recovery-maharashtra",
      title: "Waste Heat Recovery System",
      category: "WHRB/HRU",
    },

    prevProject: {
      id: "pressure-vessel-pune",
      title: "Pressure Vessel Fabrication",
      category: "Pressure Vessels",
    },
  };

  const similarProjects = [
    {
      id: "eca-plant-rajasthan",
      title: "ECA Furnace Installation",
      category: "ECA Plants",
      status: "Ongoing",
      location: "Rajasthan, India",
    },
    {
      id: "paste-plant-tamilnadu",
      title: "Industrial Paste Plant",
      category: "Paste Plants",
      status: "Completed",
      location: "Tamil Nadu, India",
    },
    {
      id: "tyre-pyrolysis-karnataka",
      title: "Tyre Pyrolysis Plant",
      category: "Tyre Pyrolysis",
      status: "Completed",
      location: "Karnataka, India",
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "CPC Plants":
        return <Factory className="w-6 h-6" />;
      case "ECA Plants":
        return <Zap className="w-6 h-6" />;
      case "Paste Plants":
        return <Cog className="w-6 h-6" />;
      case "WHRB/HRU":
        return <Thermometer className="w-6 h-6" />;
      case "Tyre Pyrolysis":
        return <FlaskRound className="w-6 h-6" />;
      case "Structures":
        return <Building className="w-6 h-6" />;
      default:
        return <Package className="w-6 h-6" />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-700"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                  {getCategoryIcon(project.category)}
                  <span className="font-semibold">{project.category}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {project.title}
                </h1>

                <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">Duration</div>
                      <div className="font-semibold">{project.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">Location</div>
                      <div className="font-semibold">{project.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">Budget</div>
                      <div className="font-semibold">{project.budget}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">Team Size</div>
                      <div className="font-semibold">
                        {project.teamSize} members
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                    Completed: {project.completionDate}
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                    {project.clientIndustry}
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                    {project.projectType} Project
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-96">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Project Quick Facts
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Client</span>
                      <span className="font-semibold">{project.client}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Category</span>
                      <span className="font-semibold">{project.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Duration</span>
                      <span className="font-semibold">{project.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Budget</span>
                      <span className="font-semibold">{project.budget}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Status</span>
                      <span
                        className={`font-semibold ${
                          project.status === "Completed"
                            ? "text-green-400"
                            : "text-blue-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <Link
                      to="/contact"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Discuss Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Image Gallery */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-96 bg-gray-200">
                  <img
                    src={project.images[activeImage]}
                    alt={`${project.title} - View ${activeImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev > 0 ? prev - 1 : project.images.length - 1
                      )
                    }
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImage(
                        (prev) => (prev + 1) % project.images.length
                      )
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === activeImage ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex overflow-x-auto gap-2 pb-2">
                    {project.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden ${
                          index === activeImage
                            ? "ring-2 ring-blue-500"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Project Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    {project.detailedDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        Key Challenges
                      </h3>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Our Solutions
                      </h3>
                      <ul className="space-y-3">
                        {project.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Project Scope
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.scope.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Technologies & Tools
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Achievements */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  {project.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                        {achievement.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          {achievement.value}
                        </div>
                        <div className="text-gray-600">
                          {achievement.metric}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones Timeline */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Project Timeline
                </h3>
                <div className="space-y-4">
                  {project.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`w-3 h-3 rounded-full mt-2 ${
                          milestone.status === "completed"
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          {milestone.event}
                        </div>
                        <div className="text-sm text-gray-500">
                          {milestone.date}
                        </div>
                      </div>
                      {milestone.status === "completed" && (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Project Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

             
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
              <p className="text-xl md:text-2xl font-medium mb-6">
                "{project.testimonials[0].text}"
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-300 fill-current"
                  />
                ))}
              </div>
              <div className="font-bold text-lg">
                {project.testimonials[0].author}
              </div>
              <div className="text-blue-200">
                {project.testimonials[0].position}, {project.client}
              </div>
            </div>
          </div>

          {/* Similar Projects */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Similar Projects
              </h2>
              <Link
                to="/projects"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {similarProjects.map((proj) => (
                <Link
                  key={proj.id}
                  to={`/projects/${proj.id}`}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        {getCategoryIcon(proj.category)}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-700">
                          {proj.title}
                        </h3>
                        <p className="text-sm text-gray-600">{proj.category}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{proj.location}</span>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            proj.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {proj.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4 group-hover:text-blue-600" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Between Projects */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Link
              to={`/projects/${project.prevProject.id}`}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-500 p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 group-hover:bg-blue-50 rounded-xl">
                  <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">
                    Previous Project
                  </div>
                  <div className="font-bold text-gray-900 group-hover:text-blue-700">
                    {project.prevProject.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {project.prevProject.category}
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to={`/projects/${project.nextProject.id}`}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-500 p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1 text-right">
                    Next Project
                  </div>
                  <div className="font-bold text-gray-900 group-hover:text-blue-700 text-right">
                    {project.nextProject.title}
                  </div>
                  <div className="text-sm text-gray-600 text-right">
                    {project.nextProject.category}
                  </div>
                </div>
                <div className="p-3 bg-gray-100 group-hover:bg-blue-50 rounded-xl">
                  <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Start a Similar Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you achieve similar success
            with your industrial project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-700 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Discuss Your Project</span>
            </Link>
            <a
              href="tel:+911234567890"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
