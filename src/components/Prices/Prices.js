import React, { Component } from 'react';

class Prices extends Component {
  render() {
    return (
      <div className="Prices">
        <div className='title'>
          <h1>Prices</h1>
        </div>

        <h1 className='subTitle'>Base West Mediterranean</h1>
        <div className="base">
          <div>
            <h2>Barcelona</h2>
            <a href='https://www.google.com/maps?q= Marina Port Premià, Barcelona' target='_blank' rel="noopener noreferrer">- Marina Port Premià</a>
          </div>
          <div>
            <h2>Menorca</h2>
            <a href='https://www.google.com/maps?q= Marina Port Mao, Menorca' target='_blank' rel="noopener noreferrer">- Marina Port Mao</a>
            <a href='https://www.google.com/maps?q= Port de Ciutadella, Menorca' target='_blank' rel="noopener noreferrer">- Port de Ciutadella</a>
          </div>
          <div>
            <h2>Mallorca</h2>
            <a href='https://www.google.com/maps?q= Port de Palma de Mallorca, Mallorca' target='_blank' rel="noopener noreferrer">- Port de Palma de Mallorca</a>
          </div>
          <div>
            <h2>Eivissa</h2>
            <a href='https://www.google.com/maps?q= Marina Port de Santa Eulàlia, Eivissa' target='_blank' rel="noopener noreferrer">- Marina Port de Santa Eulàlia</a>
          </div>

        </div>

        <h1 className='subTitle'>Seasons</h1>
        <div className='seasons'>

          <div className='cont'>
            <h1>Low</h1>
            <p>24/03 - 15/06</p>
            <div className='subcont'>
              <p>1 Day</p>
              <p>650€</p>
            </div>
            <div className='subcont'>
              <p>7 Days</p>
              <p>3950€</p>
            </div>
          </div>

          <div className='cont'>
            <h1>Middle</h1>
            <p>16/06 - 20/07</p>
            <div className='subcont'>
              <p>1 Day</p>
              <p>850€</p>
            </div>
            <div className='subcont'>
              <p>7 Days</p>
              <p>4950€</p>
            </div>
          </div>

          <div className='cont'>
            <h1>High</h1>
            <p>21/07 - 24/08</p>
            <div className='subcont'>
              <p>1 Day</p>
              <p>950€</p>
            </div>
            <div className='subcont'>
              <p>7 Days</p>
              <p>5950€</p>
            </div>
          </div>        
        </div>

        <div className='conditions'>
          
          <h2>Crew</h2>
          <p>- Captain: 175€/day (obligatory options, without discount) <br/>- Sailor: 150 €/day (optional; without discount). It necessary that clients ask for sail if they need it to sail.<br/>- Service: 125 /day (optional; without discount)</p>
          
          <h2>Others</h2>
          <p>- Deposit: 2500€ (obligatory options)<br/>- End cleaning: 150€ (obligatory options, without discount)<br/>- Bed sheets: 20€/person (obligatory options, without discount)</p>
        </div>

        <h1 className='subTitle'>Payment and Discounts</h1>
        <div className='conditions'>
          <h2>Normal conditions</h2>
          <p>- 40% paid just booking + 60% paid 1 month before departure.</p>

          <h2>Discount policy</h2>
          <p> - 15 % if the charter is 100% paid 3 months before departure.<br/>- 10% if the charter is 100% paid 2 months before departure.<br/>- 5% for repeat clients.<br/>- All discounts are for all kind of charters duration, and are progressive if there are more than one discount: first for payment in advance.<br/></p>
        </div>

        <h1 className='subTitle'>Check In/Out</h1>
        <div className='conditions last'>
          <h2>7 Days charter</h2>
          <p>- Checkin time: Saturday at 12 h.</p>

          <h2>1 Day charter</h2>
          <p> - 15 % if the charter is 100% paid 3 months before departure.<br/>- 10% if the charter is 100% paid 2 months before departure.<br/>- 5% for repeat clients.<br/>- All discounts are for all kind of charters duration, and are progressive if there are more than one discount: first for payment in advance.<br/></p>
        </div>
        

      </div>
    );
  }
}

export default Prices;