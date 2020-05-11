import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Saved from './components/Saved';
import Search from './components/Search';

const App = () => {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route component={Search} exact path="/" />
            <Route component={Saved} path="/saved" />
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
