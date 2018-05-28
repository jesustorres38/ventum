import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'

class Itinerary extends Component {
  
  constructor(props){
    super(props);

    this.markers = [
      {
        nombre: 'Premià de Mar',
        singladura: 0,
        position: {lat: 41.48, lng: 2.36},
        icon: '/images/markerOff.png',
        fecha: '2017',
        link: 'https://www.facebook.com/ventum.bcn/photos/pcb.1645538478878813/1645536132212381/?type=3&theater'
      },
      {
        nombre: 'Cartagena',
        singladura: 0,
        position: {lat: 37.49, lng: -1.08},
        icon: '/images/markerOff.png',
        fecha: '2018',
        link: 'https://www.facebook.com/ventum.bcn/photos/pcb.1645546695544658/1645539915545336/?type=3&theater'
      },
      {
        nombre: 'Cerdeña',
        singladura: 0,
        position: {lat: 40.19, lng: 7.82},
        icon: '/images/markerOff.png',
        fecha: '2017',
        link: 'https://www.facebook.com/ventum.bcn/photos/pcb.1645204352245559/1645201648912496/?type=3&theater'
      },     
      {
        nombre: 'Baleares',
        singladura: 0,
        position: {lat: 39.14, lng: 2.11},
        icon: '/images/markerOff.png',
        fecha: '2017',
        link: 'https://www.facebook.com/ventum.bcn/photos/pcb.1645527242213270/1645525262213468/?type=3&theater'
      },
      {
        nombre: 'Eolicas',
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
        fecha: 'Septiembre-Octubre 2018',
        link: 'https://www.facebook.com/ventum.bcn/photos/pcb.1645538478878813/1645536132212381/?type=3&theater'
      },
      {
        nombre: 'Canarias',
        singladura: 1,
        position: {lat: 29.19, lng: -15.51},
        icon: '/images/markerOn.png',
        fecha: 'Noviembre 2018'
      },
      {
        nombre: 'Travesia Atlantico',
        singladura: 1,
        position: {lat: 11.85, lng: -32.95},
        icon: '/images/markerOn.png',
        fecha: 'Diciembre 2018'
      }
      ,
      {
        nombre: 'Caribe',
        singladura: 1,
        position: {lat: 15.68, lng: -76.32},
        icon: '/images/markerOn.png',
        fecha: 'Diciembre 2018'
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

    const images = [
      {
        original: '/images/bestMoments/4.png',
        thumbnail: '/images/bestMoments/4.png',
        description: 'Baleares'
      },
      {
        original: '/images/bestMoments/1.jpg',
        thumbnail: '/images/bestMoments/1.jpg',
        description: 'Baleares'
      },
      {
        original: '/images/bestMoments/3.jpg',
        thumbnail: '/images/bestMoments/3.jpg',
        description: 'Baleares'
      },
      {
        original: '/images/bestMoments/5.png',
        thumbnail: '/images/bestMoments/5.png',
        description: 'Cartagena'
      },
      {
        original: '/images/bestMoments/6.jpg',
        thumbnail: '/images/bestMoments/6.jpg',
        description: 'Cartagena'
      },
      {
        original: '/images/bestMoments/7.jpg',
        thumbnail: '/images/bestMoments/7.jpg',
        description: 'Cerdeña'
      },
      {
        original: '/images/bestMoments/8.jpg',
        thumbnail: '/images/bestMoments/8.jpg',
        description: 'Cerdeña'
      },
      {
        original: '/images/bestMoments/9.jpg',
        thumbnail: '/images/bestMoments/9.jpg',
        description: 'Premià de Mar'
      }

    ]

    return (
      <div className="Itinerary">

        <div id='map'></div>
        
        <h1 className='subTitle'>Itinerary</h1>
        
        
        <div className='conditions'>

          <div>
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
          </div>
          
          <div>
            <h2>Past Trips</h2>
            {this.markers.map((x,i)=>{
              if(x.singladura === 0){
                return(
                  <p onClick={()=> this.initMapOne(x)} key={x.nombre+i}>- {x.nombre} <span>({x.fecha})</span><a href={x.link} target='_blank' rel="noopener noreferrer"> Photos</a> </p>
                );
              }
              else{
                return false;
              }
            })}
          </div>
          
          <div>
            <h2>all</h2>
            <p onClick={() => this.initMap()}>- See all trips</p>
          </div>
        </div>

        <h1 className='subTitle'>Best moments</h1>
        <div className='gallery'>
          <ImageGallery 
            items={images} 
            slideDuration={700}
            thumbnailPosition={'left'}
            showPlayButton={false}
          />
        </div>
      </div>
    );
  }
}

export default Itinerary;