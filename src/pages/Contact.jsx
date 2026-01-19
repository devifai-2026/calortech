import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Copy, 
  Send, 
  Building, 
  User, 
  FileText, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Users,
  Calendar,
  Globe,
  Award,
  Shield,
  Zap,
  Target,
  HeadphonesIcon,
  Rocket,
  Lightbulb,
  Heart
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  const questionnaire = `Hello 👋
Thank you for contacting *Calor Tech Engineers LLP* (*Engineering to Execution*)

To understand your project accurately and provide a technically correct response, kindly share the following details (as applicable).

────────────────────────
SECTION A – CLIENT DETAILS
────────────────────────
1. Company name
2. Contact person name
3. Designation
4. Email ID
5. Mobile number
6. Company address
7. Project country & state

────────────────────────
SECTION B – PROJECT TYPE
────────────────────────
8. Project category:
    ▢ CPC Plant
    ▢ ECA Plant
    ▢ CPC Paste Plant
    ▢ ECA Paste Plant
    ▢ Waste Heat Recovery
    ▢ Tyre Pyrolysis
    ▢ TFH System
    ▢ Pressure Vessel
    ▢ Industrial Structures

────────────────────────
SECTION C – PROJECT DETAILS
────────────────────────
9. Target production capacity
10. Project scope required:
    ▢ Engineering only
    ▢ Engineering + Fabrication
    ▢ Turnkey / EPC-Lite
    ▢ Erection & Commissioning support
11. Expected timeline
12. Any specific requirements

────────────────────────
Please respond with relevant details or attach available documents.`;

  const copyQuestionnaire = () => {
    navigator.clipboard.writeText(questionnaire);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      content: "+91 123 456 7890",
      secondary: "Available Mon-Sat, 9AM-7PM",
      color: "from-blue-600 to-blue-800",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      content: "info@calortechengineers.com",
      secondary: "Response within 24 hours",
      color: "from-indigo-600 to-indigo-800",
      bg: "bg-gradient-to-br from-indigo-50 to-indigo-100"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Working Hours",
      content: "Mon–Sat | 9:00 AM – 7:00 PM",
      secondary: "IST Timezone",
      color: "from-amber-600 to-amber-800",
      bg: "bg-gradient-to-br from-amber-50 to-amber-100"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Contact",
      description: "Share your project requirements",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02",
      title: "Consultation",
      description: "Free technical consultation",
      icon: <HeadphonesIcon className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      step: "03",
      title: "Proposal",
      description: "Detailed project proposal",
      icon: <FileText className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: "04",
      title: "Execution",
      description: "Project kick-off",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 pt-26 lg:pt-6">
    

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Info & Process */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className={`${info.bg} p-6 rounded-2xl border border-gray-100 shadow-lg hover-lift group slide-in-left`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-br ${info.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{info.title}</h3>
                        <p className="text-gray-800 font-semibold">{info.content}</p>
                        <p className="text-gray-600 text-sm mt-1">{info.secondary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Process Steps */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg slide-in-left" style={{ animationDelay: '400ms' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Our Consultation Process
                </h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                      <div className={`p-2 bg-gradient-to-br ${step.color} bg-opacity-10 rounded-lg text-gray-700`}>
                        {step.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            
            </div>

            {/* Right Column - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Send Your Project Details</h2>
                    <p className="text-gray-600">We'll provide a detailed proposal within 48 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium text-sm flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium text-sm flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium text-sm flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50"
                        placeholder="+91 123 456 7890"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium text-sm flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Project Requirements *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 resize-none"
                      placeholder="Tell us about your project scope, requirements, timeline, and any specific challenges..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`w-full ${submitted ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'} text-white py-4.5 rounded-xl font-bold text-lg transition-all duration-300 transform ${!submitted && 'hover:scale-[1.02]'} shadow-xl flex items-center justify-center gap-3`}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        <span>Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Questionnaire Section */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Detailed Project Questionnaire</h2>
                    <p className="text-gray-600">For comprehensive project evaluation and accurate proposals</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Complete Project Details Form</h3>
                      <p className="text-gray-600 text-sm">Copy and share via your preferred channel</p>
                    </div>
                    <button
                      onClick={copyQuestionnaire}
                      className={`flex items-center gap-3 ${copied ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          <span>Copy Questionnaire</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      readOnly
                      value={questionnaire}
                      className="w-full h-80 bg-white border-2 border-blue-100 rounded-xl p-5 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Share via WhatsApp</span>
                  </a>
                  <a
                    href="mailto:info@calortechengineers.com"
                    className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 rounded-xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send via Email</span>
                  </a>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <Shield className="w-10 h-10 text-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Confidential & Secure</h4>
                  <p className="text-gray-600 text-sm">Your project details are protected with strict NDA</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <Target className="w-10 h-10 text-green-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Expert Consultation</h4>
                  <p className="text-gray-600 text-sm">Direct access to senior engineers</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                  <Lightbulb className="w-10 h-10 text-purple-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Innovative Solutions</h4>
                  <p className="text-gray-600 text-sm">Cutting-edge engineering approaches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold">Let's Build Something Amazing</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Vision into Reality?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Our engineering team is ready to collaborate, innovate, and deliver exceptional results for your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+911234567890"
                className="bg-white hover:bg-gray-100 text-blue-700 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +91 123 456 7890</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="mailto:info@calortechengineers.com"
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
              >
                <Mail className="w-5 h-5" />
                <span>Email Technical Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            
            <p className="text-blue-200 mt-8 text-sm">
              ⚡ Free initial consultation | 📋 Detailed proposal in 48 hours | 🌍 Global project support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;