
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
import About from "./components/about/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import AboutCover from "./components/cover/aboutCover/aboutCover";
import Carrousel from "./components/cover/Carrousel/Carrousel";
import Footer from "./components/Footer"
import Question from "./components/Question";


function App() {

 




  return (
    



    <div>   
    <Router>
    
        <Switch>
        <Route  exact path="/">
          <Covert/>
          <AboutCover/>
          <Carrousel/>
         
          <Footer/>
           
          </Route>
          <Route exact path="/About">
            <About />
            <Footer/>
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio/>
            <Footer/>    
                 
          </Route>
          <Route exact path="/Contact">
            <Contact/>   
            <Footer/>                   
          </Route>

          <Route exact path="/Question">
            <Question/>


          </Route>
          
        </Switch>

    </Router>
    </div>
  );
}

   
  


export default App;
