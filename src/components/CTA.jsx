import React from "react";
import {
  ArrowRight,
  Users,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

const CTA = () => {
  return (
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
  );
};

export default CTA;