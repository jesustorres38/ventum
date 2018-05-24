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
            <h2>ACCOMMODATES: 4 (8 BERTHS)</h2>
            <p>- Front 2 cabins with en-suite heads compartment.<br/>- Stern 2 cabins with en-suite heads compartment.<br/>- HEADS COMPARTMENTS: 4.<br/>- BOW CREW CABIN: 1.<br/>- TOTAL CAPACITY: 12 PEOPLE. (crew included)</p>
          </div>
         </div>

         <div className='item'>
          <div className='fotosH'>
            <SliderSmall images={deck}/>
          </div>
          <div className='info'>
            <h2>Deck</h2>
            <p>- SAILING: SELF TACKING GIB / GENNAKER / MAINSAIL.<br/>- BIMINI. (solar panels)<br/>- STEERING: TWIN WHEEL.</p>
          </div>
         </div>

         <div className='item'>
          <div className='fotosV'>
            <SliderSmallVer images={auxiliary}/>
          </div>
          <div className='info'>
            <h2>Others</h2>
            <p>
              - AUXILIARY VESSEL: HIGHFIELD ALUMINIUM BOAT WITH HONDA OFFSHORE ENGINE.<br/>
              - BOAT EQUIPMENT: OCEANIC NAVIGATION. (ZONE 1)<br/>
              - FUEL: 395 LTS.<br/>
              - FRESH WATER: 2 TANKS 690 L.<br/>
              - WATER MAKER: 80 L/H.<br/>
              - HOT WATER.<br/>
              - HEATING.<br/>
              - GENERATOR: MASTERVOLT WHISPER 3,5.<br/>
            </p>
          </div>
         </div>

         <h1 className='subTitle'>ESPECIFIC EQUIPMENT</h1>
         <div className='conditions'>
          <h2>Info</h2>
          <p>
            - BUILDER: Hanse Yachts AG (Alemania / Germany) TYPE: 540e.<br/>
            - DESIGN: YEAR: 2008 LOA: 16.08 mts BEAM: 4.91 mts DRAFT: 2.43 mts.<br/>
            - HULL CONSTRUCTION: EPOXY / TEAK DECK.<br/>
            - ENGINE: YANMAR 4JH4HTE  POWER: 110 HP.<br/>
            - RUN HOURS: 850.<br/>
            - FUEL TYPE: DIESEL.<br/>
            - TRANSMISSION: DIRECT SHAFT HELICE / PROPELLER GORI. (over drive)<br/>
            - HOLDING TANK: 4.<br/>
            - FLAG: SPANISH.<br/>
            - BOAT EQUIPMENT: OCEANIC NAVIGATION. (ZONE 1)<br/>
          </p>
         </div>

         <div className='conditions'>
          <h2>Electrical systems</h2>
          <p>
            - 12V.<br/>
            - 230V SHORE POWER.<br/>
            - ELECTRIC GENERATOR 3,5KV.<br/>
            - AUTOMATIC BATTERIES CHARGER.<br/>
            - ENERGY SOLAR PANNELS.<br/>
            - BATTERIES WITH 1185AH TOTAL CAPACITY.<br/>
            - ELECTRIC BILGE PUMPS.<br/>
            - MANUAL BILGE PUMP.<br/>
            - ELECTRIC ANCHOR WINDLASS.<br/>
            - BOW THRUSTER.<br/>
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
            - DELTA ANCHOR WITH CHAIN.<br/>
            - SAFETY EQUIPMENT. (OCEANIC; ZONE 1)<br/>
            - DAVIDS.<br/>
            - HYDRAULIC TRANSOM DECK PLATFORM WITH CONTROL.<br/>
            - SWIMMING LADDER.<br/>
            - DECK SHOWER.<br/>
            - FOLDING COCKPIT TABLE.<br/>
            - 12 PAX LIFERAFT.<br/>
          </p>
         </div>

         <div className='conditions last'>
          <h2>Rigging sails</h2>
          <p>
            - STANDING RIGGING REVIEW 2018.<br/>
            -  SELF-TACKING JIB.<br/>
            -  ROLLER FURLING SYSTEMS JIB.<br/>
            - STARBOARD ELECTRIC WINCH.<br/>
            - PORT MANUAL WINCH.<br/>
            - TWO STERN MANUAL WINCH.<br/>
            - BOW ELECTRIC WINCH.<br/>
          </p>
         </div>

      </div>
    );
  }
}

export default Equipment;