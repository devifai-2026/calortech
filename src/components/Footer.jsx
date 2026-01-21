import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const handleFooterClick = (sectionId, e) => {
    e.preventDefault();
    
    if (!sectionId) return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  const handleServiceClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("services");
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      window.history.pushState(null, "", "#services");
    }
  };

  const footerLinks = {
    "Home": "hero",
    "About Us": "about",
    "Services": "services",
    "Contact": "contact",
    "Career": "contact", 
  };

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile Layout - Two Columns for Quick Links & Services */}
        <div className="md:hidden">
          {/* Logo and Description */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center p-2">
                <div className="text-white font-bold text-lg">CT</div>
              </div>
              <div>
                <h3 className="font-bold text-base">Calor Tech Engineers LLP</h3>
                <p className="text-blue-300 text-xs font-medium">
                  Engineering to Execution
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering engineering-led solutions that bridge the gap between
              design and execution for process and energy-intensive industries.
            </p>
          </div>

          {/* Quick Links and Services side by side on mobile */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Quick Links Column */}
            <div>
              <h4 className="font-bold text-base mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {Object.entries(footerLinks).map(([item, sectionId]) => (
                  <li key={item}>
                    <a
                      href={`#${sectionId || ''}`}
                      onClick={(e) => handleFooterClick(sectionId, e)}
                      className={`text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group ${
                        !sectionId ? 'cursor-default hover:text-gray-400' : 'cursor-pointer'
                      }`}
                    >
                      {sectionId && (
                        <div className="w-1 h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      )}
                      <span className="text-sm">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-bold text-base mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                {[
                  "CPC Plants",
                  "ECA Plants",
                  "Waste Heat Recovery",
                  "TFH Systems",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={handleServiceClick}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info - Full width on mobile */}
          <div className="mb-6">
            <h4 className="font-bold text-base mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">
                 dte.info20@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">+91 8100537052</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">286 B.B Ganguly street, <br /> 1 St floor, Kolkata 700012</span>
              </li>
            </ul>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin className="w-4 h-4" />, href: "#" },
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
                { icon: <Facebook className="w-4 h-4" />, href: "#" },
                { icon: <Instagram className="w-4 h-4" />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white p-2 rounded-lg transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout - 4 Columns */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center p-2">
                <div className="text-white font-bold text-xl">CT</div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Calor Tech Engineers LLP</h3>
                <p className="text-blue-300 text-sm font-medium">
                  Engineering to Execution
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering engineering-led solutions that bridge the gap between
              design and execution for process and energy-intensive industries.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {Object.entries(footerLinks).map(([item, sectionId]) => (
                <li key={item}>
                  <a
                    href={`#${sectionId || ''}`}
                    onClick={(e) => handleFooterClick(sectionId, e)}
                    className={`text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group ${
                      !sectionId ? 'cursor-default hover:text-gray-400' : 'cursor-pointer'
                    }`}
                  >
                    {sectionId && (
                      <div className="w-1 h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    )}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                "CPC Plants",
                "ECA Plants",
                "Waste Heat Recovery",
                "TFH Systems",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={handleServiceClick}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">
                  dte.info20@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+91 8100537052</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">286 B.B Ganguly street, <br /> 1 St floor, Kolkata 700012</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white p-2 rounded-lg transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 md:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} Calor Tech Engineers LLP. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;