import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Detailpage extends Component {
  
  render() { 
    const dogImages  = this.props.dogImages
    
    return (
      <div>
        <Link to="/">Go back to the index</Link>
      


        { dogImages && this.props.dogImages.map(url => url.map(image => <img key={image} src= { image } alt = "Dog"/>)) }
        { !dogImages && 'Loading...'}
      </div>
    )
  }
}

