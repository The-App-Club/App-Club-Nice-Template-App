import {Router} from '@vaadin/router';
const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/', component: 'top-page'},
  {path: '/users', component: 'user-list-page'},
  {path: '/users/:userId', component: 'user-detail-page'},
  {path: '/users/:userId/projects', component: 'project-list-page'},
  {
    path: '/users/:userId/projects/:projectId',
    component: 'project-detail-page',
  },
  {path: '/nice', component: 'nice-page'},
]);

window["routerContext"] = router
