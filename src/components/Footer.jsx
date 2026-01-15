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
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
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
              {["Home", "About Us", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${
                      item === "Home" ? "" : item.toLowerCase().replace(" ", "")
                    }`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                    href="/services"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
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
                  info@calortechengineers.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">India</span>
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
                  className="bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white p-2 rounded-lg transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Calor Tech Engineers LLP. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
