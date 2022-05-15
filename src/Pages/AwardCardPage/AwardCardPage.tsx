import React, { FC } from 'react';
import './AwardCardPage.scss';
import data from '../../data/awards.json'
import AwardCard from '../../Components/AwardCard/AwardCard';

const AwardCardPage = () => {
  return (
    <div className='AwardCardPage'>
       <h1>Awards</h1>
      <div className='cardAward'>
      {
      data.map((award)=><AwardCard data={award}/>)
      }
      </div>
    </div>
  )
}

export default AwardCardPage;
