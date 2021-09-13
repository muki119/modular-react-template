import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){
  document.title = 'App'
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