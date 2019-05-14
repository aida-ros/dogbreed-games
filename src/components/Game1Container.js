import React, { Component } from 'react';
import * as request from 'superagent';
import { connect } from 'react-redux';
import Game1 from './Game1';

class Game1Container extends Component {
  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        console.log(response.body.message)
        const randomDogImg = response.body.message
          this.props.dispatch({
          type: 'SHOW_RANDOM_IMAGE',
          payload: randomDogImg
        })
      })
      .catch(console.error)
  }

  // const urlSplit = this.props.dogRandomImage; 
  // const dogName = urlSplit.split('/')[3]

  render() {
    return (
    <div>
         <p>Question Time!</p> 
          <Game1 /> 
          <br />
          <img src={this.props.dogRandomImage} alt="random"></img>     
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
      dogRandomImage: state.dogRandomImage
  }
}

export default connect(mapStateToProps)(Game1Container)