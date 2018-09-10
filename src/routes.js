import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const UserManager = Loadable({
  loader: () => import('./views/Pages/UserManager'),
  loading: Loading,
});

const Setting = Loadable({
  loader: () => import('./views/Pages/SettingControl'),
  loading: Loading,
});

const JackpotManager = Loadable({
  loader: () => import('./views/Pages/JackpotManager'),
  loading: Loading,
});

const ManagerTable = Loadable({
  loader: () => import('./views/Pages/ManagerTable'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/userManager', name: 'UserManager', component: UserManager },
  { path: '/setting', name: 'Setting', component: Setting },
  { path: '/jackpotManager', name: 'JackpotManager', component: JackpotManager },
  { path: '/managerTable', name: 'ManagerTable', component: ManagerTable },

];

export default routes;
