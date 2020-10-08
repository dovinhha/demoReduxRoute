import React from 'react';
import Home from './pages/Home';
import InfoContainer from './containers/InfoContainer';
import NotFound from './pages/NotFound';

const routes = [
  {
    path : '/',
    exact : true,
    main : () => <Home/>
  },
  {
    path : '/students',
    exact : true,
    main : () => <InfoContainer/>
  },
  {
    path : '',
    exact : false,
    main : () => <NotFound/>
  }
];

export default routes;