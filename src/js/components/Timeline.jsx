import React from 'react';

import TimelineItem from './TimelineItem.jsx';
import {CHANGELOG} from '../constants.js';


const Timeline = () => (
  <div className='container py-2'>
    <TimelineItem
      date='Jan 9th 2019 7:00 AM'
      title='Day 1 Orientation'
      text='Welcome to the campus, introduction and get started with the tour.'
      muted
      isFirst
    />

    <TimelineItem
      date='Jan 10th 2019 8:30 AM'
      title='Day 2 Sessions'
      text='Sign-up for the lessons and speakers that coincide with your course syllabus. Meet and greet with instructors.'
      details={CHANGELOG}
      align='left'
      active
    />

    <TimelineItem
      date='Jan 11th 2019 8:30 AM'
      title='Day 3 Sessions'
      text='Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park Godard kogi, next level irony ennui twee squid fap selvage. Meggings flannel Brooklyn literally small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights, viral fap cronut leggings squid chillwave pickled gentrify mustache.'
    />

    <TimelineItem
      date='Jan 12th 2019 11:30 AM'
      title='Day 4 Wrap-up'
      text='Join us for lunch in Bootsy cafe across from the Campus Center.'
      align='left'
      isLast
    />
  </div>
);

export default Timeline;
