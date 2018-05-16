import React, { Component } from 'react';

class Itinerary extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Itinerary">
        <p>Soy itinerario</p>
      </div>
    );
  }
}

export default Itinerary;