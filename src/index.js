import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcome.component';

let environment = process.env.NODE_ENV;

console.log(environment);

const element = <Welcome name="React" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
