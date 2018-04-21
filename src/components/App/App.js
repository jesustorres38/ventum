import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';
import './App.css';



import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home   from '../Home/Home';
import Prices from '../Prices/Prices';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/prices" component={Prices}/>
          </Switch>
        </Router>
        
        <Footer />
      </div>
    );
  }
}

export default App;
