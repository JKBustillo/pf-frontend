import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnalyzedTweets from './components/AnalyzedTweets';
import ChartsHome from './components/ChartsHome';
import Header from './components/Header';
import IncidencesTopUsers from './components/IncidencesTopUsers';
import LastAnalyzedTweets from './components/LastAnalyzedTweets';
import Classificaction from './components/Classification';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="home-container">
          {console.log()}
          <LastAnalyzedTweets />
            <Switch>
              <Route path="/" exact component={ChartsHome} />
              <Route path="/classification" component={Classificaction} />
              {/* <Route path="/user" component={Profile} /> */}
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