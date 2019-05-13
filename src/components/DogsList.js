import React, { Component } from 'react'

export default class DogsList extends Component {
  render() {
    
    const dogBreeds = this.props.dogBreeds 
    console.log('dogBreeds:', dogBreeds)
    return (
      <div>
        <ul>
          { dogBreeds.map(dogbreed => dogbreed.map(dog => <li key={dog}>{dog}</li>) )}
        </ul>
      </div>
    )
  }
}
