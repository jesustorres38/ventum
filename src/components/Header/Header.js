import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Navbar_Desktop">
          <div className="Navbar_Logo">

          </div>

          <div className="Navbar_Content">

            <div className="contacto">
              <a href="tel:+34626482695">Contact: <span>+34 626 482 695</span></a>
              <a href="mailto:marcabad@ventum.barcelona">Email: marcabad@ventum.barcelona</a>
              <div className="redes"></div>
            </div>

            <div className="links">
              <ul>

                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/equipment">Equipamiento</Link></li>
                <li><Link to="/itinerary">Itinerario</Link></li>
                <li><Link to="/prices">Tarifas</Link></li>
                <li><Link to="/">Contacto</Link></li>
                
              </ul>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Header;