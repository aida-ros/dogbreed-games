import React, { Component } from 'react'

export default class Game2 extends Component {

  render() {
    const dogThreeRandomImages = this.props.dogThreeRandomImages
    const setRandomNumber = this.props.setRandomNumber
    const randomImage = this.props.dogThreeRandomImages.map(url => url.split('/')[4])
    const getName = this.props.getName
    const showRightImage = this.props.showRightImage
    // const letters = ['A', 'B', 'C']
    // const letter = letters[index]
    
    const allUrls = dogThreeRandomImages
      .map((url, index) => 
      <img
        style={{ width: '200px' }}
        key={url}
        src={url}
        onClick={getName}
        id={dogThreeRandomImages.indexOf(url)}
        // alt={letter[index]}
      />)
      
    return (
      <div>
        <h2>Which dog matches this breed?</h2>
        <h1>{randomImage[setRandomNumber]}</h1>
        {allUrls}
        <div>
        </div>
        <img style={{ width: '100px' }} src={showRightImage} />
      </div>
    )
  }
}