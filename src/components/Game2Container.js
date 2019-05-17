import React, { Component } from 'react';
import * as request from 'superagent';
import { connect } from 'react-redux';
import Game2 from './Game2';
import ProgressBarContainer from './ProgressBarContainer';

class Game2Container extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'RESET_ANSWERS',
      payload: []
    })
    this.getToNextStage()
  }

  someRandomNumber = () => {
    return Math.floor(Math.random() * 3)
  }

  getName = (event) => {
    if (parseInt(event.target.id) === this.props.setRandomNumber) {
      this.props.dispatch({
        type: 'ANSWERS',
        payload: true
      })
      if(this.props.answers.filter(good => good === true).length < 5){this.getToNextStage()
      } else {
        this.getToNextStageTwo()
      }
      
    } else {
      this.props.dispatch({
        type: 'ANSWERS',
        payload: false
      })
      this.props.dispatch({
        type: 'SHOW_RIGHT_IMAGE',
        payload: <div  >
           <p>The answer is:</p>
          <img style={{ width: '100px' }}src={ this.props.dogThreeRandomImages[this.props.setRandomNumber]}/>

        </div>
      })

      setTimeout(this.removeAnswer, 2000)
      if(this.props.answers.filter(good => good === true).length < 5){setTimeout(this.getToNextStage, 2000)
      } else {
        setTimeout(this.getToNextStageTwo, 2000)
      }
    }
  }

  removeAnswer = () => {
    this.props.dispatch({
      type: 'SHOW_RIGHT_IMAGE',
      payload: []
    })
  }

  getToNextStage = () => {
    request
      .get('https://dog.ceo/api/breeds/image/random/3')
      .then(response => {
        const threeRandomDogImg = response.body.message
        this.props.dispatch({
          type: 'SHOW_THREE_RANDOM_IMAGES',
          payload: threeRandomDogImg
        })
        const randomNumber = this.someRandomNumber()
        this.props.dispatch({
          type: 'SET_RANDOM_NUMBER',
          payload: randomNumber
        })

      })
      .catch(console.error)
  }
  getToNextStageTwo = () => {
    request
      .get('https://dog.ceo/api/breeds/image/random/5')
      .then(response => {
        const threeRandomDogImg = response.body.message
        this.props.dispatch({
          type: 'SHOW_THREE_RANDOM_IMAGES',
          payload: threeRandomDogImg
        })
        const randomNumber = this.someRandomNumber()
        this.props.dispatch({
          type: 'SET_RANDOM_NUMBER',
          payload: randomNumber
        })

      })
      .catch(console.error)
  }





  render() {
    console.log('PIEP',this.props.answers)
    return (
      <div>
        <ProgressBarContainer answers={this.answers} />
        <Game2
          dogThreeRandomImages={this.props.dogThreeRandomImages}
          setRandomNumber={this.props.setRandomNumber}
          getName={this.getName}
          answerGameTwo={this.props.answerGameTwo}
          answers={this.props.answers}
          showRightImage={this.props.showRightImage}
        />
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dogThreeRandomImages: state.dogThreeRandomImages,
    setRandomNumber: state.setRandomNumber,
    answers: state.answers,
    showRightImage: state.showRightImage
  }
}

export default connect(mapStateToProps)(Game2Container)