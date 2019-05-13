import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom'
import DetailPage from './components/DetailPage';

function App() {
  return (
    <div className="App">
     <Route exact path="/" component={DogsListContainer} />
     <Route path="/detailpage/:breed" component={DetailPage} />
    </div>
  );
}

export default App;
