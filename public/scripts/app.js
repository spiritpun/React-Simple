'use strict';

// JSX
var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js with babel compiled.'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
