import React, { Component } from 'react'


export default class Game2 extends Component {
    
    
  render() {
      const dogThreeRandomImages = this.props.dogThreeRandomImages
      const setRandomNumber = this.props.setRandomNumber
      const randomImage = this.props.dogThreeRandomImages.map(url => url.split('/')[4])
      const getName = this.props.getName

      const allUrls = dogThreeRandomImages
        .map(url => <img
          style={{ width: '200px' }}
          key={url}
          src={url}
          onClick={getName}
          id={dogThreeRandomImages.indexOf(url)}
        />)
      
     
  return (
      <div>
        <p>Which dog matches this breed </p>
        <h1>{randomImage[setRandomNumber]}</h1>  
       {allUrls}
      </div>
    )
  }
}

