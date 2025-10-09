import React from 'react';
import { experience } from '../data/portfolio';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {job.title}
                    </h3>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                      {job.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1 mb-1">
                      <FaCalendar className="text-xs" />
                      <span>{job.startDate} - {job.endDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-xs" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {job.description.map((point: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-300">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
