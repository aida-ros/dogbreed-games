import React, { Component } from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import Game2 from './Game2'

class Game2Container extends Component {
  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/image/random/3')
      .then(response => {
        // console.log(response.body.message)
        const threeRandomDogImg = response.body.message
          this.props.dispatch({
          type: 'SHOW_THREE_RANDOM_IMAGES',
          payload: threeRandomDogImg
        })
      })
      .catch(console.error)
  }
  
  render() { 
  //  console.log("HHHHHHH",this.props.dogThreeRandomImages)
    return (
      <div>
        <Game2 dogThreeRandomImages= {this.props.dogThreeRandomImages}/>
     </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    dogThreeRandomImages: state.dogThreeRandomImages
      
  }
}

export default connect(mapStateToProps)(Game2Container)



