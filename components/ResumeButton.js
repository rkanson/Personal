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
        className="bg-white text-grey-800 mx-1 py-2 px-4 rounded-t font-bold hover:bg-gray-600 hover:text-white transition-all duration-300"
        onClick={toggleResume}
      >
        Resume
      </button>
      <div
        id="resume"
        className="offcanvas transition-all duration-300 fixed inset-x-0 bottom-0 rounded-t bg-white mx-4"
        style={dispNone}
      >
        <div className="relative p-4 md:p-8">
          <button
            className="absolute right-0 top-0 mr-4 mt-4 text-2xl font-bold leading-mini hover:cursor-pointer hover:text-gray-600 transition-all duration-300"
            onClick={toggleResume}
          >
            &times;
          </button>
          <p className="text-2xl font-bold leading-none border-b-2 pb-2 mr-2">
            Experience
          </p>
          <ul className="my-4 ml-2 list-disc ml-6">
            {experience.map((job, index) => (
              <li className="text-sm text-gray-800" key={index}>
                {job}
              </li>
            ))}
          </ul>
          <p className="text-2xl font-bold leading-none border-b-2 pb-2 mr-2">
            Education
          </p>
          <ul className="my-4 ml-2 list-disc ml-6">
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
