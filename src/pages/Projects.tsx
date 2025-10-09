import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import {
  FaArrowRight,
  FaClock,
  FaCheckCircle,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
              <FaLaptopCode />
              <span>Portfolio Showcase</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              My Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              A collection of my work showcasing football training expertise,
              modern coaching methods, and creative athletic development approaches.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                  {project.image && !project.image.includes("placeholder") ? (
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback =
                          target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                  ) : null}

                  {/* Fallback gradient with initials */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center ${
                      project.image && !project.image.includes("placeholder")
                        ? "hidden"
                        : ""
                    }`}
                  >
                    <div className="text-white text-6xl font-bold opacity-80">
                      {project.name
                        .split(" ")
                        .map((word: string) => word[0])
                        .join("")}
                    </div>
                  </div>

                  {/* Status and Duration Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <div
                      className={`flex items-center gap-1 px-3 py-1 text-gray-600 text-xs font-medium rounded-full backdrop-blur-sm ${
                        project.status === "Completed"
                          ? "bg-green-200/90"
                          : project.status === "In Progress"
                          ? "bg-yellow-200/90"
                          : "bg-red-200/90"
                      }`}
                    >
                      <FaCheckCircle className="w-3 h-3" />
                      <span>{project.status}</span>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-gray-200/90 text-gray-600 text-xs font-medium rounded-full backdrop-blur-sm">
                      <FaClock className="w-3 h-3" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to={`/projects/${project.id}`}
                      className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors duration-200 transform scale-95 group-hover:scale-100"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 mb-3">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies
                      .slice(0, 4)
                      .map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium border border-primary-200 dark:border-primary-800"
                        >
                          {tech}
                        </span>
                      ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Feature Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                      <FaCode className="w-3 h-3" />
                      Key Features
                    </h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center">
                    <Link
                      to={`/projects/${project.id}`}
                      className="flex items-center justify-center gap-2 px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 text-sm font-medium group/btn"
                    >
                      <span>View Details</span>
                      <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {projects.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Completed Projects
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {[...new Set(projects.flatMap((p) => p.technologies))].length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Technologies Used
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Success Rate
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative
              projects, or innovative ideas.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 text-white font-medium rounded-full hover:from-primary-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get In Touch</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
