import React from 'react';
window.React = React;

import Router from 'react-router';

import routes from './config/routes.jsx';

Router.run(routes, function(Handler){
  React.render(<Handler />, document.getElementById('app'));
});



// "colorScheme": "https://color.adobe.com/Turquoise-Blue-White-color-theme-6051005/"
