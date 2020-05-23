import React, {useEffect} from 'react';

import TimelineItem from './TimelineItem';
import createCounter from '../utils/counter';
import {get, getLength} from '../utils/github';
import {
  CONTRIBUTORS_URL,
  TAGS_URL,
  REPO_URL,
  TIMELINE_DATA,
} from '../constants';

import '../libs/creative';

function Timeline() {
  useEffect(() => {
    createCounter('counter-contributors', getLength(CONTRIBUTORS_URL), 0);
    createCounter('counter-versions', getLength(TAGS_URL), 0);
    createCounter('counter-stars', get(REPO_URL, 'stargazers_count'), 0);
    createCounter('counter-forks', get(REPO_URL, 'forks_count'), 0);
  }, []);

  return (
    <div className="container py-2">
      {TIMELINE_DATA.map((data, index) => (
        <TimelineItem
          key={data.date}
          index={index}
          isFirst={index === 0}
          isLast={index === TIMELINE_DATA.length - 1}
          {...data}
        />
      ))}
    </div>
  );
}

// Mask resize
const resizeMask = () => {
  const headerHeight = $('header').outerHeight();
  $('.mask').height(headerHeight);
};

$(document).ready(() => {
  resizeMask();
  $(window).on('load resize', resizeMask);
});

export default Timeline;
