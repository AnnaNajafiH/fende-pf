import React from 'react';
import { personalInfo } from '../data/portfolio';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation(); 
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name}. {t('footer.rightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
