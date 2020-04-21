import { useState, useEffect } from "react";

function ResumeButton() {
  const dispNone = {
    display: "none",
  };

  const [experience] = useState([
    "NextLevel Web Strategies - Cherry Hill, NJ",
    "Lead Web Developer, Content Import Specialist",
  ]);

  const [education] = useState([
    "Monmouth University - West Long Branch",
    "B.S in Computer Science w/ Concentration in Applied Programming",
  ]);

  function toggleResume() {
    document.querySelector("#resume").classList.toggle("offcanvas");
  }

  useEffect(() => {
    document.querySelector("#resume").removeAttribute("style");
  });

  return (
    <>
      <button
        className="px-4 py-2 mx-1 font-bold transition-all duration-300 bg-white rounded-t text-grey-800 hover:bg-gray-600 hover:text-white"
        onClick={toggleResume}
      >
        Resume
      </button>
      <div
        id="resume"
        className="fixed inset-x-0 bottom-0 mx-4 transition-all duration-300 bg-white rounded-t offcanvas"
        style={dispNone}
      >
        <div className="relative p-4 md:p-8">
          <button
            className="absolute top-0 right-0 mt-4 mr-4 text-2xl font-bold transition-all duration-300 leading-mini hover:cursor-pointer hover:text-gray-600"
            onClick={toggleResume}
          >
            &times;
          </button>
          <p className="pb-2 mr-2 text-2xl font-bold leading-none border-b-2">
            Experience
          </p>
          <ul className="my-4 ml-2 ml-6 list-disc">
            {experience.map((job, index) => (
              <li className="text-sm text-gray-800" key={index}>
                {job}
              </li>
            ))}
          </ul>
          <p className="pb-2 mr-2 text-2xl font-bold leading-none border-b-2">
            Education
          </p>
          <ul className="my-4 ml-2 ml-6 list-disc">
            {education.map((school, index) => (
              <li className="text-sm text-gray-800" key={index}>
                {school}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ResumeButton;
