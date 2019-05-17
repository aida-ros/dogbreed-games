import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Game1 extends Component {
  
  render() {

    const { randomBreeds } = this.props

    if(randomBreeds === undefined) return 'Loading'
    

    const correctBreed = this.props.dogRandomImage.breed
    const showRightName = this.props.showRightName

  
  


    return (
      <div>

        <h1>What is the breed of the image below?</h1>
        <h1 class="rightName">{showRightName}</h1>

        <br/>

        <img
          style={{ width: '400px' }}
          src={this.props.dogRandomImage.url}
          alt="random"
        />
       <br />  
      
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