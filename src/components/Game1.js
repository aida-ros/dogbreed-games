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


        
        { dogs.map(dog => {
          return (
              <div>
                <button onClick={checkAnswer} name={dog} >
                {dog}
                </button>
              </div>
            )
        })}
       
        
        <br/>
        <img src={this.props.dogRandomImage.url} alt="random"></img>
        <br />

//         <button onClick={checkAnswer} id="correct" name={correctBreed} accesskey="a">
//           {correctBreed}
//         </button>

//         <button onClick={checkAnswer} id="false" name={randomBreeds && randomBreeds[0]} accesskey="b">
//           {randomBreeds && randomBreeds[0]}
//         </button>

//         <button onClick={checkAnswer} id="false" name={randomBreeds && randomBreeds[1]} accesskey="c">
//           {randomBreeds && randomBreeds[1]}
//         </button>

//         <br />
//         <span>You can also use keyboard keys a, b or c for the answers. Use ALT+a, ALT+b or ALT+c. </span>
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