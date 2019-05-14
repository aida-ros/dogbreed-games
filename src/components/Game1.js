import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Game1 extends Component {

  render() {
    console.log('Image:', this.props.dogRandomImage)

    return (
      <div>
        <br />
        <Link to="/">Go back to the index</Link>
        <br /><br />

        <h1>What is the breed of the image below?</h1>
        
        <div>
          <input type="radio" id="true" name="dogbreed" value="Option A" />
          <label for="Option A">Option A</label>
        </div>

        <div>
          <input type="radio" id="false" name="dogbreed" value="Option B" />
          <label for="Option B">Option B</label>
        </div>

        <div>
          <input type="radio" id="false" name="dogbreed" value="Option C" />
          <label for="Option C">Option C</label>
        </div>
        <br />

        <button onClick="Submit">Answer Question!</button>
        
      </div>
    )
  }
}