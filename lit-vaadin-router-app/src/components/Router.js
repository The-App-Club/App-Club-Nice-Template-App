import { Router } from '@vaadin/router';

const appRoot = document.querySelector('#root');

const router = new Router(appRoot);

router.setRoutes([
  {
    path: '/',
    component: 'home-page',
    action: async () => {
      await import('./Home.js');
    },
  },
  {
    path: '/contact',
    component: 'contact-page',
    action: async () => {
      await import('./Contact.js');
    },
  },
  {
    path: '/about',
    component: 'about-page',
    action: async () => {
      await import('./About.js');
    },
  },
  {
    path: '/table',
    component: 'table-page',
    action: async () => {
      await import('./Table.js');
    },
  },
  {
    path: '/team/:teamId',
    component: 'team-page',
    action: async () => {
      await import('./Team.js');
    },
  },
  {
    path: '/my-page',
    component: 'my-page',
    action: async () => {
      await import('./MyPage.js');
    },
  },
]);

window['routerContext'] = router;
