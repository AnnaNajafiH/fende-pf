import React from 'react';
import { education } from '../data/portfolio';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { t } from 'i18next';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-6">
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <FaGraduationCap className="text-primary-600 dark:text-primary-400" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                      {edu.school}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1 mb-1">
                      <FaCalendar className="text-xs" />
                      <span>{edu.graduationDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-xs" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
