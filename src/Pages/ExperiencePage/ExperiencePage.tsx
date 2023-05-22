import React, { FC } from 'react';
import './ExperiencePage.scss';
import data from '../../data/expereince.json'
import VerticalTimelineComponent from '../../Components/VerticalTimeline/VerticalTimeline';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
  return (
    <motion.div className='ExperiencePage'>
      <h1>Experience</h1>
      <VerticalTimelineComponent timelineData={data}/>
    </motion.div>
  )
}

export default ExperiencePage;
