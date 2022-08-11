import page from 'page';

const pageDom = document.querySelector('.page');

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

async function controller(context) {
  const path = context.path;
  const name = path === '/' ? 'index' : context.routePath.slice(1);
  const webURL = `../pages/${name}/index.html?${context.querystring}`;
  try {
    const res = await fetch(webURL);
    const data = await res.text();
    pageDom.innerHTML = data;
  } catch (error) {
    pageDom.innerHTML = `ERROR PAGE`;
    console.log(error);
  }

  const cssURL = `../pages/${name}/index.css`;
  console.log(cssURL);
  try {
    const res = await fetch(cssURL);
    const data = await res.text();
    addStyle(data);
  } catch (error) {
    console.log(error);
  }

  const jsURL = `../pages/${name}/index.js`;
  console.log(jsURL);
  try {
    const res = await fetch(jsURL);
    const data = await res.text();
    addScript(data);
  } catch (error) {
    console.log(error);
  }
}

page.base('/vite-app');

page('/welcome', controller);
page('/login', controller);
page('/video', controller);
page('/watch', controller);

page.start();
