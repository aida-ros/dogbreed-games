import React, { Component } from 'react'
import './ProgressBar.css'


export default class ProgressBar extends Component {
    
    
    render() {
        const percentage = this.props.percentage
        // console.log("PROGRESS:", this.props.percentage, "%")
        const rounded = Math.round(percentage)      
        
        return(
            <div className="statistics-container">
            <h1>Success Rate: </h1>
            
            <h2>{Math.round(percentage)}%</h2>
                <div className='progress-bar'>
                    <div className='filler' 
                    style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        )
    }
}