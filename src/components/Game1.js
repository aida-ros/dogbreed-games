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
        <h2>What is the breed of the image below?</h2>
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

                {letter}: {dog}

              </button>
              
            </div>
          )
        })}
        <br />

        {showRightName}
        <div>
        <p style={{ fontSize: '17px', lineHeight: '10px'}}>You can also use keyboard keys with the corresponding letter</p>
        <p style={{ fontSize: '15px', lineHeight: '10px'}} >Windows : alt + letter</p>
        <p style={{ fontSize: '15px', lineHeight: '10px'}}>Mac use : ctrl + option + letter</p>
        </div>
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