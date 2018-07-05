import React from 'react';
import Welcome from './welcome.component';
import Clock from './clock.component';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="React" />
                <Clock />
            </div>
        );
    }
}
