import React from 'react';
import ReactDOM from 'react-dom';

import createCounter from './counter';
import Timeline from './components/Timeline.jsx';
import {get, getLength} from './github';
import {CONTRIBUTORS_URL, TAGS_URL, REPO_URL} from './constants';


// Mask resize
const resizeMask = () => {
  const headerHeight = $('header').outerHeight();
  $('.mask').height(headerHeight);
};

$(document).ready(() => {
  resizeMask();
  $(window).on('load resize', resizeMask);
});

createCounter('counter-contributors', getLength(CONTRIBUTORS_URL), 0);
createCounter('counter-versions', getLength(TAGS_URL), 0);
createCounter('counter-stars', get(REPO_URL, 'stargazers_count'), 0);
createCounter('counter-forks', get(REPO_URL, 'forks_count'), 0);

ReactDOM.render(<Timeline />, document.getElementById('timeline-events'));
