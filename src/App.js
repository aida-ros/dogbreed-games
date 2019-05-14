import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom'
import DetailPageContainer from './components/DetailPageContainer';
import ProgressBarContainer from './components/ProgressBarContainer';

function App() {
  return (
    <div className="App">
     {/* In progress... */}
     <ProgressBarContainer/>

    <button className="game-one">GAME 1</button>
    <button className="game-two">GAME 2</button>
    <button className="game-three">GAME 3</button>

     <Route exact path="/" component={DogsListContainer} />
     <Route path="/detailpage/:breed" component={DetailPageContainer} />
    </div>
  );
}

export default App;
