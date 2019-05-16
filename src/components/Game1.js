import React, { Component } from 'react'
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
        <h1 class="rightName">{showRightName}</h1>

        <br/>
        <img src={this.props.dogRandomImage.url} alt="random"></img>
        <br />
        
        { dogs.map(dog => {
          return (
              <div class="buttonHolder">
                <button onClick={checkAnswer} name={dog} >
                {dog}
                </button>
              </div>
            )
        })}
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