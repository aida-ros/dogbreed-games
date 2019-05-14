import React, { Component } from 'react'

export default class GameTwo extends Component {
  render() {
    return (
      <div>
        <h1>HALLO</h1>
        <img  src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt = "Dog1"/>
        <img  src="https://images.dog.ceo/breeds/hound-basset/n02088238_13079.jpg" alt = "Dog1"/>
        <img  src="https://images.dog.ceo/breeds/hound-ibizan/n02091244_2132.jpg" alt = "Dog1"/>
      </div>
    )
  }
}



(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)