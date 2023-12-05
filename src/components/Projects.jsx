import React from "react";
import ProjectItem from "./ProjectItem";
import avg_age_calcImg from "../assets/avg_age_calc.png";
import bmiImg from "../assets/bmi.png";
import notesImg from "../assets/notes.png";
import tube_appImg from "../assets/tube_app.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040] m-auto md:pl-20 px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900">Projects</h1>
      <p className="text-center py-8">
        Here are some projects that I have completed during my own time and on my course using a blend of HTML, CSS, JavaScript, React, and Vite.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={tube_appImg} title='Tube App' link='https://ryau91-tube-app.netlify.app/'/>
        <ProjectItem img={notesImg} title='Notes App' link='https://ryau91-post-it-note.netlify.app/'/>
        <ProjectItem img={bmiImg} title='BMI App' link='https://ryau91-bmi-calculator.netlify.app/'/>
        <ProjectItem img={avg_age_calcImg} title='Average Age App' link='https://ryau91-average-age-calculator.netlify.app/'/>
      </div>
    </div>
  );
};

export default Projects;
