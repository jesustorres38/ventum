import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import './_App.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home   from '../Home/Home';
import Prices from '../Prices/Prices';
import Itinerary from '../Itinerary/Itinerary';
import Equipment from '../Equipment/Equipment';


class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <Header {...this.props} />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/equipment" component={Equipment}/>
            <Route exact path="/itinerary" component={Itinerary}/>
            <Route exact path="/prices" component={Prices}/>

            <Redirect to='/' />
          </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
