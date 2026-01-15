import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
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
                <p className={`text-xs font-semibold tracking-wider transition-colors duration-300 ${
                  scrolled ? "text-blue-700" : "text-blue-600"
                }`}>
                  ENGINEERING TO EXECUTION
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  to={link.path}
                  className={`relative px-1 py-2 transition-all duration-300 font-medium ${
                    isActive(link.path)
                      ? "text-blue-700 font-semibold"
                      : scrolled
                      ? "text-gray-700 hover:text-blue-700"
                      : "text-blue-900 hover:text-blue-700"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
                  )}
                </Link>
              </div>
            ))}
            
            <div className="ml-4">
              <Link
                to="/contact"
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  scrolled
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                    : "bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white shadow-xl"
                }`}
              >
                Get Quote
              </Link>
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-lg transition-colors duration-300 font-medium ${
                  isActive(link.path)
                    ? "text-blue-700 border-l-4 border-blue-600 pl-3 font-semibold"
                    : scrolled
                    ? "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    : "text-blue-900 hover:text-blue-700 hover:bg-white/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Quote
              </Link>
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