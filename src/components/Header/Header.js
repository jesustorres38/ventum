import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends Component {

  render() {
    const {pathname} = this.props.location;

    return (
      <div className='Header'>
        <div className='Navbar_Desktop'>
          <div className="Navbar_Logo">
            <Link to='/'><img src="/images/logo.jpg" alt="logo-ventum" /></Link>
          </div>

          <div className="Navbar_Content">

            <div className="contacto">
              <a href="tel:+34626482695">Contact: <span>+34 626 482 695</span></a>
              <a href="mailto:marcabad@ventum.barcelona">Email: <span>marcabad@ventum.barcelona</span></a>
              <div className="redes">
                <a href="https://www.facebook.com/ventum.bcn/" target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/ventum.barcelona/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div className="links">
              <ul>

                <li className={pathname === '/' ? 'active':''}><Link to="/">Home</Link></li>
                <li className={pathname === '/equipment' ? 'active':''}><Link to="/equipment">Equipment</Link></li>
                <li className={pathname === '/itinerary' ? 'active':''}><Link to="/itinerary">Itinerary</Link></li>
                <li className={pathname === '/prices' ? 'active':''}><Link to="/prices">Prices</Link></li>
                <li className={pathname === '/contact' ? 'active':''}><AnchorLink href='#contact'>Contact</AnchorLink></li>
                
              </ul>
            </div>

          </div>

        </div>
        <div className='Navbar_Mobile'>
          <i className="fas fa-bars" onClick={() => {console.log('abrir')}}></i>
          <i className="fas fa-times close"></i>
          <div className='wrapper'>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Header;