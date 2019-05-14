import React, { Component } from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'

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

  render() { 
    return (
      <div>
        
        <img src={this.props.dogRandomImage}/>
       
      <p>What is the breed of the image above?</p>
      <ul>
        <li>A: Breed X</li>
        <li>B: Breed Y</li>
        <li>C: Breed Z</li>
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    dogRandomImage: state.dogRandomImage
      
  }
}

export default connect(mapStateToProps)(Game1Container)