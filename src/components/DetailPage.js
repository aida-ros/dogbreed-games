import React, { Component } from 'react'
import './DetailPage.css'

export default class Detailpage extends Component {
  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  render() { 
    const dogImages  = this.props.dogImages
    return (
      <div>
        { !dogImages && 'Loading...'}        
        { dogImages && this.props.dogImages.map(url => <img key={url} src= { url } alt = "Dog"/>).slice(0, 10) }
      </div>
    )
  }
}