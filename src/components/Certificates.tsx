import React, { useState } from "react";
import { FaCertificate } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { certificates } from "../data/certificates";
import { useTranslation } from "react-i18next";

const Certificates: React.FC = () => {
  const { t, ready } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const certificatesPerPage = 6;

  // Calculate the certificates to be displayed on the current page
  const indexOfLastCertificate = currentPage * certificatesPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
  const currentCertificates = certificates.slice(
    indexOfFirstCertificate,
    indexOfLastCertificate
  );
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

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
          {currentCertificates.map((certificate) => (
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

        {/* Pagination Controls */}
        <div className="mt-10 flex flex-wrap justify-center items-center">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-2 mr-1 sm:mr-2 rounded-md flex items-center text-sm sm:text-base ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
                : "bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-700 dark:hover:bg-primary-600"
            }`}
          >
            <FaChevronLeft className="mr-1" />{" "}
            <span className="hidden sm:inline">{t("pagination.previous")}</span>
          </button>

          <div className="mx-2 sm:mx-4 flex items-center flex-wrap justify-center">
            {totalPages <= 7 ? (
              // Show all pages if 7 or fewer
              Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 mx-0.5 sm:mx-1 my-1 rounded-full flex items-center justify-center transition-all ${
                    currentPage === i + 1
                      ? "bg-primary-500 text-white font-bold"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))
            ) : (
              // Show limited pages with ellipsis for larger page counts
              <>
                {/* First page */}
                <button
                  onClick={() => paginate(1)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 mx-0.5 sm:mx-1 my-1 rounded-full flex items-center justify-center transition-all ${
                    currentPage === 1
                      ? "bg-primary-500 text-white font-bold"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  1
                </button>

                {/* Show ellipsis if not near the beginning */}
                {currentPage > 3 && (
                  <span className="mx-1 sm:mx-2 text-gray-500 dark:text-gray-400">
                    ...
                  </span>
                )}

                {/* Pages around current page */}
                {Array.from({ length: totalPages }, (_, i) => {
                  const pageNum = i + 1;
                  if (
                    pageNum !== 1 &&
                    pageNum !== totalPages &&
                    (pageNum === currentPage - 1 ||
                      pageNum === currentPage ||
                      pageNum === currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => paginate(pageNum)}
                        className={`w-8 h-8 sm:w-10 sm:h-10 mx-0.5 sm:mx-1 my-1 rounded-full flex items-center justify-center transition-all ${
                          currentPage === pageNum
                            ? "bg-primary-500 text-white font-bold"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  }
                  return null;
                })}

                {/* Show ellipsis if not near the end */}
                {currentPage < totalPages - 2 && (
                  <span className="mx-1 sm:mx-2 text-gray-500 dark:text-gray-400">
                    ...
                  </span>
                )}

                {/* Last page */}
                <button
                  onClick={() => paginate(totalPages)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 mx-0.5 sm:mx-1 my-1 rounded-full flex items-center justify-center transition-all ${
                    currentPage === totalPages
                      ? "bg-primary-500 text-white font-bold"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 ml-1 sm:ml-2 rounded-md flex items-center text-sm sm:text-base ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
                : "bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-700 dark:hover:bg-primary-600"
            }`}
          >
            <span className="hidden sm:inline">{t("pagination.next")}</span>{" "}
            <FaChevronRight className="ml-1" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t("certificates.showing")} {indexOfFirstCertificate + 1} -{" "}
            {Math.min(indexOfLastCertificate, certificates.length)}{" "}
            {t("certificates.of")} {certificates.length}{" "}
            {t("certificates.entries")}
          </p>
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
