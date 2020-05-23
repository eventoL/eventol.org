export const get = (url, field) =>
  fetch(url)
    .then(res => res.json())
    .then(json => json[field]);

export const getLength = url =>
  fetch(url)
    .then(res => res.json())
    .then(json => json.length);
