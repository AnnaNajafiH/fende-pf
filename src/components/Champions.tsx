import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { championAwards } from "../data/champions";
import type { ChampionAward } from "../data/champions";
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Champions: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedAward, setSelectedAward] = useState<ChampionAward | null>(
    null
  );

  return (
    <section
      id="champions"
      className="py-20 bg-gradient-to-br from-blue-50 to-primary-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {t("champions.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t("champions.subtitle")}
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {championAwards.map((award) => (
              <div
                key={award.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedAward(award)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={award.image}
                    alt={t(award.titleKey)}
                    className="w-full h-full object-contain mt-2 hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://via.placeholder.com/400x250?text=Award+Image";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <FaTrophy className="text-yellow-500 mr-2" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {t(award.titleKey)}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {t(award.descriptionKey)}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {award.year}
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      {award.location[
                        i18n.language as keyof typeof award.location
                      ] || award.location.en}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Award Detail Modal */}
          {selectedAward && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <img
                    src={selectedAward.image}
                    alt={t(selectedAward.titleKey)}
                    className="w-full h-64 mt-2 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://via.placeholder.com/800x400?text=Award+Image";
                    }}
                  />
                  <button
                    onClick={() => setSelectedAward(null)}
                    className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FaTrophy className="text-yellow-500 mr-3 text-2xl" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {t(selectedAward.titleKey)}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {t(selectedAward.descriptionKey)}
                  </p>
                  <div className="flex justify-between text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{selectedAward.year}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>
                        {selectedAward.location[
                          i18n.language as keyof typeof selectedAward.location
                        ] || selectedAward.location.en}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedAward(null)}
                    className="w-full bg-gradient-to-r from-primary-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-colors hover:from-primary-600 hover:to-blue-600 mt-4"
                  >
                    {t("champions.closeButton")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Champions;
