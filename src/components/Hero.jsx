import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import one from "../assets/Hero/one.jpg";
import two from "../assets/Hero/two.jpg";
import three from "../assets/Hero/three.jpg";
import four from "../assets/Hero/four.jpg";
import five from "../assets/Hero/five.jpg";
import six from "../assets/Hero/six.jpg";

const Hero = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(one); // Default image
  const [isHovering, setIsHovering] = useState(false); // Track if hovering
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef(null);

  const projectItems = [
    {
      title: "50 TPD CPC Plant",
      location: "Gujarat, India",
      duration: "12 Months",
      status: "Completed",
      category: "CPC Plants",
      description: "Complete engineering and commissioning of calcination plant",
      image: one,
    },
    {
      title: "Waste Heat Recovery System",
      location: "Maharashtra, India",
      duration: "8 Months",
      status: "Ongoing",
      category: "Energy Recovery",
      description: "Design and installation of WHRB for cement plant",
      image: two,
    },
    {
      title: "Industrial Paste Plant",
      location: "Tamil Nadu, India",
      duration: "10 Months",
      status: "Completed",
      category: "Paste Plants",
      description: "Turnkey paste plant with automation",
      image: three,
    },
    {
      title: "Tyre Pyrolysis Unit",
      location: "Karnataka, India",
      duration: "6 Months",
      status: "Completed",
      category: "Renewable",
      description: "Environment-friendly waste recycling plant",
      image: four,
    },
    {
      title: "Biomass Gasification Plant",
      location: "Punjab, India",
      duration: "14 Months",
      status: "Ongoing",
      category: "Renewable Energy",
      description: "Sustainable energy generation from agricultural waste",
      image: five,
    },
    {
      title: "Cement Grinding Unit",
      location: "Rajasthan, India",
      duration: "18 Months",
      status: "Completed",
      category: "Cement Plants",
      description: "State-of-the-art grinding and packing facility",
      image: six,
    },
  ];

  const stats = [
    {
      value: "100+",
      label: "Projects Delivered",
      sublabel: "Across 15+ Countries",
    },
    { value: "50+", label: "Happy Clients", sublabel: "95% Retention Rate" },
    { value: "15+", label: "Countries Served", sublabel: "Global Presence" },
    { value: "24/7", label: "Support", sublabel: "Always Available" },
  ];

  // Group projects into sets of 3 for each slide
  const groupedProjects = [];
  for (let i = 0; i < projectItems.length; i += 3) {
    groupedProjects.push(projectItems.slice(i, i + 3));
  }

  const scrollToContact = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const navbarHeight = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        window.history.pushState(null, "", "#contact");
      }
    } else {
      navigate("/#contact");
    }
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % groupedProjects.length);
  };

  const prevSlide = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + groupedProjects.length) % groupedProjects.length
    );
  };

  // Handle project card mouse enter
  const handleProjectMouseEnter = (projectImage) => {
    setIsHovering(true);
    setActiveImage(projectImage);
  };

  // Handle project card mouse leave - reset to default
  const handleProjectMouseLeave = () => {
    setIsHovering(false);
    setActiveImage(one); // Reset to default image
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      {/* Background with gradient overlay - Dynamic based on activeImage */}
      <div
        className="absolute inset-0 z-0 transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url('${activeImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-4xl text-center">
          {/* Tagline */}
          <div className="mb-6 inline-block">
            <span className="text-sm md:text-base font-semibold text-blue-300 tracking-widest uppercase">
              ✨ Engineering Excellence Since 15 Years
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight text-white drop-shadow-2xl uppercase">
            Engineering
            <span className="mx-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-200">
              To
            </span>
            <br />
            Execution.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-6 leading-relaxed">
            Complete engineering solutions from concept to commissioning. We
            bridge the gap between design and execution for process and
            energy-intensive industries with cutting-edge technology and
            expertise.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-2 px-8 md:px-12 py-4 backdrop-blur-sm hover:bg-white/10 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border border-blue-600/70"
            >
              Discover More
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Latest Projects Section */}
      <div className="relative z-10 px-4 py-12 md:py-6 md:pt-16 flex justify-end">
        <div className="max-w-2xl mx-0 w-full">
          {/* Section Card - Fixed parent container */}
          <div className="bg-white/65 rounded-3xl shadow-2xl p-8 md:p-6">
            {/* Section Title */}
            <div className="text-center mb-3">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-widest">
                Latest Projects
              </h2>
            </div>

            {/* Child Cards Container - This is what slides */}
            <div className="relative overflow-hidden">
              {/* Slides Wrapper for child cards only */}
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {groupedProjects.map((projectsGroup, groupIndex) => (
                  <div key={groupIndex} className="flex-shrink-0 w-full">
                    {/* Three Projects Grid */}
                    <div className="grid grid-cols-3 gap-4 md:gap-6 px-1">
                      {projectsGroup.map((project, index) => (
                        <div
                          key={index}
                          className="group cursor-pointer transition-all duration-300 hover:scale-105"
                          onMouseEnter={() => handleProjectMouseEnter(project.image)}
                          onMouseLeave={handleProjectMouseLeave}
                        >
                          {/* Image Container */}
                          <div className="relative rounded-2xl overflow-hidden h-16 md:h-20 lg:h-24 shadow-lg hover:shadow-xl transition-all bg-gray-300">
                            <div
                              className="absolute inset-0 w-full h-full"
                              style={{
                                backgroundImage: `url('${project.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                          </div>

                          {/* Info Container */}
                          <div className="pt-4 px-1">
                            {/* Title */}
                            <h3 className="text-xs md:text-sm font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {project.title}
                            </h3>

                            {/* Details */}
                            <div className="text-xs md:text-xs text-gray-600 space-y-0.5">
                              <p className="font-semibold">
                                {project.location}
                              <span
                                className={`font-semibold pl-2.5 ${
                                  project.status === "Ongoing"
                                    ? "text-yellow-600"
                                    : "text-green-600"
                                }`}
                              >
                                {project.status}
                              </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

           
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-3">
              {groupedProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === carouselIndex
                      ? "bg-gray-700 w-8"
                      : "bg-gray-400 w-2.5 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideIn {
          animation: slideInFromRight 0.8s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;