import React from 'react';
import ReactDOM from 'react-dom';

let environment = process.env.NODE_ENV;

console.log(environment);

ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')
);
