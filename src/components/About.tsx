import React from 'react';
import { personalInfo } from '../data/portfolio';
import profileImage2 from "../assets/images/fende3.jpg"; 
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-6">
            {t('aboutMe.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 order-2 md:order-none">
              {/* Subject/Headline */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-400">
                  {t('aboutMe.about.subject')}    
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
              </div>

              {/* Introduction */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-justify">
                  {t('aboutMe.about.intro')}
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t('aboutMe.about.background')}
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t('aboutMe.about.passion')}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t('aboutMe.about.endWords')}
                </p>
              </div>

              {/* Key Stats or Highlights */}
              {/* <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
              </div> */}
              
              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {t('aboutMe.about.technologies')}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {personalInfo.about.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-primary-100 dark:from-blue-900/30 dark:to-primary-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>{t('aboutMe.about.button')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="relative order-1 md:order-none">
              <div className="w-full max-w-lg mx-auto">
                <div className="h-auto rounded-2xl shadow-2xl relative overflow-hidden">
                  <img
                    src={profileImage2}
                    alt={`${personalInfo.name} - About section photo`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback gradient with initials */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="text-white text-6xl font-bold opacity-80 relative z-10">
                      {personalInfo.name.split(' ').map((name: string) => name[0]).join('')}
                    </div>
                  </div>
                  {/* Overlay for better text readability when image is loaded */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
