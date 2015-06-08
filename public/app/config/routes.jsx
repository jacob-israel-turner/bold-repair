import React from 'react';

import { App, Services, About } from './../main/components';
import { Route } from 'react-router';


var routes = (
  <Route name='app' path='/' handler={ App }>
    <Route name='services' path='/services' handler={ Services } />
    <Route name='about' path='/about' handler={ About } />
  </Route>
)

export default routes;
