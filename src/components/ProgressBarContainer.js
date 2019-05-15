import React, { Component } from 'react'
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';

export class ProgressBarContainer extends Component {
    
    render () {
        const successRate = (this.props.correct / this.props.answers) * 100
        // console.log("RENDER IN CONTAINER:", successRate, '%')
        return (
        <ProgressBar percentage={this.successRate}/>
         )
    }
}

const mapStateToProps = (state) => {
    //console.log("PROGRESS STATE:", state.answers)
    return {
        answers: state.answers
    }
}

export default connect(mapStateToProps)(ProgressBarContainer)