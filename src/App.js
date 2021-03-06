import React from 'react';
import PrivateRoute from "./components/PrivateRoute";
import Todos from "./components/Todos";
import SignIn from "./components/SignIn";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";


function App() {


  return (
    <div className='font-quick' style= {{textAlign: "center"}}>
      <h1 className='bg-gray-600 h-12 flex items-center justify-center'>Redux Todo App</h1>
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