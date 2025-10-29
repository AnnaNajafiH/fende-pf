import React from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/portfolio";
import { FaClock } from "react-icons/fa";

const Experience: React.FC = () => {
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
            {projects.map((project, index) => (
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
                      alt={project.name}
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
                </div>

                <div className="p-6">
                  {/* Project Title & Duration */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {project.name}
                    </h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-3 md:mb-4"></div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-blue-200 dark:bg-gray-700 px-2 py-1 rounded-lg">
                    <FaClock className="w-3 h-3" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
