import React from 'react';
import ReactDOM from 'react-dom';

let environment = process.env.NODE_ENV;

console.log(environment);

function formatName(user) {
    if (user) {
        return user.firstName + ' ' + user.lastName;
    }
    return 'React';
}

const user = {
    firstName: 'Robin',
    lastName: 'Zhao'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
