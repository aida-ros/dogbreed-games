import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css'

export class Game1 extends Component {

  render() {

    const { randomBreeds } = this.props

    if (randomBreeds === undefined) return 'Loading'

    const correctBreed = this.props.dogRandomImage.breed
    const showRightName = this.props.showRightName
    const dogs = [...randomBreeds, correctBreed].sort(() => Math.random() - 0.5)
    const letters = ['A', 'B', 'C']
    const checkAnswer = this.props.checkAnswer

    return (
      <div>
        <h1>What is the breed of the image below?</h1>
        <h1 class="rightName">{showRightName}</h1>
        <br />
        <img src={this.props.dogRandomImage.url} alt="random"></img>
        <br />

        {dogs.map((dog, index) => {
          const letter = letters[index]
          return (
            <div class="button-holder">
              <button className="game-button"
                onClick={checkAnswer}
                name={dog}
                accesskey={letter}
              >
                <h3>{letter}: {dog}</h3>
              </button>
            </div>
          )
        })}
        <br />
        <span>You can also use keyboard keys with the corresponding letter.</span>
        <span>For Windows use: alt + letter, for Mac use ctrl + option + letter.</span>
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