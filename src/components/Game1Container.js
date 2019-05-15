import React, { Component } from 'react';
import * as request from 'superagent';
import { connect } from 'react-redux';
import Game1 from './Game1';

class Game1Container extends Component {
  componentDidMount() {
    
    request
      .get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        const url = response.body.message
        const breedName = url.toString().split('/')[4]
        this.props.dispatch({
          type: 'SHOW_RANDOM_IMAGE',
          payload: {
            url: url,
            breed: breedName
          }
          })
      })
      .catch(console.error)

      request
    .get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      const breeds = Object.keys(response.body.message)
      const random = () => Math.floor(Math.random() * 86)  
      this.props.dispatch({
        type: 'TWO_RANDOM_BREEDS',
        payload: [breeds[random()], breeds[random()]]
      })
    })
    .catch(console.error)
  }
  
  render() {
    
    return (
    <div>
          
          <Game1 dogRandomImage={this.props.dogRandomImage} randomBreeds={this.props.randomBreeds}/> 
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
      dogRandomImage: state.dogRandomImage,
      randomBreeds: state.randomBreeds
  }
}

export default connect(mapStateToProps)(Game1Container)