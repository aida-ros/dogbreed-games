import React, { Component } from 'react';
import './DetailPage.css';

export default class Detailpage extends Component {

  render() { 
    const dogImages  = this.props.dogImages
    return (
      <div>
        { !dogImages && 'Loading...'}        
        { dogImages && this.props.dogImages.map(url => <img style={{ width: '200px' }}key={url} src= { url } alt = "Dog"/>).slice(0, 10) }
      </div>
    )
  }
}