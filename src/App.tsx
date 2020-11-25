import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnalyzedTweets from './components/AnalyzedTweets';
import ChartsHome from './components/ChartsHome';
import Header from './components/Header';
import IncidencesTopUsers from './components/IncidencesTopUsers';
import LastAnalyzedTweets from './components/LastAnalyzedTweets';
import Classificaction from './components/Classification';
import Profile from './components/Profile';
import Region from './components/Region';
import TweetDetails from './components/TweetDetails';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="home-container">
          <LastAnalyzedTweets />
            <Switch>
              <Route path="/" exact component={ChartsHome} />
              <Route path="/classification" component={Classificaction} />
              <Route path="/:user" exact component={Profile} />
              <Route path="/region/:region" exact component={Region} />
              <Route path="/:user/:tweetid" component={TweetDetails} />
            </Switch>
          <div className="home-otherData">
            <AnalyzedTweets />
            <IncidencesTopUsers />
          </div>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;