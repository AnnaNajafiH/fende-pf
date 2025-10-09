import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaMoon, FaSun, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { name: t("header.home"), path: "/" },
    { name: t("header.about"), path: "/about" },
    { name: t("header.projects"), path: "/projects" },
    { name: t("header.contact"), path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex flex-col items-start group transition-colors"
          >
            <div className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {personalInfo.name === "Nahid Najafi" ? "Na•N" : personalInfo.name.split(" ").map((name: string) => name[0]).join("")}
            </div>
            <div className="w-9 h-px bg-primary-500 my-1"></div>
            <div className="text-xxs text-gray-500 dark:text-gray-400 font-medium tracking-wide" style={{ fontSize: "0.5rem" }}>
              Football Trainer
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path    //location.pathname → The current path
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <FaSun className="w-5 h-5 text-yellow-200 hover:text-blue-400" /> : <FaMoon className="w-5 h-5" />}
            </button>

            <div className="flex items-center space-x-4 border-l border-gray-400 dark:border-gray-700 pl-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-300 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-6 h-6" />}
          </button>
          
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  } transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <LanguageSelector />
                <button
                  onClick={toggleDarkMode}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                </button>
                <div className="flex items-center space-x-4">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
