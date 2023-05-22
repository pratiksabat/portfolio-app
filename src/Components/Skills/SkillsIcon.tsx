import React from 'react';
import { IconContext } from 'react-icons';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import {motion} from 'framer-motion'
const SkillIcons = ({ skills }) => {
  const renderIcon = (skills) => {
    const res = skills.map((skill) => skill.stack).join(",");
    return res;
  };

  return (
    <motion.img initial={ { opacity: 0 } }
      whileInView={ {
        opacity: 1,
        transition: { duration: 2, ease: 'backIn' },
      } } src={ `https://skillicons.dev/icons?i=${renderIcon(skills)}` } alt='skills' width={ '70%' } height={ '80%' } />
  );
};

export default SkillIcons;