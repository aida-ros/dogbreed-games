import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class ProgressBarContainer extends Component {
    state = {
        correct: 2,
        total: 5
    }
    
    // Function to check whether answer is correct
    // Selected option is coming from an 'onSubmit' or 'onClick' event    
    checkAnswer = (selectedOption) => {
        if (selectedOption === true) {
            return this.state.correct++
        }
        this.state.total++
        console.log("CORRECT:", this.state.correct, "TOTAL:", this.state.total)
    }
    
    render () {
        const successRate = (this.state.correct / this.state.total) * 100
        console.log("RENDER IN CONTAINER:", successRate, '%')
        return (
        <ProgressBar percentage={this.successRate}/>
         )
    }
}

// mapStateToProps = (state) => {
//     return state
// }