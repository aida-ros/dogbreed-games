import React, { Component } from 'react'
import './ProgressBar.css'


export default class ProgressBar extends Component {
    state = {
        percentage: 0
    }
    
    render() {
        console.log("PERCENTAGE:", this.props.percentage)
        return(
            <div className="statistics-container">
            <h1>Success Rate: </h1>
                <div className='progress-bar'>
                    <div className='filler' 
                    // style={{ width:  }}
                    ></div>
                </div>
            </div>
        )
    }
}