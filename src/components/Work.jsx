import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2021-2022",
    title: "2CV Ltd, Data Services Executive",
    details: [
      "Programmed and maintained online surveys with Forsta Surveys (an online survey deployment platform) using a combination of HTML, CSS, Javascript, and Python. Projects include:",
      "Luxury fashion company – Fully scripted survey questions with complex routing logic. Implemented changes and updates to survey questions and layout. Developed Python and Excel tools to streamline survey scripting tasks (e.g. image processing, code templates). Liaised with colleagues and suppliers to meet the deadlines for survey quotas.",
      "Digital entertainment company – Optimized front-end code resulting in shorter loading times and smoother survey-taking experience. Conducted peer testing and data validation checks to ensure robust survey performance prior to launch.",
    ],
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
