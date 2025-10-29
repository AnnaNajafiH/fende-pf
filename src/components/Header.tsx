import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaMoon, FaSun, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import LanguageSelector from "./LanguageSelector";
import logoImage from "../assets/images/fende2.jpg";

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
    { name: t("header.experience"), path: "/Experience" },
    { name: t("header.certificates"), path: "/certificates" },
    { name: t("header.champions"), path: "/champions" },
    { name: t("header.contact"), path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group transition-colors">
            <div className="w-10 h-10 mr-3 overflow-hidden rounded-full border-2 border-blue-400 dark:border-blue-600 shadow-md">
              <img
                src={logoImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                {personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400 font-light border-t border-gray-300 dark:border-gray-600 pt-0.5 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                Football Trainer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path //location.pathname → The current path
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
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <FaSun className="w-5 h-5 text-yellow-200 hover:text-blue-400" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
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
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
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
                  aria-label={
                    isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {isDarkMode ? (
                    <FaSun className="w-5 h-5" />
                  ) : (
                    <FaMoon className="w-5 h-5" />
                  )}
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
