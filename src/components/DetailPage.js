import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DetailPage.css'

export default class Detailpage extends Component {

  render() { 
    const dogImages  = this.props.dogImages
    console.log("TIMES RENDERED")
    return (
      <div>
        <br/>
        <Link to="/"><h3 className="index">Go back to the index</h3></Link>
        <br/>
      
        { !dogImages && 'Loading...'}        
        { dogImages && this.props.dogImages.map(url => <img key={url} src= { url } alt = "Dog"/>).slice(0, 10) }
      </div>
    )
  }
}

