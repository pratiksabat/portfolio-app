import React, { FC } from 'react';
import './ExperiencePage.scss';
import data from '../../data/expereince.json'

const ExperiencePage = () => {
  return (
    <div className='ExperiencePage'>
      <h1>Experience</h1>
      {
        data.map((expereince) => {
          return <div className="exp-card">
            <div className="work-info">
                <h4>{expereince.postition}</h4>
                <p>{expereince.mode}</p>
                <p>{expereince.timeline}</p>
                <p>{expereince.type}</p>
            </div>
            <div className="about-work">
                <h4>{expereince.company}</h4>
                {
                  expereince.work.map(work => <p> - {work}</p>)
                }
            </div>
          </div>
        })
      }

    </div>
  )
}

export default ExperiencePage;
