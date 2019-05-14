import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class DogsList extends Component {
  render() {
    
    const dogBreeds = this.props.dogBreeds 
    // console.log('dogBreeds:', dogBreeds)
    return (
      <div className="dogslist-container">
        <h1 className="dogslist-header">Dog Breeds</h1>
        <h3 className="dogslist-subheader">Click on a dog's name to see photos</h3>
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



