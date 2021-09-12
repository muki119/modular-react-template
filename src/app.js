import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(){
  return(
    <Router>
      <Switch>
          <Route exact path = '/' component = {Home}/>
      </Switch>
    </Router>
  )
}


function Home(){
  return(
    <h1>Welcome</h1>
  )
}

export default App