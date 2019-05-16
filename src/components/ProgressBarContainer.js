import React, { Component } from 'react'
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';

export class ProgressBarContainer extends Component {
    
    // successRate = (answers) => {
    //     const correct = answers.filter(answer => {
    //         if(answer === true) {
    //             return answer
    //         }
    //     })
    //     // console.log("Correct answers:", correct.length)
    //     // const success = (correct.length / answers.length) * 100
    //     // return success
    // }

    render () {
        const answers = this.props.answers
        console.log("ANSWERS: ", this.props.answers)

        // {this.props.answers.length !== 0 && this.successRate(this.props.answers)}
        // {!answers && console.log('Array is empty')}
        // {answers && console.log("Current percentage:", this.successRate(answers))}
        //console.log(this.props.answers)
        
        // const correct = this.correct(total)
        // console.log(correct)
        // const successRate = (this.props.correct / total.length) * 100
        
        return (
        <ProgressBar percentage={this.successRate}/>
         )
    }
}

const mapStateToProps = (state) => {
    console.log("PROGRESS STATE:", state.answers)
    return {
        answers: state.answers
    }
}

export default connect(mapStateToProps)(ProgressBarContainer)