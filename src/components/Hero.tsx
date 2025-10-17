import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail, FiArrowDown, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import profileImage from "../assets/images/fende1.jpg"; 

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom section-padding text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div
            className="mx-auto mb-8 relative"
            style={{ width: "210px", height: "210px" }}
          >
            <img
              src={profileImage}
              alt={`${personalInfo.name} - Profile Picture`}
              className="w-full h-full rounded-full object-cover shadow-lg ring-4 ring-primary-200 dark:ring-primary-800 transition-all duration-300 hover:ring-primary-300 dark:hover:ring-primary-700"
              onError={(e) => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            {/* Fallback initials */}
            <div
              className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-blue-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg absolute top-0 left-0"
              style={{ display: "none" }}
            >
              {personalInfo.name
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            {t("hero.name")}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-400 mb-6">
            {t("hero.title")}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            {t("hero.tagline")}
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            📍 {t("hero.location")}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-lg"
            >
              <FiMail size={20} />
              {t("hero.button")}
            </a>

            {/* <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-3 text-lg"
            >
              <FiDownload size={20} />
              Download Resume
            </a> */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <FiArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
