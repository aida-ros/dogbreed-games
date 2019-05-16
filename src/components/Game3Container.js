import React, { Component } from 'react'
import Game2Container from './Game2Container';
import Game1Container from './Game1Container';
import { connect } from 'react-redux'


class Game3Container extends Component {
  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }
  render() {
    let arr = [<Game2Container />, <Game1Container />]
    return (
      <div>
        {this.randomize(arr)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    questionCount: state.questionCount
  }
}

export default connect(mapStateToProps)(Game3Container)