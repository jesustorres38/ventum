import React, { Component } from 'react'
import SliderSmall from '../SliderSmall/SliderSmall'

class Equipment extends Component {
  render() {
    const saloon = [
      {url: '/images/generalEquipment/saloon/1.jpg'},
      {url: '/images/generalEquipment/saloon/2.jpg'},
      {url: '/images/generalEquipment/saloon/3.jpg'},
      {url: '/images/generalEquipment/saloon/4.jpg'},
      {url: '/images/generalEquipment/saloon/5.jpg'},
      {url: '/images/generalEquipment/saloon/6.jpg'},
      {url: '/images/generalEquipment/saloon/7.jpg'},
      {url: '/images/generalEquipment/saloon/8.jpg'}
    ];

    const accommodates = [
      {url: '/images/generalEquipment/accommodates/1.jpg'},
      {url: '/images/generalEquipment/accommodates/2.jpg'},
      {url: '/images/generalEquipment/accommodates/3.jpg'},
      {url: '/images/generalEquipment/accommodates/4.jpg'},
      {url: '/images/generalEquipment/accommodates/5.jpg'},
      {url: '/images/generalEquipment/accommodates/6.jpg'},
      {url: '/images/generalEquipment/accommodates/7.jpg'}
    ];


    return (
      <div className="Equipment">
        <div className='title'>
          <h1>Equipment</h1>
        </div>

         <h1 className='subTitle'>General Equipment</h1>
         <div className='item'>
          <div className='fotos'>
            <SliderSmall images={saloon}/>
          </div>
          <div className='info'>
            <h2>Saloon (4 x 3.7 m)</h2>
            <p>- Seating around dining table to port and to starboard<br/>- Interior upholstered pearl grey<br/>- L-Shaped galley equipped with gas cooking, oven, Isotherm fridge + Isotherm Marine cool box<br/>- Termomix<br/>- Microwave<br/>- Chart table to port with electronics (plotter, etc.)<br/>- TV + WI-FI<br/>- ASUS P2 LED Projector + Advanced portable screen</p>
          </div>
         </div>

         <div className='item'>
          <div className='fotos'>
            <SliderSmall images={accommodates}/>
          </div>
          <div className='info'>
            <h2>Others</h2>
            <p>- Bed sheets: 20€/person (obligatory options, without discount)</p>
          </div>
         </div>



      </div>
    );
  }
}

export default Equipment;