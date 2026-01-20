import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", sectionId: "hero" },
    { name: "Solutions", path: "/", sectionId: "solutions" },
    { name: "Services", path: "/", sectionId: "services" },
    { name: "Process", path: "/", sectionId: "process" },
    { name: "Projects", path: "/", sectionId: "projects" },
    { name: "Contact", path: "/", sectionId: "contact" },
    { name: "Careers", path: "/", sectionId: "contact" },
  ];

  const handleNavClick = (path, sectionId, e) => {
    e.preventDefault();
    setIsOpen(false);
    
    // If on home page, scroll to section
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      // If not on home page, navigate to home first
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash for active state
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  // Check if section is active based on hash
  const isSectionActive = (sectionId) => {
    if (location.pathname !== "/") return false;
    
    const hash = window.location.hash.slice(1);
    if (sectionId === "hero") {
      return hash === "" || hash === "hero";
    }
    return hash === sectionId;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100 py-3" 
        : "bg-gradient-to-r from-blue-50/80 via-white/80 to-indigo-50/80 backdrop-blur-sm border-b border-gray-100/30 py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              scrolled 
                ? "bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg" 
                : "bg-gradient-to-br from-blue-700 to-blue-900 shadow-xl"
            }`}>
              <div className="text-white font-bold text-xl">CT</div>
            </div>
            <div>
              <h1 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-blue-900"
              }`}>
                Calor Tech Engineers
              </h1>
              <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <p className={`text-xs font-semibold italic tracking-wider transition-colors duration-300 ${
                  scrolled ? "text-blue-700" : "text-blue-600"
                }`}>
                  Engineering To Execution
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {navLinks.map((link) => {
              const active = isSectionActive(link.sectionId);
              return (
                <div key={link.name} className="relative">
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(link.path, link.sectionId, e)}
                    className={`relative px-1 py-2 transition-all duration-300 font-medium cursor-pointer ${
                      active
                        ? "text-blue-700 font-semibold"
                        : scrolled
                        ? "text-gray-700 hover:text-blue-700"
                        : "text-blue-900 hover:text-blue-700"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
                    )}
                  </a>
                </div>
              );
            })}
            
            {/* Buttons Container */}
            <div className="ml-4 flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick("/", "contact", e)}
                className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-3 py-1.5 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick("/", "projects", e)}
                className="border-2 border-blue-600 hover:border-blue-700 text-blue-700 hover:text-blue-800 px-3 py-1.5 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-blue-50 flex items-center justify-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled 
                ? "text-gray-700 hover:bg-gray-100" 
                : "text-blue-900 hover:bg-white/80"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-6 space-y-2 animate-slide-in">
            {navLinks.map((link) => {
              const active = isSectionActive(link.sectionId);
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(link.path, link.sectionId, e)}
                  className={`block px-4 py-3 rounded-lg transition-colors duration-300 font-medium cursor-pointer ${
                    active
                      ? "text-blue-700 border-l-4 border-blue-600 pl-3 font-semibold"
                      : scrolled
                      ? "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                      : "text-blue-900 hover:text-blue-700 hover:bg-white/80"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            {/* Mobile Buttons */}
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick("/", "contact", e)}
                className="block w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-2 py-1.5 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick("/", "projects", e)}
                className="block w-full border-2 border-blue-600 hover:border-blue-700 text-blue-700 hover:text-blue-800 px-2 py-1.5 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-blue-50 flex items-center justify-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;