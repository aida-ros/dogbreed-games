import React, { Component } from 'react'
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';

export class ProgressBarContainer extends Component {
       
    successRate = (correct, total) => {
        if (isNaN(total) === false) {
            return 0
        }
        return (correct.length / total.length) * 100
    }     

    render () {
        const total = this.props.answers
        const correct = total.filter(answer => {
            if (answer === true) {
                return answer
            }
        })    
        const percentage = this.successRate(correct, total)        

        return (
        <ProgressBar percentage={percentage}/>
         )
    }
}

const mapStateToProps = (state) => {
    
    return {
        answers: state.answers
    }
}

export default connect(mapStateToProps)(ProgressBarContainer)