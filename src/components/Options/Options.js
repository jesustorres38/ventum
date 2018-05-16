import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Options extends Component{
    render(){
        return(
            <section className='Options'>
                <div className='option'>
                    <Link to='/equipment'><img src="/images/a.png" alt='equipment-option' /></Link>
                </div>
                <div className='option'>
                   <Link to={{ pathname: '/itinerary', saludo: 'helloDA'}}><img src="/images/b.png" alt='itinerary-option' /> </Link>
                </div>
                <div className='option'>
                    <Link to='/prices'><img src="/images/c.png" alt='prices-option' /></Link>
                </div>
                
            </section>
        )
    }
}


export default Options;