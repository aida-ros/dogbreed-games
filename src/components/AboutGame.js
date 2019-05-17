import React, { Component } from 'react';
import './DetailPage.css';

export default class AboutGame extends Component {

  render() {

    return (
      <div class="about-container">
        <h1>Game Time!</h1>

        <p>This game is for all doglovers who want to find out more about dog breeds. You can start by browsing
        through the list of dogs, to see what they look like, or you can dive straight into one of the games!</p>

        <p><strong><a class="game-link" href="/game1">Game1</a></strong> shows you a picture of a dog breed, and you have to select the right one from 3 options. Easy!</p>
        <p><strong><a class="game-link" href="/game2">Game2</a></strong> shows you the name of a dog breed, and you have to select the image the shows the right dog breed. Ok, a little harder!</p>
        <p><strong><a class="game-link" href="/game3">Game3</a></strong> is where we mix things up and it will show you either a question type of Game1, or a question type of Game2. Exciting!</p>

        <p>Don't forget to check your <strong>Succes Rate</strong> to see how you're doing :)</p>

      </div>
    )
  }
}