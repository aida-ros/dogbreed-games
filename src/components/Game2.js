import React, { Component } from 'react';
import './Game.css';

export default class Game2 extends Component {

  render() {
    const dogThreeRandomImages = this.props.dogThreeRandomImages
    const setRandomNumber = this.props.setRandomNumber
    const randomImage = this.props.dogThreeRandomImages.map(url => url.split('/')[4])
    const getName = this.props.getName
    const showRightImage = this.props.showRightImage
    const letters = ['A', 'B', 'C', 'D', 'E']
    
    
    const allUrls = dogThreeRandomImages
      .map((url, index) => 
      <div className="image-block">
         <img
        style={{ width: '200px' }}
        key={url}
        src={url}
        onClick={getName}
        id={dogThreeRandomImages.indexOf(url)}
        accesskey={letters[index]}
      />
      <h1>{letters[index]}</h1>
      </div>
     
      )
      
      
    return (
      <div className='game-2-container'>
        <h2>Which dog matches this breed? </h2>
        <h1>{randomImage[setRandomNumber]}</h1>  
        {allUrls}
        <div style={{ margin: 'auto', width: '200px' }} >
          {showRightImage}
        </div>

        <div>
        <p style={{ fontSize: '17px', lineHeight: '10px'}}>You can also use keyboard keys with the corresponding letter</p>
        <p style={{ fontSize: '15px', lineHeight: '10px'}} >Windows : alt + letter</p>
        <p style={{ fontSize: '15px', lineHeight: '10px'}}>Mac use : ctrl + option + letter</p>
        </div>  
      
      </div>   

    

    )
  }
}