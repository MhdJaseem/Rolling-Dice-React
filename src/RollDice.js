import React, { Component } from 'react';
import Die from './Die';
import "./RollDice.scss"


class RollDice extends Component {
    static defaultProps = {
        faces : ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props){
        super(props);
        this.state = {
            die1: "one", 
            die2: "six",
            isRolling: false
        }
        this.roll = this.roll.bind(this)
    }
    
    roll() {
        let rand1 = Math.floor(Math.random()*this.props.faces.length);
        let rand2 = Math.floor(Math.random()*this.props.faces.length);
        this.setState({die1: this.props.faces[rand1], die2: this.props.faces[rand2], isRolling:true});
        setTimeout(() => {
            this.setState({isRolling: false})
        }, 1000)
    }


    render() {
        return (
            <div className="Roll-Dice">
                <h1>Roll Dice</h1>
                <div className="Dice" >
                    <Die face={this.state.die1} rolling={this.state.isRolling} />
                    <Die face={this.state.die2} rolling={this.state.isRolling} />
                </div>
                <div className="Button">
                    <button onClick={this.roll} disabled={this.state.isRolling} > 
                        {this.state.isRolling ? "Rolling..." : "Roll Dice"}
                    </button>
                </div>
            </div>
        );
    }
}

export default RollDice;