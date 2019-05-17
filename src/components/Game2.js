import React, { Component } from 'react'
import './Game.css';

export default class Game2 extends Component {
    
    
  render() {
      const dogThreeRandomImages = this.props.dogThreeRandomImages
      const setRandomNumber = this.props.setRandomNumber
      const randomImage = this.props.dogThreeRandomImages.map(url => url.split('/')[4])
      const getName = this.props.getName
      const showRightImage = this.props.showRightImage
     

      const allUrls = dogThreeRandomImages
        .map(url => <div className= {"image-block"}>
          <img
          style={{ width: '300px' }} 
          key={url}
          src={url}
          onClick={getName}
          id={dogThreeRandomImages.indexOf(url)}
        />
          </div>)   

  return (
      <div>
        
        <h2>Which dog matches this breed </h2>
        <h1>{randomImage[setRandomNumber]}</h1>  
        {allUrls}
        <div style={{ margin: 'auto', width: '300px' }} >
          {showRightImage}
        </div>        
        
      </div>
    )
  }
}

