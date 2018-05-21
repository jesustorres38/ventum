import React, { Component } from 'react'

class Itinerary extends Component {
  
  constructor(props){
    super(props);

    this.markers = [
      {
        nombre: 'Cerdeña',
        singladura: 0,
        position: {lat: 40.19, lng: 7.82},
        icon: '/images/markerOff.png',
        fecha: 'Septiembre 2017'
      },
      {
        nombre: 'Cartagena',
        singladura: 0,
        position: {lat: 37.49, lng: -1.08},
        icon: '/images/markerOff.png',
        fecha: 'Marzo 2018'
      },
      {
        nombre: 'Eolicas (Sicilia)',
        singladura: 1,
        position: {lat: 38.49, lng: 14.88},
        icon: '/images/markerOn.png',
        fecha: 'Junio 2018'
      },
      {
        nombre: 'Baleares',
        singladura: 1,
        position: {lat: 39.14, lng: 2.11},
        icon: '/images/markerOn.png',
        fecha: 'Julio-Agosto 2018'
      },
      {
        nombre: 'Premià de Mar',
        singladura: 1,
        position: {lat: 41.48, lng: 2.36},
        icon: '/images/markerOn.png',
        fecha: 'Septiembre-Octubre'
      },
      {
        nombre: 'Canarias',
        singladura: 1,
        position: {lat: 29.19, lng: -15.51},
        icon: '/images/markerOn.png',
        fecha: 'Noviembre 2018'
      }
    ]
  }

  initMap = () => {

    var map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: 41.43, lng: 2.17}
    });

    for(var i in this.markers){
      addMarker(this.markers[i]);
    }

    function addMarker(el){

      var marker = new window.google.maps.Marker({
        position: el.position,
        map: map,
        icon: el.icon
      });
      var infoWindow = new window.google.maps.InfoWindow({
        content: '<p>'+el.nombre+'</p><p>'+el.fecha+'</p>'
      })
      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }

  }

  initMapOne = (markerSelected) => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: 41.43, lng: 2.17}
    });

    addMarker(markerSelected);
  
    function addMarker(markerSelected){

      var marker = new window.google.maps.Marker({
        position: markerSelected.position,
        map: map,
        icon: markerSelected.icon
      });
  
      var infoWindow = new window.google.maps.InfoWindow({
        content: '<p>'+markerSelected.nombre+'</p><p>'+markerSelected.fecha+'</p>'
      })
  
      infoWindow.open(map, marker);
      
    }
  }

  componentDidMount(){
    this.initMap();
  }

  render() {

    return (
      <div className="Itinerary">

        <div id='map'></div>
        
        <h1 className='subTitle'>Itinerary</h1>
        
        
        <div className='conditions'>

          <h2>Next Trips</h2>
          {this.markers.map((x,i)=>{
            if(x.singladura === 1){
              return(
                <p onClick={()=> this.initMapOne(x)} key={x.nombre+i}>- {x.nombre} <span>({x.fecha})</span></p>
              );
            }
            else{
              return false;
            }
          })}
          
          
          <h2>Past Trips</h2>
          {this.markers.map((x,i)=>{
            if(x.singladura === 0){
              return(
                <p onClick={()=> this.initMapOne(x)} key={x.nombre+i}>- {x.nombre} <span>({x.fecha})</span></p>
              );
            }
            else{
              return false;
            }
          })}

          <h2>all</h2>
          <p onClick={() => this.initMap()}>- See all trips</p>
          
        </div>


        <h1 className='subTitle'>last trips photos</h1>
        <div className='gallery'>

        </div>
        

        
      </div>
    );
  }
}

export default Itinerary;