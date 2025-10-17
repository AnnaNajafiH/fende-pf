import React from "react";
import { FaCertificate } from "react-icons/fa";
import { certificates } from "../data/certificates";
import { useTranslation } from "react-i18next";

const Certificates: React.FC = () => {
  const { t, ready } = useTranslation();

  // Wait for translations to load
  if (!ready) return <div>Loading...</div>;

  return (
    <section id="certificates" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
            <FaCertificate className="mr-3 text-blue-500" />
            {t("certificates.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto">
            {t("certificates.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="relative h-50 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.classList.add(
                        "bg-gradient-to-br",
                        "from-primary-500",
                        "to-blue-500",
                        "flex",
                        "items-center",
                        "justify-center"
                      );
                      const initials = document.createElement("div");
                      initials.className = "text-white text-4xl font-bold";
                      initials.textContent = "FC"; // Football Certification
                      target.parentElement.appendChild(initials);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col h-48">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-3">
                    {certificate.title}
                  </h3>
                </div>

                <div className="flex-grow"></div>

                <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {certificate.date}
                  </p>
                  <div className="h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <FaCertificate className="text-primary-600 dark:text-primary-400 text-xs" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t("certificates.footer")}
          </p>
          <div className="mt-4 text-gray-500 dark:text-gray-500 text-sm">
            {t("certificates.lastUpdated")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
