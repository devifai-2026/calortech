import { useState } from "react";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: 1,
      title: "50 TPD CPC Plant",
      location: "Gujarat, India",
      duration: "12 Months",
      category: "CPC Plants",
      status: "Completed",
      description: "Complete engineering and commissioning of calcination plant.",
    },
    {
      id: 2,
      title: "Waste Heat Recovery System",
      location: "Maharashtra, India",
      duration: "8 Months",
      category: "Energy Recovery",
      status: "Ongoing",
      description: "Design and installation of WHRB for process plant.",
    },
    {
      id: 3,
      title: "Industrial Paste Plant",
      location: "Tamil Nadu, India",
      duration: "10 Months",
      category: "Paste Plants",
      status: "Completed",
      description: "Turnkey paste plant with automation and material handling.",
    },
    {
      id: 4,
      title: "Tyre Pyrolysis Unit",
      location: "Karnataka, India",
      duration: "6 Months",
      category: "Tyre Pyrolysis",
      status: "Completed",
      description: "Environment-friendly waste recycling plant with oil recovery.",
    },
    {
      id: 5,
      title: "ECA Furnace Installation",
      location: "Rajasthan, India",
      duration: "9 Months",
      category: "ECA Plants",
      status: "Ongoing",
      description: "High-temperature furnace installation with cooling systems.",
    },
    {
      id: 6,
      title: "Industrial Structure Design",
      location: "Mumbai, India",
      duration: "4 Months",
      category: "Structures",
      status: "Completed",
      description: "Structural design for industrial plant with seismic considerations.",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: 6 },
    { id: "completed", label: "Completed", count: 4 },
    { id: "ongoing", label: "Ongoing", count: 2 },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      selectedFilter === "all" || project.status.toLowerCase().includes(selectedFilter);
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Engineering
            <span className="block text-blue-200">Excellence Showcase</span>
          </h1>
          <p className="text-base md:text-xl text-blue-100 mb-10 max-w-2xl">
            Discover our portfolio of innovative industrial projects where precision engineering meets successful execution.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold">4.8/5</div>
              <div className="text-blue-200 text-sm">Avg. Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">75+</div>
              <div className="text-blue-200 text-sm">Expert Team</div>
            </div>
            <div>
              <div className="text-2xl font-bold">8+</div>
              <div className="text-blue-200 text-sm">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="border-b border-gray-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Search projects..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={() => {
                setSelectedFilter("all");
                setSearchQuery("");
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Clear
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all border-2 ${
                  selectedFilter === filter.id
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="px-8 pt-8 pb-4">
                    <div className="text-sm font-semibold text-gray-600 mb-3">
                      {project.status} • {project.duration}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="px-8 pb-3 flex-1 space-y-3">
                    <div className="flex gap-2">
                      <span className="font-semibold text-sm text-gray-900">Location:</span>
                      <span className="text-gray-600 text-sm">{project.location}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-sm text-gray-900">Category:</span>
                      <span className="text-gray-600 text-sm">{project.category}</span>
                    </div>
                  </div>

                  <div className="px-8 pb-3 pt-3 border-t border-gray-100">
                    <button className="text-gray-900 hover:text-blue-600 font-bold text-sm flex items-center gap-2 group">
                      <span>View Case Study</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("all");
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-blue-100 mb-12">
            Share your project vision with us. Our engineering experts are ready to transform your ideas into successful, executed projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white hover:bg-gray-50 text-blue-700 px-12 py-5 rounded-xl font-bold text-lg">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-12 py-5 rounded-xl font-bold text-lg">
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}