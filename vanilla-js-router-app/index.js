//Get the Element with the Id 'root'
const rootDiv = document.getElementById('root');

//Declare the variables for welcome, login & contact html pages
let welcome = '';
let login = '';
let mypage = '';
let video = '';
let watch = '';

/**
 *
 * @param {String} page - Represents the page information that needs to be retrieved
 * @returns {String} resHtml - The Page's HTML is returned from the async invocation
 */

const loadPage = async (page) => {
  const response = await fetch(page);
  const resHtml = await response.text();
  return resHtml;
};

/**
 * The Async function loads all HTML to the variables 'welcome', 'login' & 'contact'
 */
const loadAllPages = async () => {
  welcome = await loadPage('./pages/welcome/index.html');
  login = await loadPage('./pages/login/index.html');
  mypage = await loadPage('./pages/mypage/index.html');
  video = await loadPage('./pages/video/index.html');
  watch = await loadPage('./pages/watch/index.html');
};

/**
 * The Main Function is an async function that first loads All Page HTML to the variables
 * Once the variables are loaded with the contents, then they are assigned to the 'routes' variable
 */
const main = async () => {
  await loadAllPages();
  rootDiv.innerHTML = welcome;
  routes = {
    '/': welcome,
    '/login': login,
    '/mypage': mypage,
    '/video': video,
    '/watch': watch,
  };
};

// Invoke the Main function
main();
/**
 *
 * @param {String} pathname - Pass the 'pathname' passed from onClick function of the link (index.html)
 * The function is invoked when any link is clicked in the html.
 * The onClick event on the html invokes the onNavClick & passes the pathname as param
 */

function addScript(jsString) {
  const script = document.createElement('script');
  script.textContent = jsString;
  document.body.appendChild(script);
}

function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.appendChild(style);
}

const onNavClick = async (pathname, params) => {
  let q = '?';
  if (params) {
    for (const [k, v] of params.entries()) {
      console.log(params);
      q = q + k + '=' + v + `&`;
    }
    q = q.substr(0, q.lastIndexOf('&'));
  }
  console.log(q);

  const cssURL = `./pages${pathname}/index.css`;
  console.log(cssURL);
  try {
    const res = await fetch(cssURL);
    const data = await res.text();
    setTimeout(() => {
      addStyle(data);
    }, 300);
  } catch (error) {
    console.log(error);
  }

  const jsURL = `./pages${pathname}/index.js`;
  console.log(jsURL);
  try {
    const res = await fetch(jsURL);
    const data = await res.text();
    setTimeout(() => {
      addScript(data);
    }, 300);
  } catch (error) {
    console.log(error);
  }

  if (q === '?') {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname];
  } else {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname + q
    );
    rootDiv.innerHTML = routes[pathname];
  }
};

/**
 * The Function is invoked when the window.history's state changes
 */
window.onpopstate = (e) => {
  console.log('onpopstate', e);
  rootDiv.innerHTML = routes[window.location.pathname];
};
