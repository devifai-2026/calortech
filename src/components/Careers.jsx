import React from "react";
import { Sparkles, ArrowRight, Users, Award, TrendingUp, Globe } from "lucide-react";

const Careers = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="careers" className="relative py-10 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-50/50 to-cyan-50/50 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-emerald-50/30 to-green-50/30 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-2 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Join Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your Career
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
              With Excellence
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-5">
            Join a team of passionate engineers and innovators working on cutting-edge 
            industrial projects. Grow your career while making a real impact.
          </p>

          {/* Apply Button */}
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Benefits Section - Simplified */}
        <div className="max-w-5xl mx-auto mb-4">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Calor Tech, we believe that when you grow with us, your career takes flight. 
              Here's what makes working with us exceptional:
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="p-3 bg-blue-50 rounded-xl inline-block mb-3">
                <Users className="w-6 h-6 text-blue-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <p className="text-sm text-gray-600">Team Members</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="p-3 bg-green-50 rounded-xl inline-block mb-3">
                <TrendingUp className="w-6 h-6 text-green-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900">30%</div>
              <p className="text-sm text-gray-600">Annual Growth</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="p-3 bg-amber-50 rounded-xl inline-block mb-3">
                <Award className="w-6 h-6 text-amber-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900">25+</div>
              <p className="text-sm text-gray-600">Awards Won</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="p-3 bg-purple-50 rounded-xl inline-block mb-3">
                <Globe className="w-6 h-6 text-purple-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <p className="text-sm text-gray-600">Countries</p>
            </div>
          </div>

          {/* Simple Description */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
              We're committed to providing an environment where talent flourishes, 
              innovation thrives, and careers accelerate. Whether you're starting your 
              journey or looking to take the next big leap, Calor Tech offers the 
              platform, mentorship, and opportunities to help you reach your full potential.
            </p>
            
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;