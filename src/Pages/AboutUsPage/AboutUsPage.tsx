import React, { FC } from 'react';
import AboutCard from '../../Components/AboutCard/AboutCard';
import './AboutUsPage.scss';
import data from '../../data/aboutUs.json'

const AboutUsPage = () => {
  return (
    <div className="AboutUsPage">
      <h1>What i do ?</h1>
      <div className="Card">
    {data.map((obj)=>  <AboutCard data={obj}  key={obj.id}/>)}
    </div>
    </div>
  )
}
export default AboutUsPage;
