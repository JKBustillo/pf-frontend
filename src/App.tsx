import React, { Fragment } from 'react';
import './App.scss';
import Header from './components/Header';
import LastAnalyzedTweets from './components/LastAnalyzedTweets';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="home-container">
        <LastAnalyzedTweets />
        <h1>Graficas aquí</h1>
        <h1>Otros datos aquí</h1>
      </div>
    </Fragment>
  );
}

export default App;