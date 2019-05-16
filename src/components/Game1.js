import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as request from 'superagent';
import { connect } from 'react-redux';

export class Game1 extends Component {

  render() {
    const { randomBreeds } = this.props

    if(randomBreeds === undefined) return 'Loading'
    
    const correctBreed = this.props.dogRandomImage.breed
    const checkAnswer = this.props.checkAnswer
    const showRightName = this.props.showRightName
  
    const dogs = [...randomBreeds, correctBreed].sort(() => Math.random() - 0.5)
   
    return (
      <div>

        <h1>What is the breed of the image below?</h1>
        <h1>{showRightName}</h1>
                  
          <br />
          <img src={this.props.dogRandomImage.url} alt="random"></img>   

        
        { dogs.map(dog => {
          return (
              <div className='option'>
                <input onClick={checkAnswer} type="radio" name={dog} value="Option A" />
                <label >{dog}</label>
              </div>
            )
        })}
       
        
        <br/>
        <Link to="/">Go back to the index</Link>
      </div>
      
      )
    }
}

const mapStateToProps = (state) => {
  return {
    answers: state.answers
  }
}

export default connect(mapStateToProps)(Game1)