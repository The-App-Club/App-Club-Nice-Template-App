console.log('watch page');

console.log(document.querySelector('body'));

const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);

console.log(parameters);

console.log(parameters.get('videoId'));
