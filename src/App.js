import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom'
import DetailPageContainer from './components/DetailPageContainer';

function App() {
  return (
    <div className="App">
     <Route exact path="/" component={DogsListContainer} />
     <Route path="/detailpage/:breed" component={DetailPageContainer} />
    </div>
  );
}

export default App;
