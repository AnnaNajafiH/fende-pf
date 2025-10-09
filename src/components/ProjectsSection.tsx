import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import { FaArrowRight, FaClock, FaCheckCircle } from "react-icons/fa";

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  // Display only first 3 projects on home page

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {t("projects.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              {t("projects.text1")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden group/image">
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

                  {/* Hover Overlay with Action Buttons */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Link
                      to={`/projects/${project.id}`}
                      className="px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors duration-200 transform scale-95 group-hover:scale-100"
                      style={{ transitionDelay: "100ms" }}
                    >
                      <span>{t("projects.viewDetails")}</span>
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  {/* Project Title & Duration */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {project.name}
                    </h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-3 md:mb-4">
                      <div
                        className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                          project.status === "Completed"
                            ? "bg-green-200/90"
                            : project.status === "In Progress"
                            ? "bg-yellow-200/90"
                            : "bg-red-200/90"
                        }`}
                      >
                        <FaCheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="font-medium">{project.status}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                        <FaClock className="w-3 h-3" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>

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
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end flex-wrap gap-1">
                    <Link
                      to={`/projects/${project.id}`}
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 text-sm font-medium group/btn"
                    >
                      <span>Details</span>
                      <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {t("projects.text2")}
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 text-white font-medium rounded-full hover:from-primary-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("projects.viewAll")} <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
