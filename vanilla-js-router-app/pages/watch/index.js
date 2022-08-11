console.log('watch page');

console.log(document.querySelector('body'));

var parameters = new URLSearchParams(window.location.search);

console.log(parameters);

console.log(parameters.get('videoId'));

console.log(document.querySelector('.video'));

var v = document.querySelector('.video');

v.innerHTML = `Video No.${parameters.get('videoId')}`;
