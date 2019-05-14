import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Game2 extends Component {
    getRandomNumber = () => {
        return Math.floor(Math.random() * 3)
    }
    getName = () => {

    }
  render() {
      const dogThreeRandomImages = this.props.dogThreeRandomImages
      const randomImage = dogThreeRandomImages.map(url => url.split('/')[4])
      const allUrls = dogThreeRandomImages.map(url => <img style={{ width: '200px' }} key={url} src= { url } alt = "Dog"/> )
        // console.log("IIIIII", allUrls)
  return (
      <div>
        
        <p>Which dog matches this breed </p>
        <h1>{randomImage[this.getRandomNumber()]}</h1> 
        {allUrls}
       </div>
    )
  }
}

