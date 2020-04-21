import { useState, useEffect } from "react";

function PortfolioButton() {
  const dispNone = {
    display: "none",
  };

  const [languages] = useState([
    "HTML",
    "CSS (PostCSS, SCSS)",
    "JS (Vanilla, Vue, React, jQuery)",
    "Ruby (Rails)",
    "Python (Flask)",
    "PHP (Laravel)",
  ]);

  function togglePortfolio() {
    document.querySelector("#portfolio").classList.toggle("offcanvas");
  }

  useEffect(() => {
    document.querySelector("#portfolio").removeAttribute("style");
  });

  return (
    <>
      <button
        className="px-4 py-2 mx-1 font-bold transition-all duration-300 bg-white rounded-t text-grey-800 hover:bg-gray-600 hover:text-white"
        onClick={togglePortfolio}
      >
        Portfolio
      </button>
      <div
        id="portfolio"
        className="fixed inset-x-0 bottom-0 mx-4 transition-all duration-300 bg-white rounded-t offcanvas"
        style={dispNone}
      >
        <div className="relative p-4 md:p-8">
          <button
            className="absolute top-0 right-0 mt-4 mr-4 text-2xl font-bold transition-all duration-300 leading-mini hover:cursor-pointer hover:text-gray-600"
            onClick={togglePortfolio}
          >
            &times;
          </button>
          <p className="pb-2 mr-2 text-2xl font-bold leading-none border-b-2">
            Languages
          </p>
          <ul className="mt-2 ml-2 ml-6 list-disc">
            {languages.map((lang, index) => (
              <li className="text-sm text-gray-800" key={index}>
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default PortfolioButton;
