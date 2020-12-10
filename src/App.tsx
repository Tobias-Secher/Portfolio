import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import Header from './components/header/header.components';
import Home from './screens/home/home.component';

const App = () => {

  return (
    <Router>
      <div className="wrapper">
        <div className="wrapper__header">
          <Header />
        </div>
        <div className="wrapper__rutes">
          <Route path={'/'} component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
