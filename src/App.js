import React from "react";
import { Route, Switch } from "react-router-dom";
import About from './About'
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";






const App = () => {
 
 
  return (
         <div>
        <Menu />
        <br />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={Error} />
        </Switch>
         
      </div>
      
  );
};

export default App;