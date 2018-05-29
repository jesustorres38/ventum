import React, { Component } from 'react'
import AOS from 'aos'

class Prices extends Component {

  componentDidMount(){
    AOS.init();
  } 

  render() {
    return (
      <div className={document.readyState === 'complete' ? 'Prices':'Hide'} data-aos="fade-up" data-aos-duration='1600'>
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
            <a href='https://www.google.com/maps?q= Club Nautic Eivissa, Eivissa' target='_blank' rel="noopener noreferrer">- Club Nautic Eivissa</a>
          </div>

        </div>

        <h1 className='subTitle'>Seasons</h1>
        <div className='seasons'>

          <div className='cont'>
            <h1>Low</h1>
            <p>01/01 - 30/06 and 08/09 - 31/12</p>
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
            <p>30/06 - 21/07 and 25/08 - 08/09</p>
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
            <p>21/07 - 25/08</p>
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
          <p>- 150 €/dia skeeper. <br/>- 125 €/dia sailor-hostess.</p>
          
          <h2>Others</h2>
          <p>- End cleaning: 140 €/week. <br/>- Bed sheets: 80 €/week for booking.</p>
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
          <p>- Saturday: In 15 h. / Out 10 h.</p>

          <h2>1 Day charter</h2>
          <p> - 15 % if the charter is 100% paid 3 months before departure.<br/>- 10% if the charter is 100% paid 2 months before departure.<br/>- 5% for repeat clients.<br/>- All discounts are for all kind of charters duration, and are progressive if there are more than one discount: first for payment in advance.<br/></p>
        </div>
        

      </div>
    );
  }
}

export default Prices;