import React from 'react';

export default class Clock extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerTick = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerTick);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>现在时间为 {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
