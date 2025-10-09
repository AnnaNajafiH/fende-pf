import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/portfolio";
import {
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaLightbulb,
  FaCog,
  FaStar,
  FaCode,
} from "react-icons/fa";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="mb-6 md:mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group text-sm md:text-base"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Projects</span>
            </button>
          </div>

          {/* Project Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl overflow-hidden shadow-xl mb-6 md:mb-8">
            <div className="relative">
              {/* Hero Image */}
              <div className="aspect-video bg-gradient-to-br from-primary-500 to-blue-500 relative overflow-hidden">
                {project.image && !project.image.includes("placeholder") ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-8xl font-bold opacity-80">
                      {project.name
                        .split(" ")
                        .map((word: string) => word[0])
                        .join("")}
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Title and Status */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-3 md:mb-4">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 hover:text-primary-600 dark:hover:text-primary-500">
                      {project.name}
                    </h1>
                    <div
                      className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-gray-600 rounded-full backdrop-blur-sm text-xs ${
                        project.status === "Completed"
                          ? "bg-green-200"
                          : project.status === "In Progress"
                          ? "bg-yellow-200"
                          : "bg-red-200"
                      }`}
                    >
                      <FaCheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="font-medium">{project.status}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-gray-600 bg-gray-200/90 rounded-full backdrop-blur-sm text-xs ">
                      <FaClock className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="font-medium">{project.duration}</span>
                    </div>
                  </div>
                  <p className="hidden md:block text-sm md:text-xl text-gray-600 px-5 py-3 max-w-3xl leading-relaxed bg-slate-50 rounded-xl">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons - Removed GitHub and Live Links */}
            <div className="p-4 md:p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium text-sm md:text-base"
                >
                  <FaArrowLeft className="w-4 h-4" />
                  <span>Back to Projects</span>
                </button>
              </div>
            </div>

            {/* Technologies */}
            <div className="p-4 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                <FaCode className="text-primary-600 w-4 h-4 md:w-5 md:h-5" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs md:text-sm font-medium border border-primary-200 dark:border-primary-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
                About This Project
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {project.detailedDescription
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 md:mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 flex items-center gap-2">
                <FaStar className="text-primary-600 w-4 h-4 md:w-5 md:h-5" />
                Key Features
              </h2>
              <ul className="space-y-2 md:space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 flex items-center gap-2">
                <FaLightbulb className="text-primary-600 w-4 h-4 md:w-5 md:h-5" />
                Challenges & Solutions
              </h2>
              {project.challenges && project.challenges.length > 0 ? (
                <ul className="space-y-3 md:space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center text-xs md:text-sm font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Challenges and solutions will be updated soon.
                </p>
              )}
            </div>

            {/* Technical Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 flex items-center gap-2">
                <FaCog className="text-primary-600 w-4 h-4 md:w-5 md:h-5" />
                Training Implementation
              </h2>
              <div className="space-y-3 md:space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 md:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm md:text-base">
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies
                      .filter((tech) =>
                        [
                          "Training software",
                          "Video analysis",
                          "GPS trackers",
                          "Performance tracking",
                          "Technical drills",
                          "Skills development",
                        ].includes(tech)
                      )
                      .map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 md:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm md:text-base">
                    Physical Training
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies
                      .filter((tech) =>
                        [
                          "Physical conditioning",
                          "Endurance training",
                          "Strength training",
                          "Fitness assessment",
                          "Injury prevention",
                          "Sports nutrition",
                          "Heart rate monitoring",
                          "Recovery techniques",
                          "Mobility work",
                          "Athletic development",
                          "Sports science",
                        ].includes(tech)
                      )
                      .map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 md:px-3 md:py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-12 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-8 text-center">
              Other Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.id}`}
                    className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                      {relatedProject.image ? (
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center">
                          <div className="text-white text-2xl md:text-4xl font-bold opacity-80">
                            {relatedProject.name
                              .split(" ")
                              .map((word: string) => word[0])
                              .join("")}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {relatedProject.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                        {relatedProject.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
