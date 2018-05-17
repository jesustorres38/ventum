import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    const {pathname} = this.props.location;

    return (
      <div className="Header">
        <div className="Navbar_Desktop">
          <div className="Navbar_Logo">
            <Link to='/'><img src="/images/logo.jpg" alt="logo-ventum" /></Link>
          </div>

          <div className="Navbar_Content">

            <div className="contacto">
              <a href="tel:+34626482695">Contact: <span>+34 626 482 695</span></a>
              <a href="mailto:marcabad@ventum.barcelona">Email: <span>marcabad@ventum.barcelona</span></a>
              <div className="redes">
                <a href="https://www.facebook.com/ventum.bcn/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.face/"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div className="links">
              <ul>

                <li className={pathname === '/' ? 'active':''}><Link to="/">Home</Link></li>
                <li className={pathname === '/equipment' ? 'active':''}><Link to="/equipment">Equipment</Link></li>
                <li className={pathname === '/itinerary' ? 'active':''}><Link to="/itinerary">Itinerary</Link></li>
                <li className={pathname === '/prices' ? 'active':''}><Link to="/prices">Prices</Link></li>
                <li className={pathname === '/contact' ? 'active':''}><Link to="/">Contact</Link></li>
                
              </ul>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Header;