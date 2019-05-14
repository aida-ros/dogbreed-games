import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Game1 extends Component {

  checkAnswer = (event) => {
    if (event.target.id === this.props.dogRandomImage.id){  
      console.log("ANSWER WAS TRUE!")
      const correct = {
        type: 'ANSWERS',
        payload: true
      }
      //this.props.dispatch(correct)
      return true
    }

    console.log("ANSWER WAS FALSE!")
    const wrong = {
      type: 'ANSWERS',
      payload: false
    }
    //this.props.dispatch(wrong)
    return false
  }

  render() {
    console.log('Image in presentation:', this.props.dogRandomImage)

    return (
      <div>
        <h1>What is the breed of the image below?</h1>
                  
          <br />
          <img src={this.props.dogRandomImage.image} alt="random"></img>   

        <div>
          <input onClick={this.checkAnswer} type="radio" id="correct" name="dogbreed" value="Option A" />
          <label for="Option A">Option A</label>
        </div>

        <div>
          <input onClick={this.checkAnswer} type="radio" id="false" name="dogbreed" value="Option B" />
          <label for="Option B">Option B</label>
        </div>

        <div>
          <input onClick={this.checkAnswer} type="radio" id="false" name="dogbreed" value="Option C" />
          <label for="Option C">Option C</label>
        </div>
        <br />

        {/* <button>Answer Question!</button> */}
        {/* ^^^ Should dispatch an action or call a function dispatching an action */}
        
        <br/>
        <Link to="/">Go back to the index</Link>
      </div>
      
      )
    }
}