import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import Header from './components/header/header.components';
import Home from './screens/home/home.component';
import WorkTimeline from './screens/work-timeline/work-timeline.component';

const App = () => {

  return (
    <Router>
      <div className="wrapper">
        <div className="wrapper__header">
          <Header />
        </div>
        <div className="wrapper__rutes">
          <Route exact={true} path={'/work'} component={WorkTimeline} />
          <Route exact={true} path={'/'} component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
