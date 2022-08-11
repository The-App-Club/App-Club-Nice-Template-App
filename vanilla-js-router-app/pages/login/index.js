console.log('login page');

console.log(document.querySelector('body'));

var loginDom = document.querySelector('.login');

loginDom.addEventListener('click', (e) => {
  console.log(e);
  onNavClick('/video');
});
