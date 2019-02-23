import React from 'react';

import TimelineItem from './TimelineItem.jsx';
import {TIMELINE_DATA} from '../constants.js';


const Timeline = () => (
  <div className='container py-2'>
    {
      TIMELINE_DATA.map((data, index) => (
        <TimelineItem
          isFirst={index === 0}
          isLast={index === TIMELINE_DATA.length - 1}
          {...data}
        />
      ))
    }
  </div>
);

export default Timeline;
