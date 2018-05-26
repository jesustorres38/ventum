import React, { Component } from 'react'
import SliderSmall from '../SliderSmall/SliderSmall'
import SliderSmallVer from '../SliderSmallVer/SliderSmallVer'

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

    const deck = [
      {url: '/images/generalEquipment/deck/1.jpg'},
      {url: '/images/generalEquipment/deck/2.jpg'},
      {url: '/images/generalEquipment/deck/3.jpg'},
      {url: '/images/generalEquipment/deck/4.jpg'},
      {url: '/images/generalEquipment/deck/5.jpg'},
      {url: '/images/generalEquipment/deck/6.jpg'}
    ];

    const auxiliary = [
      {url: '/images/generalEquipment/auxiliary/1.jpg'},
      {url: '/images/generalEquipment/auxiliary/2.jpg'},
      {url: '/images/generalEquipment/auxiliary/3.jpg'},
      {url: '/images/generalEquipment/auxiliary/4.jpg'}
    ];


    return (
      <div className="Equipment">
        <div className='title'>
          <h1>Equipment</h1>
        </div>

         <h1 className='subTitle'>General Equipment</h1>

         <div className='item'>
          <div className='fotosH'>
            <SliderSmall images={saloon}/>
          </div>
          <div className='info'>
            <h2>Saloon (4 x 3.7 m)</h2>
            <p>- Seating around dining table to port and to starboard.<br/>- Interior upholstered pearl grey.<br/>- L-Shaped galley equipped with gas cooking and oven.<br/>- Isotherm fridge + Isotherm Marine cool box.<br/>- Termomix.<br/>- Microwave.<br/>- Chart table to port with electronics. (plotter, etc.)<br/>- TV + WI-FI.<br/>- ASUS P2 LED Projector + Advanced portable screen.</p>
          </div>
         </div>

         <div className='item'>
          <div className='fotosV'>
            <SliderSmallVer images={accommodates}/>
          </div>
          <div className='info'>
            <h2>Accommodates: 4 (8 Berths)</h2>
            <p>- Front 2 cabins with en-suite heads compartment.<br/>- Stern 2 cabins with en-suite heads compartment.<br/>- Heads comparments: 4.<br/>- Bow crew cabin: 1.<br/>- Total capacity: 12 People. (crew included)</p>
          </div>
         </div>

         <div className='item'>
          <div className='fotosH'>
            <SliderSmall images={deck}/>
          </div>
          <div className='info'>
            <h2>Deck</h2>
            <p>- Sailing: Self tacking gib / Gennaker / Mainsail.<br/>- Bimini. (solar panels)<br/>- Steering: Twin wheel.</p>
          </div>
         </div>

         <div className='item'>
          <div className='fotosV'>
            <SliderSmallVer images={auxiliary}/>
          </div>
          <div className='info'>
            <h2>Others</h2>
            <p>
              - Auxiliary vessel: Highfield aluminium boat with honda offshore engine.<br/>
              - Boat equipment: Oceanic navigation. (Zone 1)<br/>
              - Fuel: 395 LTS.<br/>
              - Fresh water: 2 Tanks 690 L.<br/>
              - Water maker: 80 L/H.<br/>
              - Hot water.<br/>
              - Heating.<br/>
              - Generator: Mastervol Whisper 3,5.<br/>
            </p>
          </div>
         </div>

         <h1 className='subTitle'>Especific Equipment</h1>
         <div className='conditions'>
          <h2>Info</h2>
          <p>
            - Builder: Hanse Yachts AG (Alemania / Germany) TYPE: 540e.<br/>
            - Design: Year 2008 Loa: 16.08 mts Beam: 4.91 mts Draft: 2.43 mts.<br/>
            - Hull construction: Epoxy / Teak deck.<br/>
            - Engine: Yanmar 4JH4HTE  power: 110 HP.<br/>
            - Run hours: 850.<br/>
            - Fuel type: Diesel.<br/>
            - Transmission: Direct shaft helice / Propeller gori. (over drive)<br/>
            - Holding tank: 4.<br/>
            - Flag: Spanish.<br/>
            - Boat equipment: Oceanic navigation. (Zone 1)<br/>
          </p>
         </div>

         <div className='conditions'>
          <h2>Electrical systems</h2>
          <p>
            - 12V.<br/>
            - 230V Shore power.<br/>
            - Electric generator 3,5KV.<br/>
            - Automatic batteries charger.<br/>
            - Energy solar panels.<br/>
            - Batteries with 1185AH total capacity.<br/>
            - Electric bilge pumps.<br/>
            - Manual bilge pump.<br/>
            - Electric anchor windlass.<br/>
            - Bow thruster.<br/>
          </p>
         </div>

         <div className='conditions'>
          <h2>Electronics</h2>
          <p>
            - AC42 Autopilot computer SIMRAD.<br/>
            - SIMRAD GB40 Integrated Network System; GPS, speed, wind, log, etc.<br/>
            - SIMRAD GB40 ChartPlotter DI10.<br/>
            - SIMRAD radar.<br/>
            - SIMRAD VHF RS90 DSC.<br/>
            - AIS MCMURDO M10 B.<br/>
            - NAVTEX NASA.<br/>
            - INMARSAT-C: SAILOR TT-3042E.<br/>
            - VHF portable GMDSS survival craft transceiver.<br/>
            - VHF portable ICOM IC-M23.<br/>
            - EPIRB Kannad Marine.<br/>
            - TRANSPONDER Kannad marine.<br/>
          </p>
         </div>

         <div className='conditions'>
          <h2>Deck equipment</h2>
          <p>
            - Delta anchor with chain.<br/>
            - Safety equipment. (Oceanic; Zone 1)<br/>
            - Davids.<br/>
            - Hydraulic transom deck platform with control.<br/>
            - Swimming ladder.<br/>
            - Deck shower.<br/>
            - Folding cockpit table.<br/>
            - 12 pax liferaft.<br/>
          </p>
         </div>

         <div className='conditions last'>
          <h2>Rigging sails</h2>
          <p>
            - Standing rigging review 2018.<br/>
            - Self-tacking jib.<br/>
            - Roller furlingsystems jib.<br/>
            - Starboard electric winch.<br/>
            - Port manual winch.<br/>
            - Two stern manual winch.<br/>
            - Bow electric winch.<br/>
          </p>
         </div>

      </div>
    );
  }
}

export default Equipment;