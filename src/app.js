import React from "react";
import Bare from './pages/bare.js'
import Bare1 from './pages/bare1.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (<Router>
            <Switch>
              <Route exact path='/' component={Bare}/>
              <Route path='/link' component={Bare1}/>
            </Switch>
          </Router>
          );
};

export default App;
