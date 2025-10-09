import React from 'react';
import { useTranslation } from 'react-i18next';
import { skills } from '../data/portfolio';
import { FaCode, FaServer, FaDatabase, FaTools, FaCogs } from 'react-icons/fa';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    { 
      name: t('skills.languages'), 
      items: skills.languages,
      icon: <FaCode className="text-2xl" />,
      color: 'from-blue-500 to-purple-600'
    },
    { 
      name: t('skills.frameworks'),
      items: skills.frameworks,
      icon: <FaServer className="text-2xl" />,
      color: 'from-green-500 to-teal-600'
    },
    { 
      name: t('skills.databases'),
      items: skills.databases,
      icon: <FaDatabase className="text-2xl" />,
      color: 'from-orange-500 to-red-600'
    },
    { 
      name: t('skills.tools'), 
      items: skills.tools,
      icon: <FaTools className="text-2xl" />,
      color: 'from-purple-500 to-pink-600'
    },
    { 
      name: t('skills.other'), 
      items: skills.other,
      icon: <FaCogs className="text-2xl" />,
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {t('skills.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              {t('skills.text1')}
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {skillCategories.map((category, index: number) => (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 mx-auto"></div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.items.map((skill: string, skillIndex: number) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center justify-center group/skill"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      <span className="relative px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-200 group-hover/skill:bg-primary-50 dark:group-hover/skill:bg-primary-900/20 group-hover/skill:text-primary-700 dark:group-hover/skill:text-primary-300 cursor-default">
                        {skill}
                        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover/skill:border-primary-200 dark:group-hover/skill:border-primary-800 transition-colors duration-200"></div>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {t('skills.text2')}
            </p>
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-500 text-white font-medium rounded-full hover:from-primary-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>{t('skills.button')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
