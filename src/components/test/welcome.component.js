import React from 'react';

export default class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggleOn: true,
            name: 'Hello World!'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(_this => ({
            isToggleOn: !_this.isToggleOn
        }));
    }

    preventPop(name, e) {
        e.preventDefault();
        alert(name);
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <div>
                    <a href="https://reactjs.org" onClick={(e) => this.preventPop(this.state.name, e)}>
                        React
                    </a>
                </div>
            </div>
        );
    }
}
