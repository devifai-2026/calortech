import {
  Award,
  Users,
  Target,
  Globe,
  Clock,
  Shield,
  TrendingUp,
  CheckCircle,
  Zap,
  Sparkles,
  ArrowRight,
  Factory,
  Building,
  Thermometer,
  Package,
  Cpu,
  Heart,
  Star,
  Calendar,
  MapPin,
  GitBranch,
  Layers,
  Trophy,
  BarChart,
  Lightbulb,
  Rocket,
  Flame,
  Briefcase,
  Eye,
  GitCommitHorizontal,
  ChevronRight,
  Leaf,
  Brain,
  TargetIcon,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Target className="w-10 h-10 md:w-14 md:h-14" />,
      title: "Mission",
      description:
        "To deliver engineering-led solutions that bridge the gap between design and execution, ensuring optimal performance and reliability for every project.",
      color: "from-blue-600 to-blue-800",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      icon: <Globe className="w-10 h-10 md:w-14 md:h-14" />,
      title: "Vision",
      description:
        "To be the preferred engineering partner for process and energy-intensive industries globally, known for technical excellence and execution capability.",
      color: "from-indigo-600 to-indigo-800",
      bg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    },
    {
      icon: <Shield className="w-10 h-10 md:w-14 md:h-14" />,
      title: "Quality",
      description:
        "Commitment to the highest standards of engineering quality, safety, and compliance with international codes and standards.",
      color: "from-emerald-600 to-emerald-800",
      bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    },
    {
      icon: <Heart className="w-10 h-10 md:w-14 md:h-14" />,
      title: "Values",
      description:
        "Integrity, innovation, and excellence guide every decision we make and every project we undertake.",
      color: "from-amber-600 to-amber-800",
      bg: "bg-gradient-to-br from-amber-50 to-amber-100",
    },
  ];

  const milestones = [
    {
      year: "2020",
      event: "Company Foundation",
      description: "Established with focus on industrial engineering solutions",
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      year: "2021",
      event: "First Major CPC Plant Project",
      description: "Successfully delivered 50 TPD calcination plant",
      icon: <Factory className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      year: "2022",
      event: "Expanded to ECA Plants & Waste Heat Recovery",
      description:
        "Diversified into high-temperature and energy recovery systems",
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      year: "2023",
      event: "Added Pyrolysis & TFH Systems",
      description: "Entered renewable energy and thermal fluid heating markets",
      icon: <Flame className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      year: "2024",
      event: "International Projects",
      description: "Expanded services to 15+ countries worldwide",
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      year: "2025",
      event: "100+ Projects Completed",
      description: "Achieved milestone of delivering 100+ successful projects",
      icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" />,
    },
  ];

  const strengths = [
    {
      title: "Technical Excellence",
      description:
        "Deep expertise in thermal, process, and structural engineering with cutting-edge technology",
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Execution Focus",
      description:
        "From concept to commissioning with single-point responsibility and seamless coordination",
      icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
      color: "from-indigo-600 to-indigo-800",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality control and compliance with international standards and certifications",
      icon: <TargetIcon className="w-6 h-6 md:w-8 md:h-8" />,
      color: "from-emerald-600 to-emerald-800",
    },
    {
      title: "Client Partnership",
      description:
        "Collaborative approach ensuring client success and long-term satisfaction",
      icon: <HeartHandshake className="w-6 h-6 md:w-8 md:h-8" />,
      color: "from-purple-600 to-purple-800",
    },
  ];

  const expertiseAreas = [
    { name: "Thermal Engineering", icon: <Thermometer />, projects: 40 },
    { name: "Process Plants", icon: <Factory />, projects: 35 },
    { name: "Structural Design", icon: <Building />, projects: 25 },
    { name: "Energy Systems", icon: <Zap />, projects: 30 },
    { name: "Fabrication Support", icon: <Package />, projects: 45 },
    { name: "Commissioning", icon: <GitBranch />, projects: 50 },
  ];

  const teamStats = [
    { label: "Senior Engineers", value: "25+", icon: <Award /> },
    { label: "Technical Experts", value: "40+", icon: <Users /> },
    { label: "Project Managers", value: "15+", icon: <Briefcase /> },
    { label: "Support Staff", value: "30+", icon: <Heart /> },
  ];

  return (
    <div className="min-h-screen from-gray-50 pt-26 via-white to-blue-50 w-full overflow-hidden">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-16 fade-in px-4">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">About Us</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Engineering Excellence in Every Project
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          We bridge the gap between engineering design and field execution,
          ensuring projects are not just designed well but are also executable,
          maintainable, and perform as intended.
        </p>
      </div>

      {/* Overview Section */}
      <section className="py-12 md:py-16 w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20 items-center fade-in">
              <div className="slide-in-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">Who We Are</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Precision Engineering,
                  <br />
                  Seamless Execution
                </h2>
                <div className="space-y-4 md:space-y-6 text-gray-700">
                  <p className="text-base md:text-lg leading-relaxed">
                    <span className="font-semibold text-blue-700">
                      Calor Tech Engineers LLP
                    </span>{" "}
                    is an{" "}
                    <span className="font-bold text-blue-800">
                      engineering-led organization
                    </span>{" "}
                    specializing in turnkey solutions for process and
                    energy-intensive industries.
                  </p>
                  <p className="leading-relaxed text-sm md:text-base">
                    Our expertise spans across CPC and ECA plants, paste plants,
                    waste heat recovery systems, tyre pyrolysis plants, TFH
                    systems, pressure vessels, and industrial structures.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6 rounded-2xl border border-blue-200 shadow-sm">
                    <h3 className="font-bold text-blue-900 text-base md:text-lg mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />
                      Our Philosophy
                    </h3>
                    <p className="text-blue-800 leading-relaxed text-sm md:text-base">
                      <span className="italic font-semibold">
                        "Engineering to Execution"
                      </span>{" "}
                      is not just our tagline—it's our commitment to delivering
                      complete solutions from concept to commissioning with
                      technical excellence and precision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative slide-in-right">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100 w-full">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {[
                      {
                        value: "100+",
                        label: "Projects Completed",
                        icon: <Award className="w-8 h-8 md:w-12 md:h-12" />,
                        color: "from-blue-500 to-blue-600",
                      },
                      {
                        value: "50+",
                        label: "Clients Served",
                        icon: <Users className="w-8 h-8 md:w-12 md:h-12" />,
                        color: "from-indigo-500 to-indigo-600",
                      },
                      {
                        value: "5+",
                        label: "Years Experience",
                        icon: <Clock className="w-8 h-8 md:w-12 md:h-12" />,
                        color: "from-emerald-500 to-emerald-600",
                      },
                      {
                        value: "15+",
                        label: "Countries Served",
                        icon: <Globe className="w-8 h-8 md:w-12 md:h-12" />,
                        color: "from-amber-500 to-amber-600",
                      },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover-lift w-full"
                      >
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-full mb-4 mx-auto`}
                        >
                          <div className="text-white">{stat.icon}</div>
                        </div>
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 font-medium text-xs md:text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-gradient-to-br from-blue-600 to-blue-700 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl hidden md:block">
                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-gradient-to-br from-green-600 to-green-700 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl hidden md:block">
                    <BarChart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Our Foundation</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Core Values That Guide Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Principles that define our approach and shape our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className={`${value.bg} p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg hover-lift transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 group w-full`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-xl text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-12 md:py-16 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Technical Mastery</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Comprehensive engineering capabilities across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover-lift hover:shadow-xl transition-all duration-300 w-full"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">
                      {area.name}
                    </h3>
                    <div className="flex items-center gap-2 md:gap-3 mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full"
                          style={{ width: `${(area.projects / 50) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-blue-700">
                        {area.projects}+
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 mt-2">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-50 text-green-700 px-4 py-2 rounded-full mb-4">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Competitive Advantages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              What sets us apart in the engineering landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="group bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg hover-lift transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 w-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br ${strength.color} rounded-xl text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {strength.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  {strength.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 md:py-16 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 px-4 py-2 rounded-full mb-4">
              <GitCommitHorizontal className="w-4 h-4" />
              <span className="text-sm font-medium">Our Journey</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Milestones of Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Key moments that shaped our growth and success
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto w-full">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>

            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="lg:w-1/2 mb-4 md:mb-6 lg:mb-0 w-full">
                    <div
                      className={`bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-lg hover-lift transition-all duration-300 w-full ${
                        index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                      }`}
                    >
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div
                          className={`p-2 md:p-3 rounded-xl ${
                            index % 2 === 0
                              ? "bg-blue-100 text-blue-600"
                              : "bg-indigo-100 text-indigo-600"
                          }`}
                        >
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-xl md:text-2xl font-bold text-blue-700">
                            {milestone.year}
                          </div>
                          <div className="text-base md:text-lg font-bold text-gray-900">
                            {milestone.event}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="relative lg:absolute left-1/2 transform -translate-x-1/2 lg:transform-none">
                    <div
                      className={`w-6 h-6 md:w-8 md:h-8 ${
                        index % 2 === 0 ? "bg-blue-600" : "bg-indigo-600"
                      } rounded-full flex items-center justify-center ring-4 ring-white shadow-xl`}
                    >
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 lg:opacity-0">
                    {" "}
                    {/* Empty column for spacing */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 px-4 py-2 rounded-full mb-4">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Methodology</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Systematic Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              A proven methodology ensuring project success and client
              satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Requirement Analysis",
                description:
                  "Deep dive into client needs and project objectives",
                color: "from-blue-600 to-blue-800",
              },
              {
                step: "02",
                title: "Engineering Design",
                description:
                  "Comprehensive solutions with focus on constructability",
                color: "from-indigo-600 to-indigo-800",
              },
              {
                step: "03",
                title: "Execution Planning",
                description:
                  "Detailed scheduling and coordination for seamless execution",
                color: "from-emerald-600 to-emerald-800",
              },
              {
                step: "04",
                title: "Delivery & Support",
                description:
                  "Project delivery with commissioning and post-project support",
                color: "from-purple-600 to-purple-800",
              },
            ].map((step, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${step.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                  ></div>
                  <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg w-full">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center font-bold text-xl md:text-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.step}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                    <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
                      <div className="text-xs md:text-sm text-gray-500">
                        Duration: 2-4 Weeks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden w-full">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8">
              Ready to Partner with Excellence?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our growing list of satisfied clients who trust us with their
              most important engineering projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-blue-700 px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
              >
                <span className="text-sm md:text-base">Start Your Project</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
              >
                <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">View Our Work</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <p className="text-blue-200 mt-6 md:mt-8 text-xs md:text-sm">
              🚀 Engineering Excellence | 🛡️ Quality Guaranteed | 🌍 Global
              Delivery
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;