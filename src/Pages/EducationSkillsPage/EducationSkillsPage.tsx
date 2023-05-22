import React, { FC } from "react";
import "./EducationSkillsPage.scss";
import data from "../../data/education.json";
import skills from "../../data/skills.json";
import SkillIcons from '../../Components/Skills/SkillsIcon';
import {motion} from 'framer-motion'
const EducationSkillsPage = () => {
  return (
    <div className="EducationSkillsPage">
      <h1>Education & Skills</h1>
      <div className="edu-skills">
        <motion.div initial={ { opacity: 0 } }
          whileInView={ {
            opacity: 2,
            transition: { duration: 1, ease: 'easeIn' },
          } } >
          {data.map((obj) => {
            return (
              <div className="edu-cards" key={obj.id}>
                <p>{obj.year}</p>
                <h4>{obj.programme}</h4>
                <p>{obj.university}</p>
                <p>{obj.grade}</p>
              </div>
            );
          })}
        </motion.div>
        <SkillIcons skills={skills}/>
      </div>
    </div>
  );
};

export default EducationSkillsPage;
