import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import routes from './routes';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            {this.showContentMenus(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showContentMenus(routes){
    let result  = null;
    if(routes.length>0){
      result = routes.map((route,index)=>
        <Route key={index} path={route.path} component={route.main} exact={route.exact}/>
      )
    }
    return result;
  }
  
}

export default App;