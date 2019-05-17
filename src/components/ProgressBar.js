import React, { Component } from 'react'
import './ProgressBar.css'


export default class ProgressBar extends Component {
    
    
    render() {
        const percentage = this.props.percentage
        const rounded = Math.round(percentage)      
        
        return(
            <div className="statistics-container">
            <h2>Success Rate</h2>
            
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