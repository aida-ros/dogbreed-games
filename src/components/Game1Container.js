import React, { Component } from 'react';
import * as request from 'superagent';
import { connect } from 'react-redux';
import Game1 from './Game1';

class Game1Container extends Component {
  componentDidMount() {
    
    request
      .get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        console.log("BODY:", response.body)
        const randomDogImg = response.body.message
          this.props.dispatch({
          type: 'SHOW_RANDOM_IMAGE',
          payload: {
            image: randomDogImg,
            id: 'correct'
          }
        })
      })
      .catch(console.error)
  }
  
  render() {
    
      // const urlSplit = this.props.dogRandomImage; 
      // const dogName = urlSplit.split('/')[3]
      // console.log(dogName)
    return (
    <div>
          <Game1 dogRandomImage={this.props.dogRandomImage}/> 
    </div>
  )}
}

const mapStateToProps = (state) => {
  console.log("STATE", state.dogRandomImage)
  return {
      dogRandomImage: state.dogRandomImage
  }
}

export default connect(mapStateToProps)(Game1Container)