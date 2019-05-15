import React, { Component } from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import Game2 from './Game2'

class Game2Container extends Component {
  componentDidMount() {
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

          
        console.log("HHHHHHHAAAAAAAA",this.getName())
         
       
      })
      .catch(console.error)
  }
  
  someRandomNumber = () => {
    return Math.floor(Math.random() * 3)
  }

  getName = (event) => {
    const isCorrect = parseInt(event.target.id) === this.props.setRandomNumber

    this.props.dispatch({
      type: 'ANSWERS_GAME_TWO',
      payload: isCorrect
    })
}


  render() { 
    
  console.log("HHHHHHH",this.props.setRandomNumber)
    return (
      <div>
        <Game2 
        dogThreeRandomImages= {this.props.dogThreeRandomImages}  
        setRandomNumber = {this.props.setRandomNumber}
        getName = {this.getName}
        answerGameTwo = {this.props.answerGameTwo} 
        />
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    dogThreeRandomImages: state.dogThreeRandomImages,
    setRandomNumber: state.setRandomNumber,
    answerGameTwo: state.answerGameTwo
  }
}

export default connect(mapStateToProps)(Game2Container)



