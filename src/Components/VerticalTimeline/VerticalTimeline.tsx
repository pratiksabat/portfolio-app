import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const VerticalTimelineComponent = ({ timelineData }) => {
   return (
    <VerticalTimeline>
      { timelineData.map((item, index) => (
        <VerticalTimelineElement
          key={ index }
          date={ item.date }
          dateClassName="date"
          iconStyle={ { background: 'rgb(33, 150, 243)', color: '#fff' } }
          contentStyle={ { background: '#000', color: '#fff' } } // Add contentStyle for background and text color
          contentArrowStyle={ { borderRight: '7px solid #000' } } // Add contentArrowStyle for arrow color
        >
          <h3 className="vertical-timeline-element-title">{ item.postition }</h3>
          
          <ul>
            {
              item.work.map(work => {
                return <li>{work }</li>
              })
            }
            </ul>

        </VerticalTimelineElement>
      )) }
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
