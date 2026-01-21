import React from "react";
import {
  ArrowRight,
  FolderKanban,
  MapPin,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "50 TPD CPC Plant",
      location: "Gujarat, India",
      duration: "12 Months",
      description:
        "Complete engineering and commissioning of calcination plant",
      status: "Completed",
      category: "CPC Plants",
    },
    {
      title: "Waste Heat Recovery System",
      location: "Maharashtra, India",
      duration: "8 Months",
      description: "Design and installation of WHRB for cement plant",
      status: "Ongoing",
      category: "Energy Recovery",
    },
    {
      title: "Industrial Paste Plant",
      location: "Tamil Nadu, India",
      duration: "10 Months",
      description: "Turnkey paste plant with automation",
      status: "Completed",
      category: "Paste Plants",
    },
    {
      title: "Tyre Pyrolysis Unit",
      location: "Karnataka, India",
      duration: "6 Months",
      description: "Environment-friendly waste recycling plant",
      status: "Completed",
      category: "Renewable",
    },
  ];

  return (
    <section id="projects" className="relative py-6 md:py-8 lg:py-10 w-full overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Successfully delivered projects across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 w-full"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-gray-500 text-xs md:text-sm">
                    {project.duration}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs md:text-sm">
                    {project.location}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs md:text-sm font-medium text-blue-600">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium text-xs md:text-sm group">
                  View Case Study
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <FolderKanban className="w-4 h-4 md:w-5 md:h-5" />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;