import React, { FC } from "react";
import "./EducationSkillsPage.scss";
import data from "../../data/education.json";
import skills from "../../data/skills.json";

const EducationSkillsPage = () => {
  return (
    <div className="EducationSkillsPage">
      <h1>Education & Skills</h1>
      <div className="edu-skills">
        <div className="edu">
          {data.map((obj) => {
            return (
              <div className="edu-cards" key={obj.id}>
                <p>{obj.year}</p>
                <h4>{obj.programme}</h4>
                <p>{obj.university}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="skills">
        {skills.map((obj) => {
            return (
              <div className="skills-cards">
                <p>{obj.rating}</p>
                <h5>{obj.stack}</h5>
              </div>
            );
          })}
        </div> */}
        <div className="skill-wrapper">
          {
            skills.map((obj)=>{
              return <div className="skill-lt" key={obj.id}>
              <h4>{obj.stack}</h4>
              <span className="count-inner">
                <span>{obj.rating}</span>%
              </span>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: obj.rating+"%" }}></div>
              </div>
            </div>
            })
}
        </div>
      </div>
    </div>
  );
};

export default EducationSkillsPage;
