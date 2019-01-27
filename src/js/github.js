export const CONTRIBUTORS_URL = 'https://api.github.com/repos/eventol/eventol/contributors';
export const TAGS_URL = 'https://api.github.com/repos/eventol/eventol/tags';
export const REPO_URL = 'https://api.github.com/repos/eventol/eventol';

export const get = (url, field) => {
  return fetch(url)
    .then(res => res.json())
    .then(json => json[field]);
}

export const getLength = url => {
  return fetch(url)
    .then(res => res.json())
    .then(json => json.length());
}
