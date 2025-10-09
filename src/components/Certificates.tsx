import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { certificates } from '../data/certificates';
import { useTranslation } from 'react-i18next';

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
            {t('certificates.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {certificate.title}
                  </h3>
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 ml-2"
                      aria-label={`View ${certificate.title} certificate`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {certificate.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {certificate.date}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {t(`certificatesList.${certificate.id}.description`, certificate.description)}  
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
