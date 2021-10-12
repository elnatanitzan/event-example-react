import React, { Component } from 'react';


export class StateWitoutBind extends Component {
    
    state = {
        isOn: true,
    };

    componentDidMount() {
        const restoreState = localStorage.getItem('isOn');
        const newState = restoreState === 'true' ? true : false;
        this.setState ({
            isOn: newState,
        })
        
    };

    componentDidUpdate() {
       const  {isOn}  = this.state;
       localStorage.setItem('isOn', isOn);
       console.log(this.state.isOn)
    };

    handleClick = () => {
        this.setState((prevState) => ({
            isOn: !prevState.isOn,
        }));
    };
    
    render() {
        const { isOn } = this.state;
        return (
            <>
            <div style={{textAlign: "center"}}>
                <button className={isOn ? "on" : "off"}  onClick={this.handleClick}>{isOn ? 'ON' : 'OFF'}</button>
            </div>

            <div className="o">
                <div className={isOn ? "light on" : "light off"}></div> 
            </div>
            </>
         )
    };
}

export default StateWitoutBind
