import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Game1 extends Component {

  render() {

    const correctBreed = this.props.dogRandomImage.breed
    const { randomBreeds } = this.props
    const checkAnswer = this.props.checkAnswer
    const showRightName = this.props.showRightName
    const randomizeOptions = this.props.randomize

    { !randomBreeds && console.log('no') }
    { randomBreeds && randomizeOptions(randomBreeds, correctBreed) }

    return (
      <div>

        <h1>What is the breed of the image below?</h1>
        <h1 class="rightName">{showRightName}</h1>

        <br />
        <img src={this.props.dogRandomImage.url} alt="random"></img>
        <br />

        <button onClick={checkAnswer} id="correct" name={correctBreed} accesskey="a">
          {correctBreed}
        </button>

        <button onClick={checkAnswer} id="false" name={randomBreeds && randomBreeds[0]} accesskey="b">
          {randomBreeds && randomBreeds[0]}
        </button>

        <button onClick={checkAnswer} id="false" name={randomBreeds && randomBreeds[1]} accesskey="c">
          {randomBreeds && randomBreeds[1]}
        </button>

        <br />
        <span>You can also use keyboard keys a, b or c for the answers. Use ALT+a, ALT+b or ALT+c. </span>
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