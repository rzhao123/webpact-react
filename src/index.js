import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/test/app.component'; 用于测试react
import App from './components/app.component';

let environment = process.env.NODE_ENV;

console.log(environment);

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
