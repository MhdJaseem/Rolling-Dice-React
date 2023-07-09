import React, { Component } from 'react';

class Die extends Component {
    render(){
        return (
            <div className="Die">
                <i class={`fas fa-dice-${this.props.face} ${this.props.rolling ? "Shaking" : ''} `}></i>
            </div>
        );
    }
}

export default Die;