import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Faviourt from './Component/Faviourt';


class App extends React.Component{


  render(){
    return(
      <>
      <Router>
        <Header/>

        <Switch>

        <Route exact path='/'><Home/></Route>
        <Route path="/Faviourt"><Faviourt/></Route>

        </Switch>

        
      </Router>

      </>
    )
  }
}

export default App;


