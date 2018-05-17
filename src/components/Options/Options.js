import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Options extends Component{
    render(){
        return(
            <section className='Options'>
                <div className='option'>
                    <Link to='/equipment'>
                        <img src="/images/a.png" alt='equipment-option' />
                        <div><h2>Equipment</h2></div>
                    </Link>
                </div>
                <div className='option'>
                   <Link to='/itinerary'>
                        <img src="/images/b.png" alt='itinerary-option' />
                        <div><h2>Itinerary</h2></div>
                    </Link>
                </div>
                <div className='option'>
                    <Link to='/prices'>
                        <img src="/images/c.png" alt='prices-option' />
                        <div><h2>Prices</h2></div>
                    </Link>
                </div>
                
            </section>
        )
    }
}


export default Options;