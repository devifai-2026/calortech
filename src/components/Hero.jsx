import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Award,
  Users,
  Globe,
  Clock,
  Sparkles,
  TrendingUp,
} from "lucide-react";
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

const Hero = () => {
  const [rightColumnIndex, setRightColumnIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Function to scroll to contact section
  const scrollToContact = (e, projectTitle = null) => {
    e.preventDefault();
    
    // If we're already on the home page, scroll to contact section
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const navbarHeight = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL hash
        window.history.pushState(null, "", "#contact");
      }
    } else {
      // If not on home page, navigate to home with contact hash
      navigate("/#contact");
    }
  };

  // Smoother auto-scroll right column
  useEffect(() => {
    const interval = setInterval(() => {
      setRightColumnIndex((prev) => (prev + 1) % rightColumnItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [rightColumnItems.length]);

  return (
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
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6 shadow-lg mt-2 ">
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

                        <button 
                          onClick={(e) => scrollToContact(e, item.title)}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
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
    </section>
  );
};

export default Hero;