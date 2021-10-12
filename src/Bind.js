import React, { Component } from 'react'

export class Bind extends Component {

    
    state = {
            isOn: true,
    };

    handleClick = () => {
         this.setState((prevState) => ({
             isOn: !prevState.isOn,
         }));
    }
    
    render() {
        const { isOn } = this.state;
        return (
            <button onClick={this.handleClick}>{isOn ? 'ON' : 'OFF' }</button>
        )
    }
}

export default Bind
