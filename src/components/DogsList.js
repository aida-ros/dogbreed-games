import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogsList extends Component {
  render() {
    
    const dogBreeds = this.props.dogBreeds 
    console.log('dogBreeds:', dogBreeds)
    return (
      <div>
        <ul>
        { dogBreeds.map(dogbreed => 
            <li key={dogbreed}>
            <Link to={ `/detailpage/${dogbreed}` }>{dogbreed}</Link>
            </li> )}
        </ul>
      </div>
    )
  }
}



