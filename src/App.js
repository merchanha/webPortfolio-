import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Covert from './components/cover/Covert';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <div>   
    <Router>
     



      
        <Switch>
        <Route  exact path="/">
          <Covert/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio/>           
          </Route>
          <Route exact path="/Contact">
            <Contact/>
                       
          </Route>
          
        </Switch>

    </Router>
    </div>
  );
}

   
  


export default App;
