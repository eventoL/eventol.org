// Mask resize
const resizeMask = () => {
  const headerHeight = $('header').outerHeight();
  $('.mask').height(headerHeight);
}

$(document).ready(() => {
  resizeMask();
  $(window).on('load resize', resizeMask);
});

// Counters
import {get, getLength, CONTRIBUTORS_URL, TAGS_URL, REPO_URL} from './github';
import {createCounter} from './counter';

createCounter('counter-stars', getLength(CONTRIBUTORS_URL), 0);
createCounter('counter-versions', getLength(TAGS_URL), 0);
createCounter('counter-contributors', get(REPO_URL, 'stargazers_count'), 0);
createCounter('counter-forks', get(REPO_URL, 'forks_count'), 0);

