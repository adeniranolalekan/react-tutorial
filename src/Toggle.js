import React from 'react';

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // This binding is necessary to make `this` work in the callback

        // there are other alternatives to this annoying binding techniques
        // 1. *experimantal* syntax...... handleClick =() =>{}

        // 2. use an arrow function in the callback <button onClick={() => this.handleClick()}>

        // The problem with this syntax is that a different callback is created each time the LoggingButton renders.
        // In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.
        this.handleClick = this.handleClick.bind(this);
/*
        <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>*/

       /* The above two lines are equivalent, and use arrow functions
        and Function.prototype.bind respectively.

            In both cases, the e argument representing the React event
        will be passed as a second argument after the ID. With an arrow function,
        we have to pass it explicitly, but with bind any further arguments are
        automatically forwarded.*/

    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}