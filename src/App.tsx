import React, { Fragment } from 'react';
import './App.scss';
import AnalyzedTweets from './components/AnalyzedTweets';
import ChartsHome from './components/ChartsHome';
import Header from './components/Header';
import IncidencesTopUsers from './components/IncidencesTopUsers';
import LastAnalyzedTweets from './components/LastAnalyzedTweets';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="home-container">
        <LastAnalyzedTweets />
        <ChartsHome />
        <div className="home-otherData">
          <AnalyzedTweets />
          <IncidencesTopUsers />
        </div>
      </div>
    </Fragment>
  );
}

export default App;