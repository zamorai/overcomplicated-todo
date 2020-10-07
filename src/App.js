import React from 'react';
import PrivateRoute from "./components/PrivateRoute";
import Todos from "./components/Todos";
import SignIn from "./components/SignIn";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";


function App() {


  return (
    <div style = {{textAlign: "center"}}>
      <h1>Redux Todo App</h1>
      <Router>
        <Switch>
          <PrivateRoute path = "/todos">
            <Todos />
          </PrivateRoute>
          <Route path = "/">
          <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;