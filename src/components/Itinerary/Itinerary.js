import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Mark from '../Mark/Mark'

class Itinerary extends Component {

  static defaultProps = {
    center: {
      lat: 41.39,
      lng: 2.17
    },
    zoom: 5
  };

  
  render() {

    const marks = [
      {
        lat:41.39,
        lng: 2.17,
        nombre: 'Primera',
        singladura: 0,
        fecha: 'agosto 2018'
      },
      {
        lat:45.39,
        lng: 2.17,
        nombre: 'Segunda',
        singladura: 1,
        fecha: 'abril 2017'
      }
    ];
       
    return (
      <div className="Itinerary">

        <div id='map'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBQPlFIEl1bdnMb-3zlbKSza5x1aAl14Uo' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {marks.map((x,i)=>{
              return(
                <Mark 
                  lat={x.lat}
                  lng={x.lng}
                  data={x}
                  key={i}
                />
              );
            })}
          </GoogleMapReact>
        </div>
        
      </div>
    );
  }
}

export default Itinerary;